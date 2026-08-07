import { useState ,createContext} from 'react';
import './App.css';
import ComA from './Component/ComA';

const CreateCom=createContext();
function App() {
    const [data,Udate]=useState("Zillionsoftech");
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <CreateCom.Provider value={data}>
          <ComA/>
      </CreateCom.Provider>
    </div>
  );
}

export default App;
export {CreateCom};
