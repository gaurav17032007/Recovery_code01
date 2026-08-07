import { useContext } from "react";
import { CreateCom } from "../App";
function ComC(){
    const getcontext=useContext(CreateCom);
    return (
        <div className="ComC">
            <div>ComC</div>
            <h1>{getcontext}</h1>
        </div>
    )
  }

export default ComC;