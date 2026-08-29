import Input_Api from "./Component/Location_Weather";
import Hourly_Weather from "./Component/Hourly_Weather.";
import { useState } from "react";
function App() {

  const [count,setcount]=useState("");
  return (
    <div>
      <Input_Api />
      <Hourly_Weather />
    </div>
  )
}

export default App;