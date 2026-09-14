import "./Current_location.css";
import { useEffect, useState } from "react";
import myImg from "../Images/morning.png";
import myImg1 from "../Images/evening.png";
import myImg2 from "../Images/night.png";
import myImg3 from "../Images/afternoon.png";
import myImg4 from "../Images/Map.png";

function Location({ setwait }) {
  const [state, setstate] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState("");
  
  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 5 && hours <= 12) {
      setTime("Good Morning");
      setImage(myImg);
    } else if (hours >= 12 && hours <= 17) {
      setTime("Good Afternoon");
      setImage(myImg3);
    } else if (hours >= 17 && hours <= 21) {
      setTime("Good Evening");
      setImage(myImg1);
    } else {
      setTime("Good Night");
      setImage(myImg2);
    }
  }, []);

  useEffect(() => {
    if (!navigator.geolocation) {
      setwait(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`
          );

          const result = await res.json();
          setstate(result.principalSubdivision || "Unknown location");
        } catch (err) {
          console.log("Fetch error:", err);
        } finally {
          setwait(false);
        }
      },
      (error) => {
        console.log("Current_Location error:", error);
        setwait(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }, [setwait]);

  return (
    <div className="location">
      <div className="location_img desktop_only">
        <img src={image || null} alt="time" width="50" />
        <h3>{time}</h3>
      </div>
      {}
      <div className="State_location">
        <img src={myImg4} alt="time" />
        <h4 className="mobile_only">{state}</h4>
      </div>
      <h4 className="desktop_only">React Frontend Developer</h4>
      <h4 className="desktop_only">{state}</h4>
    </div>
  );
}

export default Location;