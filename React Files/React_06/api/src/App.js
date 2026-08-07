import {Main,Main2,Main3} from "./component/UseState";
import { UseContext } from "./component/UseContext.jsx";
function App() {
  return (
    <div className="App">
      <h1>Hooks</h1>
      <Main/>
      <Main2/>
      <Main3/>
      <br/>
      <br/>
      <UseContext/>
    </div>
  );

}

export default App;
