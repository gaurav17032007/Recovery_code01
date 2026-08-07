import { useState } from "react";

function Comp1(){
    const [text,update]=useState("red")
    function blue(){
        update("blue")
    }
    function pink(){
        update("pink")
    }
    return(
        <div>
            <h1>{text}</h1>
            <button onClick={blue}>blue</button>
            <button onClick={pink}>pink</button>
        </div>
    )
}
export default Comp1;