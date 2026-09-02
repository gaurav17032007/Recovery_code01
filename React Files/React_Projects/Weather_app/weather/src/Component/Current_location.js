import "./Current_location.css";
import { useEffect, useState } from "react";
import myImg from "../Images/morning.png";
import myImg1 from "../Images/evening.png";
import myImg2 from "../Images/night.png";
import myImg3 from "../Images/afternoon.png";
import myImg4 from "../Images/Map.png";
function Location() {

    const [state, setstate] = useState("");
    const [time, setTime] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        let date = new Date();
        let hours = date.getHours();
        if (hours > 5 && hours < 12) {
            setTime("Good Morning");
            setImage(myImg);
        } else if (hours > 12 && hours < 17) {
            setTime("Good Afternoon");
            setImage(myImg3);
        } else if (hours > 17 && hours < 21) {
            setTime("Good Evening");
            setImage(myImg1);
        } else {
            setTime("Good Night");
            setImage(myImg2);
        }
        console.log(date.toLocaleTimeString());
    }, []);


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (res) => {
            let lat = res.coords.latitude;
            let lon = res.coords.longitude

            let url = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);

            const result = await url.json();
            setstate(result.address.state);
            console.log(result.address.state);
        }
        )
    }, [])
    return (
        <div className="location">
            <div className="location_img desktop_only">
                <img src={image} alt="time" width="50" />
                <h3>{time}</h3>
            </div>
            <img src={myImg4} alt="time" className="mobile_only" />
            <h4 className="mobile_only">{state}</h4>
            <h4 className="desktop_only">React Frontend Developer</h4>
            <h4 className="desktop_only">{state}</h4>
        </div>
    )
}
export default Location;