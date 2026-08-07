import { useState } from "react";
function Main() {
  const [data, setdata] = useState("red");
  return (
    <div>
      <button onClick={()=>{setdata('blue')}}>click</button>
      <h1>{data}</h1>
    </div>
  );

}

function Main2(){
  const [store,setstore]=useState("");

  return(
    <div>
      <input type="text" value={store}
      onChange={(e)=>{setstore(e.target.value)}}/>
      <h1>{store}</h1>
    </div>
  )
}
function Main3(){
    const array=['Rahul','Vikas','Hemant','Nitin','Mohan']
    
    return(
      <div>
        {array.map((item,index)=>(
          <p key={index}>{item}</p>
        ))}
      </div>
    )
}
export {Main ,Main2,Main3};

