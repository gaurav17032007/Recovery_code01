import './App.css';
import Header from './component/Header';
import { useReducer } from 'react';
  const reducer=(state2,action)=>{
    if(action.type=="INC"){
      return state2+1;
    }else if(action.type=="DIC"){
      return state2-1;
    }else if(action.type=="MUL"){
      return state2*2;
    }
    return state2;
  }
function App() {
  const [state,dispatch]=useReducer(reducer,0); 
  return (
    <div className="App">
      <header className="App-header">
        <div>
            <button onClick={()=>dispatch({type :"INC"})}>increment</button>
            <button onClick={()=>dispatch({type : "DIC"})}>dicrement</button>
            <button onClick={()=>dispatch({type : "MUL"})}>multiply</button>
        </div>
        <h1>{state}</h1>
      </header>
      <Header/>
    </div>
  );
}

export default App;
