import { useState } from "react";
function Input_Api({city}){
    
  const [city, setcity] = useState("");
  const [data, setdata] = useState(null);


  const getWeather = async () => {
    const apikey = "250a771d8ac5e120e7b19c92e4f80b0a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    const respones = await fetch(url,{
      method: "GET"
    });
  
    const result =await respones.json();
    setdata(result);
    console.log(result);
  }
  return (
    <div>

      {data && (
        <>
          <h1>{data.name}</h1>
          <h2>{data.main.temp}</h2>
          <h3>{data.weather[0].description}</h3>
        </>
      )}

      <input
        type="text"
        placeholder="Enter location"
        value={city}
        onChange={(e) => setcity(e.target.value)}
      />
      <button onClick={getWeather}>Click</button>
    </div>
  )
}
export default Input_Api;