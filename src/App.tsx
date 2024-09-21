/* eslint no-use-before-define: 0 */  // --> OFF
import './App.css'
import {useEffect, useState} from "react";
import Loading from "./pages/loading";
import Global from "./pages/global";
import Courses from "./pages/courses";
import Question from "./pages/courses/question.tsx";
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
                  <Route path="/b1" element={<Courses level={"b1"}/>} />
                  <Route path="/b1/question" element={<Question />} />
                  <Route path="/a2" element={<Courses level={"a2"}/>} />
                  <Route path="/a2/question" element={<Question />} />
              </Route>
          </Routes>
      </div>
}

export default App
