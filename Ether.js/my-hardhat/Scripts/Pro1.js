const { ethers } = require("hardhat");

async function main() {

    const factory = await ethers.getContractFactory("Mycontract");

    const contract = await factory.deploy();

    await contract.waitForDeployment();

    console.log("Deployed at:", contract.target);
    const tx = await contract.sendetheruser("0x2d6188A56075307651F1D0a48Fafc4dD2c3EA238", {
        value: ethers.parseEther("1")
    });
    await tx.wait();
}

main();