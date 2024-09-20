/* eslint no-use-before-define: 0 */  // --> OFF
import './App.css'
import {useEffect, useState} from "react";
import Loading from "./pages/loading";
import Global from "./pages/global/index.jsx";
import Courses from "./pages/courses/index.jsx";
import Question from "././pages/courses/question.jsx";
import {Route, Routes} from "react-router-dom";


function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(()=> setLoading(false), 3000);
    }, []);

    if(loading){
        return <Loading />
    }
  return <div style={{margin:0,height: '100vh', display: "flex", flexDirection: 'column'}}>
          <Routes>
              <Route path="/">
                  <Route index element={<Global />} />
                  <Route path="/b1" element={<Courses />} />
                  <Route path="/b1/question" element={<Question />} />
              </Route>
          </Routes>
      </div>
}

export default App
