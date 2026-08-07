import './App.css';
import Footer from './Component/Footer';
import { useState } from 'react';
// import Testing,{Set} from './Testing';
function App() {
  const [num,setNum]=useState(1);

  function increment(){
    setNum(num+1);
  }
  function dicrement(){
    setNum(num-1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Footer/>
      </header>
      <div>
          <h1 className='number'>{num}</h1>
        <div className='button'>
          <button className='btn' onClick={increment}>Increment</button>
          <button className='btn' onClick={dicrement}>Decrement</button>
          <div/>
      </div>
      </div>
    </div>
  );
}

export default App;

