import { useState } from "react";
function Hourly_Weather(){

    const [time,settime] = useState(0);

    const getHoureData=async () => {
        const apikey="250a771d8ac5e120e7b19c92e4f80b0a";
        const url=`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${}&appid=${apikey}&units=metric`
        const response=await fetch(apikey,{
            method:'GET'
        })
        
        const result =await response.json();
        settime(result);
        console.log(result);
    }
    return(
        <div>
            <h1>{time}</h1>
        </div>
    )
}
export default Hourly_Weather;