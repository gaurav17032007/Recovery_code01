import { useState } from "react";
import "./SetValue.css";
function SetValue({store}) {
  const [number, SetNumber] = useState(0);
  async function Call_Function() {
    try{
      if (!store) {
      console.log("Ruko jara");
      return;
    }
    const set = await store.setValue(10);
    const output = await set.wait();

    console.log("Set Value : ", output);

    const get = await store.getValue();

    SetNumber(Number(get));
  }catch(err){
    alert("Cancel trasaction");
  }
  }
  return (
    <div className="Set">
      <h1>{number}</h1>
      <button onClick={Call_Function} style={{fontSize: "35px",border: "3px solid black",boxShadow: "1px 1px 1px white", borderRadius: "15px",padding:"5px",margin: "5px",cursor: "pointer"}}>Setvalue</button>
    </div>
  );
}
export default SetValue;
