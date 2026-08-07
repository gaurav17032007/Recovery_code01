const {ethers}=require("hardhat");
const prompt = require("prompt-sync")();

async function main() {
    const hello=await ethers.getContractFactory("Hello2");
    const hello2=await hello.deploy();

    await hello2.waitForDeployment();
    const input=prompt("Enter the Name : ") 
    const result=await hello2.sayUser(input);

    console.log("ok",result)

}
main();