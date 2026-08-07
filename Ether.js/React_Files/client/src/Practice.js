
import { ethers } from "ethers";


async function main(){
    const provider=new ethers.JsonRpcProvider(
        "https://sepolia.infura.io/v3/6b02f694eadd41f283326ca4912ccce9");
        const address="0xdadB0d80178819F2319190D340ce9A924f783711";
        const hello2=await provider.getBalance(address);
        const blocknumber=await provider.getBlockNumber(address);
        const blockdata=await provider.getBlock(10582405);
        const number=blockdata.hash;
        console.log("Blockdata Number : ",number);
        console.log("Address Block : ",blockdata)
        console.log("Block Number : ",blocknumber);
        console.log("Address balance : ",ethers.formatEther(hello2));
    }
    main();