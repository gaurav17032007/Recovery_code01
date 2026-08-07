// import { send } from 'process';
import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Comp1 from './Component/Comp1';
import Comp2 from './Component/Comp2';
  const { ethers } = require("ethers");

function App() {
  const [data, setdata] = useState(null);
  async function main() {
    if (!data) {
      console.log("Ruko Jra")
      return; 
    }
    const transaction = await data.sendetheruser("0x2d6188A56075307651F1D0a48Fafc4dD2c3EA238", { value: ethers.parseEther("0.1") })
    await transaction.wait();
  }
  useEffect(() => {
  
    const Event = async () => {
      const cotractadress = "0xD4c71Ee7062ffFCFFf07A49dceDc8F849F4dC18B";
      const contractabi = [
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
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
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

    const connect = new ethers.Contract(cotractadress, contractabi, signer);

      setdata(connect);
        connect.on("Transfer", (from, to, amount) => {
          console.log("From : ", from);
          console.log("To : ", to);
          console.log("amount : ", amount.toString());
          console.log("Done ✅")
        })
        const pastevent=connect.filters.Transfer();
        const events=connect.queryFilter(pastevent);
        console.log("Event : ",events);    
      }
    Event();
  }, []);

  return (
    <div>
      <button onClick={main}>SendTransaction</button>
      <nav className='navbar'>
        <Link to='/' className='link'><h1>Comp1</h1></Link>
        <Link to='/Comp2'className='link'><h1>Comp2</h1></Link>
      </nav>

      <div>
        <Routes>
          <Route path='/' element={<Comp1/>}/>
          <Route path='/Comp2' element={<Comp2/>}/>
        </Routes>
      </div>
    </div>
);

}

export default App;
