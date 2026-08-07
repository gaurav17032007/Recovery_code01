import { useState } from "react";
function Comp3(){
    const [data,update]=useState(false);
    function setTrue(){
        console.log("run");
        update(true);
    }
    function setFalse(){
        update(false);
    }
    return(
        <div>
            <button onClick={setTrue}>True</button>
            <button onClick={setFalse}>False</button>
            <h1>{data ? "ON" : "OFF"}</h1>
        </div>
    )
}
export default Comp3;