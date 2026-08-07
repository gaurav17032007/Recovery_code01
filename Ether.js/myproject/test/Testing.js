const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("This is describe return to value", async () => {
    let contract;
    beforeEach(async () => {
            const provider = await ethers.getContractFactory("Testing");
            const deployed = await provider.deploy(10);
            await deployed.waitForDeployment();
            contract = deployed;
        
    });
    it("This return value is first deployment", async () => {
        expect(Number(await contract.gettest())).to.equal(10);
    })
    it("This is return a new value ", async () => {
        const set = await contract.test(20);
        await set.wait();
        assert(await contract.gettest(),20);
    })
})
