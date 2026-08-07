import { useState } from "react";
import "./ContractBalance.css";
import { ethers } from "ethers";
function ContractBalance({ store }) {
  const [Balance, AccountBal] = useState(0);
  async function ContractBal() {
    try {
      if (!store) {
        alert("Contract not loaded yet");
        return;
      }
      console.log("Clicked Button");
      const Bala = await store.contractbalance();
      const formatted = ethers.formatEther(Bala);
      AccountBal(formatted);
    } catch (err) {
      console.log(err);
      alert("Error Fetching Balance");
    }
  }
  return (
    <div className="Contract">
      <h1>{Balance}</h1>
      <button
        onClick={ContractBal}
        style={{
          fontSize: "35px",
          border: "3px solid black",
          boxShadow: "1px 1px 1px white",
          borderRadius: "15px",
          padding: "5px",
          margin: "5px",
          cursor: "pointer",
        }}
      >
        ContractBalance
      </button>
    </div>
  );
}
export default ContractBalance;
