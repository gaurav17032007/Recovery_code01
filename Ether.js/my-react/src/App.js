import "./App.css";
import { useState, useEffect } from "react";
import img from "./Images/Bitcoin.jpg";
import SendTransaction from "./Component/Transaction";
import Getbalance from "./Component/GetBalance";
import SetValue from "./Component/Setvalue";
import ContractBalance from "./Component/ContractBalance";
const { ethers } = require("ethers");
function App() {
  const [store, getstore] = useState(null);
  useEffect(() => {
    const contractAddress = "0x424d8543EFBdD7b610503F4A3Edd235856fe8362";

    const contractAbi = [
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_address",
            type: "address",
          },
        ],
        name: "accountbalance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "contractbalance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getValue",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
        ],
        name: "sendetheruser",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_num",
            type: "uint256",
          },
        ],
        name: "setValue",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        stateMutability: "payable",
        type: "receive",
      },
    ];
    const Company = async function () {
      const meta = new ethers.BrowserProvider(window.ethereum);
      await meta.send("eth_requestAccounts", []);
      const signer = await meta.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractAbi,
        signer,
      );
      getstore(contract);
    };
    Company();
  }, []);

  return (
    <div className="App" style={{ height: "100%" }}>
       <div className="Name">
        <h1 style={{ color: "black", backgroundColor: "red", height: "10%"}}>
          WALLET
        </h1>
      </div>
        <img src={img} alt="bitcoin" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <SendTransaction store={store}/>
      <Getbalance store={store}/>
      <SetValue store={store}/>
      <ContractBalance store={store}/>
    </div>
  );
}

export default App;
