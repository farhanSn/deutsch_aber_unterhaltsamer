import {useEffect, useState} from 'react'
import './App.css'
import {Button, Card, Flex, Typography} from "antd";
import '@fontsource/poppins';


function App() {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://my_server-farhanshn.ladeapp.com/data');

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



  return loading ? <div>loading...</div> : (
      <div style={{margin:0, paddingTop:24,height: '100vh', display: "flex", flexDirection: 'column', paddingInline:16}}>
          <Card title={data[index].word} bordered={false} style={{ padding: 16, marginTop:100, boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <p>{data[index].def}</p>
          </Card>
          <Flex style={{ gap: 6, marginTop: 'auto', marginBottom: 60, flexDirection: "column"}} >
              <Flex style={{justifyContent: "space-around", gap: 24, flexDirection: "row"}}>
                  <Button style={{flex:1, paddingBlock: 24}} onClick={()=> setIndex((i)=> {
                      if(i-1<0){
                          console.log(data.length -1)
                          return data.length -1;
                      }
                      return i-1
                  })}>
                      <Typography style={{fontWeight: 600}}>
                          قبلی
                      </Typography>
                  </Button>
                  <Button  style={{flex:1, paddingBlock: 24}} onClick={()=> setIndex((i)=> (i+1) % data.length)}>
                      <Typography style={{fontWeight: 600}}>
                          بعدی
                      </Typography>
                  </Button>
              </Flex>
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
