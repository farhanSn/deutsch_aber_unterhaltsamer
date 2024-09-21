/* eslint no-use-before-define: 0 */  // --> OFF
import {Button} from "antd";
import {useNavigate} from "react-router-dom";


const Courses = ({level}: {level: any}) => {
    const navigate = useNavigate();


    const navigation = (to: any, witch: any) => {
        navigate(to, { state: { lektion: witch, level }});
    }
    if(level === "a2"){
        return <div style={{margin:0, paddingTop:24,height: '100vh', display: "flex", flexDirection: 'column', paddingInline:16}}>
            <Button onClick={()=> navigation('question', 20)}>
                <p>
                    Verben mit Präpositionen
                </p>
            </Button>
        </div>
    }
    return <div style={{margin:0, paddingTop:24,height: '100vh', display: "flex", flexDirection: 'column', paddingInline:16}}>
        <Button onClick={()=> navigation('question', 1)}>
            <p>
                Lektion 1
            </p>
        </Button>
    </div>
}

export default Courses;
