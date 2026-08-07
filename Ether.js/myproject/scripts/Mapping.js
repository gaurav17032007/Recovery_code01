const {ethers}=require("hardhat");
const prompt=require("prompt-sync")();

async function Mapping_Fun() {
    const Address="0x5FbDB2315678afecb367f032d93F642f64180aa3";

    const contract=await ethers.getContractAt("UserStorage",Address);
 
    const input=prompt("Enter the Name : ");

    const tx=await contract.setName(input);
    await tx.wait();
    console.log("Saved ✅")

    const result=await contract.getMyName();

    console.log("Your Name : ",result)

}
Mapping_Fun();