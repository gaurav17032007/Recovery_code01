import { useState } from "react"
function Comp1({main}){
    const [data,setdata] = useState(0);
    return (
        <div>
            <h1>{data}</h1>
                <h1>Comp1</h1>
            <button onClick={()=>{setdata(data+1)}}>Increse</button>     
    </div>
    )
}
export default Comp1;