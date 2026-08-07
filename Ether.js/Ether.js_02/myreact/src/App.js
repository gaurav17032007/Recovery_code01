import './App.css';
import { useEffect, useState } from 'react';
const { ethers } = require("ethers")
function App() {
  const [contract, setcontract] = useState(null);
  async function setTransaction() {
    if (!contract) {
      console.log("Ruko Data Aaney Do")
      return;
    }
    const transation = await contract.sendetheruser("0x2d6188A56075307651F1D0a48Fafc4dD2c3EA238", { value: ethers.parseEther("0.1") });
    await transation.wait();
  }
  useEffect(() => {
    const EventFunction = async () => {
      const contractAddress = "0xF49020E28b55Ccd36C0CC7ff141B2436E25E8406";
      const contractAbi =
        [
          {
            "inputs": [],
            "name": "sendContract",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_to",
                "type": "address"
              }
            ],
            "name": "sendetheruser",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "_num",
                "type": "uint256"
              }
            ],
            "name": "setValue",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              }
            ],
            "name": "Transfer",
            "type": "event"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_address",
                "type": "address"
              }
            ],
            "name": "accountbalance",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "contractbalance",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "getValue",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "name",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          }
        ]

      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const connect = new ethers.Contract(contractAddress, contractAbi, signer);
      setcontract(connect);
      connect.on("Transfer", (from, to, value) => {
        console.log("Event mila 🔥");
        console.log("From:", from);
        console.log("To:", to);
        console.log("Amount:", value.toString());
      })
    }
    EventFunction();
  }, [])

  return (
    <div className="App">
      <button onClick={setTransaction}>SendTransaction</button>
    </div>
  );
}

export default App;
