import './App.css';
import { useState ,useRef} from 'react';
function App() {
  const [data,setData]=useState("");
  // const [data1,setData1]=useState(0);
  const prestate=useRef();

  const formate=(e)=>{
    setData(e.target.value);
    
  }
  const Forme=()=>{
    prestate.current.focus();    
  }
  return (
    <div className="App">
      <header className="App-header">
      </header>

      
      <input ref={prestate} value={data} onChange={formate}/>
      <h1>Application is {prestate.current} here now</h1>
      <button onClick={Forme}>Click me</button>
    </div>
  );
}

export default App;
