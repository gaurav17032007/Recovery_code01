        const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider(
    "https://infura.io/v3/6b02f694eadd41f283326ca4912ccce9");
const querryBlockchain = async () => {
    const block = await provider.getBlockNumber();
    console.log("Curret block Number : ", block);

    const balance = await provider.getBalance(
        "0x4675C7e5BaAFBFFbca748158bEcBA61ef3b0a263"); 
    console.log("Current balance : ", balance);

    const formating = ethers.formatEther(balance);
    console.log("Formate ether : ", formating);
};
querryBlockchain();