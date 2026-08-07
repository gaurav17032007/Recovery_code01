const { ethers } = require("hardhat");

async function main() {
    const Hello = await ethers.getContractFactory("Hello");
    const hello = await Hello.deploy();

    await hello.waitForDeployment();

    console.log("Address:", await hello.getAddress());

    const msg = await hello.sayHello();
    console.log("Message:", msg); 
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});