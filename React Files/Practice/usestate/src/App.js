import './App.css';
import { useState } from 'react';
import Comp1 from './Component/Comp1';
import Comp2 from './Component/Comp2';
import Comp3 from './Component/Comp3';
import Comp4 from './Component/Comp4';
function App() {
  const [data, setdata] = useState(0);
  function increse() {
    setdata(data + 1);
  }
  function decrise(){
    setdata(data-1);
  }
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
      <h1>{data}</h1>
        <button onClick={increse}>Increse</button>
        <button onClick={decrise}>Decrise</button>
      <Comp1/>
      <Comp2/>
      <Comp3/>
      <Comp4/>
      </div>
    </div>
  );
}

export default App;
