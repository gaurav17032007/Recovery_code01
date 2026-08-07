const { strict } = require("assert");
const { ethers } = require("ethers")

const provider = new ethers.JsonRpcProvider
    (
        "https://sepolia.infura.io/v3/6b02f694eadd41f283326ca4912ccce9"
    );
const walletAddress = "0xf3A74265e035f4703D03Ee7672C4a578D59A26dA";

const contractAbi =
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
    ]
async function Main() {
    const contractDetails = new ethers.Contract(walletAddress, contractAbi, provider);

    const contractName = await contractDetails.name();
    console.log("Contract Name : ", contractName);


    const numberValue = await contractDetails.getValue();
    console.log("Number Value : ", String(numberValue));

    const contractbalance = await contractDetails.contractBalance();
    console.log("Contract Balance : ", contractbalance);

    const accountbalance = await contractDetails.accountBalance(
        "0x4F9ec3bDD6C11C1DF1D42458413437d1eE0d61b9"
    );
    console.log("Acconut Balance : ", accountbalance);
}
Main();