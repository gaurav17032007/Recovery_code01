import './App.css';
import Createfunction from './Test';
import {useState} from 'react';
function App(firstName,lastName,age) {
  const [variable,setcahnge]=useState(0);

  return (
    
    <div className="App">
      <header className="App-header">
        <h1>Header</h1>
      </header>
      <Createfunction />
      <input type="text" placeholder='Text'
      onChange={(Event)=>setcahnge(Event.target.value)}/>
      <h2>{variable}</h2>
    </div>
  );
}
export default App;
