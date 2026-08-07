import { useState } from "react";

function Comp2(){
    const [inputs,update]=useState([])
    function formate(e){
        update(e.target.value);
        // update(inputs)   
    }
    return(
        <div>
            <h1>{inputs}</h1>
            <input type="text" value={inputs} onChange={formate}/>
        </div>
    )
}
export default Comp2;