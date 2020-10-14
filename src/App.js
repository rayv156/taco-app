import React from 'react';
import './App.css';
import Display from "./components/display.js"

function App() {
  

  const [results, setResults] = React.useState({})

  const url = "http://taco-randomizer.herokuapp.com/random/?full-tack=true"

  const getResults = async () =>{
    const response = await fetch (url)
    const data = await response.json()
    setResults(data)
  }

React.useEffect(()=>{
  getResults()
}, [])

return (<>
 {/* <Form search={getResults}/> */}
 <Display taco={results}/>
 </>
);
}

export default App;
