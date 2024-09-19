/* eslint no-use-before-define: 0 */  // --> OFF

import {useEffect, useState} from 'react'
import './App.css'
import {Button, Card, Flex, Typography} from "antd";


function App() {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);
    const [choices, setChoices] = useState([0]);
    const [showAnswer, setShowAnswer] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://server-farhanshn.ladeapp.com/data');

                if (!response.ok) {

                }

                const result = await response.json();
                setData(result.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchData();

    }, []);

    const createChoices= () => {
        setChoices([]);
        let arr = [index];
        for(let i = index; i < index+100; i++){
            if(arr.find((a)=> a === (i * 2 + 3))){
                continue;
            }
            const newChoice = (i * 2 + 3);
            arr = [...arr, newChoice];
            if(arr.length === 4){
                setChoices(arr.sort(() => 0.5 - Math.random()));
                break;
            }
        }
    }
    useEffect(() => {
        createChoices();
    }, [index]);

    const buttonBackground = (i: number) => {
        if(showAnswer && i === index){
            return "lightseagreen"
        }
        if(showAnswer && i === selectedIndex){
            return "red"
        }
    }


  return loading ? <div>loading...</div> : (
      <div style={{margin:0, paddingTop:24,height: '100vh', display: "flex", flexDirection: 'column', paddingInline:16}}>
          <Card title={data[index].word} bordered={false} style={{ padding: 16, marginTop:100, boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <Flex style={{ gap: 6, marginTop: 'auto', marginBottom: 60, flexDirection: "column"}}>
                  {choices.map((i)=> <Button disabled={showAnswer} style={{flex:1, paddingBlock: 24, backgroundColor: buttonBackground(i)}} onClick={()=> {
                      setShowAnswer(true);
                      setSelectedIndex(i);
                      setTimeout(()=> {
                          setIndex((ii)=> (ii+1) % data.length);
                          setShowAnswer(false);
                      }, 2000);


                  }}>
                      <Typography style={{fontWeight: 600, textWrap: "wrap"}}>
                          {data[i].def}
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
                      {data.length}
                  </Typography>
              </Flex>
          </Flex>

      </div>
  )
}

export default App
