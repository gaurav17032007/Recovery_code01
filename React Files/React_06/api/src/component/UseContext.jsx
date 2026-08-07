import {useState, createContext, use } from "react";
const UserContext=createContext();
function UseContext(){
    const[user,setuser]=useState("");

    const prom=prompt("Enter the name");
    setuser(prom);
    return(
        <div>
            <UserContext.provider value={user}>
            <h1>{user}</h1>
            <UserContext/>
        </div>
    )

}
export default UseContext;