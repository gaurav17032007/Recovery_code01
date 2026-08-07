import { useState, useEffect } from "react";
import Event from "./Component/Event";
const { ethers } = require("ethers");
// import "./App.css";

function App() {
  const [data, storedata] = useState(null);
  // const [store,mapping_store] = useState([]);
  useEffect(() => {
    const ContractAddress = "0x2fE02f980c7d08eA63AF573cBD2CFe2CC98ef0d5";
    const ContractAbi = [
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "age",
            type: "uint256",
          },
        ],
        name: "log",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "age",
            type: "uint256",
          },
        ],
        name: "setStudent",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "student",
        outputs: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "age",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ];
    // let provider;
    async function Company() {
      const request = new ethers.BrowserProvider(window.ethereum);
      await request.send("eth_requestAccounts", []);
      const signer = await request.getSigner();

      const contract = new ethers.Contract(
        ContractAddress,
        ContractAbi,
        signer,
      );
      storedata(contract);
    }
    Company();
  }, []);

  async function main() {
    if (!data) {
      window.alert("Wait for second");
      return;
    }
    const Studentid = 101;
    const Studentname = "Nitin";
    const Studentage = 17;

    const tx = await data.setStudent(Studentid, Studentname, Studentage);
    await tx.wait();

    const mapp = await data.student(Studentid);

    console.log("Name : ", mapp.name);
    console.log("Age : ", mapp.age);
  }
  return (
    <div className="App">
      <button onClick={main}>Map</button>
      <Event/>
    </div>
  );
}

export default App;
