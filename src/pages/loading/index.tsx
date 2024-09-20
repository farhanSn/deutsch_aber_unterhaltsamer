/* eslint no-use-before-define: 0 */  // --> OFF
import '../../App.css'

function Loading() {


    return (<div style={{flex:1,height: '100vh', display: "flex", flexDirection: 'column'}}>
            <img style={{flex:1, objectFit:"fill"}} src={'/loading.jpg'} alt={""}/>
            <span style={{position: 'absolute', bottom:10, insetInline: 0, color: "white"}}>
              Produced by Farhan Shayan
          </span>
        </div>
    )
}

export default Loading
