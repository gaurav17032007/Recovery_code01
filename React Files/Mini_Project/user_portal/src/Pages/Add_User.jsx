import { useState } from "react";

function Add_User({setAdmin}) {
    const [name,setname]=useState("");
    const handleApi=(e)=>{
        e.preventDefault();

        const newUser={
            id:Date.now(),
            name:name
        }

        setAdmin((prev)=>[...prev,newUser]); 

        setname("");
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