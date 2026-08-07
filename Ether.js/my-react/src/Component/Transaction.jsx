import { useState } from "react";
import "./Transaction.css";
const { ethers } = require("ethers");
function SendTransaction({store}) {
  const [transaction, SetTransaction] = useState("");
  const Transaction = async () => {
    if (!store) {
      alert("Wait For 10 sec");
      return;
    }
    try {
      if (transaction.length === 42) {
        const tx = await store.sendetheruser(transaction, {
          value: ethers.parseEther("0.1"),
        });
        await tx.wait();
        SetTransaction(tx);
        SetTransaction("");
      } else {
        window.alert("Address Invalid");
      }
    } catch (err) {
      window.alert("Transaction Fail");
    }
  };
  return (
    <div className="Tx">
      <button onClick={Transaction} style={{fontSize: "35px",border: "3px solid black",boxShadow: "1px 1px 1px white", borderRadius: "15px",padding:"5px",margin: "5px",cursor: "pointer"}} >Send</button>
      <input
      style={{fontSize: "35px", border: "3px solid black",boxShadow: "1px 1px 1px white", borderRadius: "15px",padding:"5px",margin:"5px",cursor:"pointer"}}
        type="text"
        placeholder="Send Ether Address"
        value={transaction}
        onChange={(e) => {
          SetTransaction(e.target.value);
        }}
      />
    </div>
  );
}

export default SendTransaction;
