import {useEffect} from "react";
import { useState } from "react";

function Createfunction(){
    const [variable,setchange]=useState(0); 
    const [variable2,getData]=useState([]); 
    // const [variable2,setchange2]=useState(0);
    useEffect(()=>{
       async function get(){
        const getValue=await fetch(`https://dummyjson.com/users`);

        const res=await getValue.json();
        console.log(res);
        getData(res.users);
       }
       get();
    },[]);
    return (
        <div><h1>hllo</h1>
        <button onClick={() => setchange(variable+1)}>Click Me</button>
        <h2>{variable}</h2>
        {
            variable2.map((element,index)=>{
                return(
                    <div className="data" key={index}>
                            <h2>Name</h2>
                    <h2>{element.firstName}</h2>
                            <h2>LastName</h2>
                    <h2>{element.lastName}</h2>
                            <h2>Age</h2>
                    <h2>{element.age}</h2>
                    </div>
                )
            })
        }
        </div>

    );
}
export default Createfunction;