import { useState } from "react";
function Comp4(){
    const [Text,update1]=useState("");
    const [index,update2]=useState(0);
    function setText(e){
        const val=(e.target.value);
        update1(val);
        update2(val.length);
    } 
    return(
        <div>
            <h1>{Text}</h1>
            <h2>{index}</h2>
            <input type="text" value={Text} onChange={setText}/>
        </div>
    )
}
export default Comp4;