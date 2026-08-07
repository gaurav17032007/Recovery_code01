import { useEffect } from "react";
import { ContractAddress,ContractAbi } from "../Contract";
const { ethers } = require("ethers");

function Event() {
  useEffect(() => {
      console.log(ContractAddress);
      console.log(ContractAbi);
      const provider = new ethers.WebSocketProvider(
      "wss://sepolia.infura.io/ws/v3/6b02f694eadd41f283326ca4912ccce9",
    );
    const Webcontract = new ethers.Contract(
      ContractAddress,
      ContractAbi,
      provider,
    );  
 
    const handler=Webcontract.on("log", (id, name, age) => {
      console.log("Id : ", id.toString());
      console.log("Name : ", name);
      console.log("Age : ", age.toString());
    });
    return () => {
      Webcontract.off("log", handler); // ✅ correct cleanup
      provider.destroy();    
    };
  },[]);
  return(
    <div>
        <h1>Hllo</h1>
    </div>
  )
}
export default Event;
