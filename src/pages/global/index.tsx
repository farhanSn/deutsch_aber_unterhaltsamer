/* eslint no-use-before-define: 0 */  // --> OFF
import {Button} from "antd";
import { NavLink} from "react-router-dom";


const Global = () => {
    return <div style={{margin:0, paddingTop:24,height: '100vh', display: "flex", flexDirection: 'column', paddingInline:16, gap:16, justifyContent: 'center'}}>
        <Button onClick={()=> {}}>
            <p>
                <NavLink style={{width: '100%', height: '100%', color: 'black'}} to={'/b1'}>
                    Starten Wir B1
                </NavLink>
            </p>
        </Button>
        <Button onClick={()=> {}}>
            <p>
                <NavLink style={{width: '100%', height: '100%', color: 'black'}} to={'/a2'}>
                    Starten Wir A2
                </NavLink>
            </p>
        </Button>
        </div>
}

export default Global;
