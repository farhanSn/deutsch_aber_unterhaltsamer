/* eslint no-use-before-define: 0 */  // --> OFF
import {Button} from "antd";
import {useNavigate} from "react-router-dom";


const Courses = () => {
    const navigate = useNavigate();


    const navigation = (to: any, witch: any) => {
        console.log('1222')
        navigate(to, { state: { lektion: witch }});
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
