import { useState } from "react";
import "./Form_validation.css";
function User() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");


    let color1 = "red";
    let color2 = "red";
    let color3 = "red";

    let hasUpper = /[`A-Z]/.test(password);
    let hasLower = /[`a-z]/.test(password);
    let symbol = /[`!@#$%^&*()_+\-={};':"\\|,.<>?~]/.test(password);
    let isValid=false;
    console.log(isValid);

    if (name.length > 3) {
        console.log("Name is valid");
    } else {
        console.log("Name is not valid");
    }

    if (password.length > 3) {
        console.log("Password is valid");
        isValid = true;
        console.log(isValid);
    } else {
        console.log("Password is not valid");
        isValid = false;
    }
    
    if (isValid===true && hasUpper) {
        color1 = "green";
        console.log("Password color is green");
        console.log(isValid);
    } else {
        color1 = "red";
    }
    
    if (isValid===true && hasLower) {
        color2 = "green";
        console.log("Password color is green");
        console.log(isValid);
    } else {
        color2 = "red";
    }
    
    if (isValid===true && symbol) {
        color3 = "green";
        console.log("Password color is green");
        console.log(isValid);
    } else {
        color3 = "red";    
    }

    const handler = function (e) {
        e.preventDefault();
        localStorage.setItem(name, password);
    }
    return (
        <div className="div_class">
            <form onSubmit={handler} className="form_class">
                <input
                    type="text"
                    placeholder="Enter your name"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)} />
                <div style={{ display: "flex", marginLeft: "40%", gap: "10px", marginTop: "10px" }}>
                    <div style={{ border: "2px solid black", width: "40px", height: "15px", background: color1 }}></div>
                    <div style={{ border: "2px solid black", width: "40px", height: "15px", background: color2 }}></div>
                    <div style={{ border: "2px solid black", width: "40px", height: "15px", background: color3 }}></div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
// export default User;