import { useContext } from "react";
import { Mycontext } from "../App.js";
function Pro(){
    const {show,Input}=useContext(Mycontext);
    return(
        <div>
            <button onClick={Input}>Input</button>
            <button onClick={show}>pro</button>
        </div>
    )
}
export default Pro;