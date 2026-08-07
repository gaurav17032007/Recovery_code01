import { useState,useMemo } from "react";

function Header(){
    const [data,setdata]=useState(0);

    const memo=useMemo((num)=>{
        console.log("calculate")
        return data*2;
        
    });
    return(
        <div>
            <h1>{memo}</h1>
            <button onClick={()=>setdata(data+1)}>Create</button>
        </div>

    )
}
export default Header;