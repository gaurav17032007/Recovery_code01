import { useState } from "react";
// const { ethers } = require("ethers");
import "./GetBalance.css";
function Getbalance({store}) {
  const [bal, Setbal] = useState(0);
  const [inputaddress, Setinput] = useState("");
  async function GetBalance() {
    try {
      const balance = await store.accountbalance(inputaddress);
      Setbal(Number(balance));

      Setinput("");
    } catch (err) {
      alert("invalid Address", err);
    }
  }
  return (
    <div className="Get">
      <h1>{bal}</h1>
      <button onClick={GetBalance} style={{fontSize: "35px",border: "3px solid black",boxShadow: "1px 1px 1px white", borderRadius: "15px",padding:"5px",margin: "5px", cursor: "pointer"}}>Getbalance</button>
      <input
      style={{fontSize: "35px",border: "3px solid black",boxShadow: "1px 1px 1px white", borderRadius: "15px",padding:"5px",margin: "5px", cursor: "pointer"}}
        type="text"
        placeholder="Enter Address"
        value={inputaddress}
        onChange={(e) => {
          Setinput(e.target.value);
        }}
      />
    </div>
  );
}
export default Getbalance;
