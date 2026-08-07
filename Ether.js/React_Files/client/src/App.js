import {useEffect} from 'react';
import { ethers } from 'ethers';
import './App.css';

function App() {
    const contractAddress="0xAAfc7e5ABc17011d1687e2Ef7e010f88D871753a"

    const contractAbi=
   [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      }
    ],
    "name": "sendEther",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "sendEtherContract",
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
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "accountBalance",
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
    "name": "contractBalance",
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
];
  useEffect(()=>{
    const wallet=async () => {
      const provider=new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts",[]);
      const signer=await provider.getSigner();
      const contract=new ethers.Contract(contractAddress,contractAbi,signer);
      // const tx1=await contract.setValue(20);
      // await tx1.wait();
      // const tx=await contract.sendEtherContract({value:ethers.parseEther("0.00000002")});;
      // await tx.wait();
      await contract.sendEther("0x2d6188a56075307651f1d0a48fafc4dd2c3ea238",
        {value:ethers.parseEther("0.00000002")});
      console.log("transaction confirmed");
    }  
    wallet();   
  },[]);
  return (
    <div className="App">React + Ethers.js Test
    </div>
  );
}

export default App;
