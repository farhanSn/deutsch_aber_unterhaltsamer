/* eslint no-use-before-define: 0 */  // --> OFF
import {Button, Card, Flex, Modal, Typography} from "antd";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import { LuHelpCircle } from "react-icons/lu";


const Question = () => {
    const {state} = useLocation();
    const {lektion, level} = state;
    console.log({state})
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);
    const [choices, setChoices] = useState([0]);
    const [showAnswer, setShowAnswer] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [questions, setQuestions] = useState<any[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://server-farhanshn.ladeapp.com/data?level=${level}&lektion=${lektion}`);

                if (!response.ok) {

                }

                const result = await response.json();
                prepareData(result.data);
                setLoading(false);


            } catch (error) {
                setLoading(false);
            }
        };

        fetchData();

    }, []);

    const createChoices= () => {
        if(questions.length > 0){
            setChoices(questions[index].choices.sort(() => 0.5 - Math.random()));
        }

    }
    useEffect(() => {
        createChoices();
    }, [index, questions]);

    const buttonBackground = (x:any) => {
        if(showAnswer && x === questions[index].answer){
            return "lightseagreen"
        }
        if(showAnswer && selectedIndex === questions[index].choices.findIndex((z: any)=> z===x)){
            return "red"
        }
    }

    const prepareData = (data: any) => {
        const questions2 = data.flatMap((item: any) =>
            {
                return item.examples
            }
        );
        setQuestions(questions2.sort(() => 0.5 - Math.random()));
    }


    return loading ? <span>Loading...</span> : <>
        <div style={{margin:0, paddingTop:24,height: '100vh', display: "flex", flexDirection: 'column', paddingInline:16}}>
        <Card title={<div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
            <span style={{marginLeft: 'auto', textWrap: "wrap"}}>{questions[index].sentence}</span>
           <LuHelpCircle onClick={showModal} style={{marginLeft: 'auto'}} />
        </div>} bordered={false} style={{ padding: 16, marginTop:100, boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
            <Flex style={{ gap: 6, marginTop: 'auto', marginBottom: 60, flexDirection: "column"}}>
                {choices.map((i, index3)=> <Button disabled={showAnswer} style={{flex:1, paddingBlock: 24, backgroundColor:buttonBackground(i)}} onClick={()=> {
                    setShowAnswer(true);
                    setSelectedIndex(index3);
                    setTimeout(()=> {
                        setIndex((ii)=> (ii+1) % questions.length);
                        setShowAnswer(false);
                    }, 2000);


                }}>
                    <Typography style={{fontWeight: 600, textWrap: "wrap"}}>
                        {i}
                    </Typography>
                </Button>)}
            </Flex>
        </Card>
        <Flex style={{ gap: 6, marginTop: 'auto', marginBottom: 60, flexDirection: "column"}} >
            <Flex style={{justifyContent: "center", gap: 6, flexDirection: "row"}} >
                <Typography style={{fontWeight: 600, fontSize:20}}>
                    {index+1}
                </Typography>
                <Typography style={{fontWeight: 600, fontSize:20}}>
                    /
                </Typography>
                <Typography style={{fontWeight: 600, fontSize:20}}>
                    {questions.length}
                </Typography>
            </Flex>
        </Flex>
    </div>

    <Modal open={isModalOpen} onOk={handleOk} onCancel={handleOk}>
        <p>{questions[index].mean}</p>
    </Modal>
    </>
}

export default Question;
