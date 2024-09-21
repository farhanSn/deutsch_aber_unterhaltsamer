/* eslint no-use-before-define: 0 */  // --> OFF
import {Button} from "antd";
import {useNavigate} from "react-router-dom";


const Global = () => {

    const navigate = useNavigate();

    return <div style={{margin:0, paddingTop:24,height: '100vh', display: "flex", flexDirection: 'column', paddingInline:16, gap:16, justifyContent: 'center'}}>
        <Button onClick={()=> navigate('b1')}>
            <p>
                    Starten Wir B1
            </p>
        </Button>
        <Button onClick={()=> navigate('a2')}>
            <p>
                    Starten Wir A2
            </p>
        </Button>
        </div>
}

export default Global;
