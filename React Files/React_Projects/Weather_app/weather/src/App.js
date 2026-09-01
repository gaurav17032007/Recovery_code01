import './App.css';
import InputApi from "./Component/Location_Weather";
import HourlyWeather from "./Component/Hourly_Weather.";
import Location from "./Component/Current_location";
import User from "./Component/Form_Validation";
import { useState } from "react";
function App() {

  const [count,setcount]=useState("");
  return (
    <div className="App">
      <Location/>
      <InputApi setcount={setcount}/>
      <HourlyWeather count={count}/>
      <User/>
    </div>
  )
}

export default App;