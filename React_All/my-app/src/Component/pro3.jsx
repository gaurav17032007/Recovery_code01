import { useContext } from "react";
import {Mycontext} from "../App.js";
function Context(){
    const {show}=useContext(Mycontext);
    return(
       <div>
        {/* <h1>{Timer}</h1> */}
            <button onClick={show}>click</button>
       </div> 
    )
}
export default Context;