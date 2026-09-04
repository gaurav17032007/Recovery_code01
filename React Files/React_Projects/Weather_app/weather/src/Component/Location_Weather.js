import "./Location_weather.css";
import { useState, useEffect } from "react";

function Input_Api({ setcount }) {
  const [city, setcity] = useState("");
  const [data, setdata] = useState(null);

  // const API_KEY = "YOUR_API_KEY_HERE";

  // 🔥 AUTO LOCATION WEATHER (BEST METHOD)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const apikey = "250a771d8ac5e120e7b19c92e4f80b0a";
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`
          );

          const result = await res.json();

          setdata(result);
          setcount(result.name); // city name auto set
        } catch (err) {
          console.log("Location error:", err);
        }
      },
      (error) => {
        console.log("Permission denied or error:", error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  }, [setcount]);

  // 🔍 SEARCH WEATHER
  const getWeather = async (e) => {
    e.preventDefault();
    if (!city) return;

    try {
      const apikey = "250a771d8ac5e120e7b19c92e4f80b0a";
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
      );

      const result = await res.json();

      setdata(result);
      setcount(city);
      setcity("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="Input_Location">

      {/* 🔍 SEARCH BOX */}
      <div className="search_location">
        <form onSubmit={getWeather}>
          <input
            type="search"
            placeholder="Enter location"
            value={city}
            onChange={(e) => setcity(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      {/* 🌦️ WEATHER DATA */}
      <div className="weather_data">
        {data && (
          <>
            <div className="box1">

              <div className="weather_icon">
                <img
                  src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`}
                  alt="weather icon"
                />
                <h2>{Math.floor(data?.main?.temp)}°C</h2>
              </div>

              <div className="weather_description">
                <h3>{data?.weather?.[0]?.description}</h3>
                <h4>Feels like: {Math.floor(data?.main?.feels_like)}°C</h4>
              </div>
            </div>

            <div className="box2">
              <div className="weather_humidity">
                <h4>💧 Humidity</h4>
                <h5>{data?.main?.humidity}%</h5>
              </div>

              <div className="wind_speed">
                <h4>🌬 Wind</h4>
                <h5>{data?.wind?.speed} m/s</h5>
              </div>

              <div className="weather_visibility">
                <h4>👁 Visibility</h4>
                <h5>{data?.visibility ? data.visibility / 1000 : 0} km</h5>
              </div>

              <div className="weather_pressure">
                <h4>📊 Pressure</h4>
                <h5>{data?.main?.pressure} hPa</h5>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Input_Api;