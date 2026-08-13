import { useState } from "react";
function Add_User() {
    const [name,setname]=useState("");
    const handleApi=async (e) => {
        e.preventDefault();

        const userdata=({name:name});
        const res=await fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "POST",
            headers:{
                 "Content-Type" : "application/json"
            },
            body: JSON.stringify(userdata)
        })
        const result=await res.json();
        console.log(result); 
    }
    return (
        <div>
            <form onSubmit={handleApi}>
                <input type="text"
                value={name}
                onChange={(e)=>setname(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Add_User;