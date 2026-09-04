import { useEffect, useState } from "react";
import "./Hourly_weather.css";
function Hourly_Weather({ count }) {

    const [time, settime] = useState(null);

    useEffect(() => {
        const getHoureData = async () => {
            if (!count) return;
            try {
                const apikey = "250a771d8ac5e120e7b19c92e4f80b0a";
                const url = `https://api.openweathermap.org/data/2.5/forecast?q=${count}&appid=${apikey}&units=metric`;
                const response = await fetch(url, {
                    method: 'GET'
                })

                const result = await response.json();
                settime(result);
                console.log(result);
            } catch (err) {
                console.error(`Hourly error ${err}`);
            }
        }

        getHoureData();
    }, [count]);

    return (
        <div className="hourly_container">
            {time?.list?.map((item, index) => (
                <div className="hourly_card" key={index}>
                    <p>{item.dt_txt}</p>
                    <p>{Math.round(item.main.temp)}°C</p>
                    <p>{item.weather[0].description}</p>
                </div>
            ))}
        </div>
    )
}
export default Hourly_Weather;   