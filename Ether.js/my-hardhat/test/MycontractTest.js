 const { expect } = require("chai");
const { isAddress } = require("ethers");
const { ethers } = require("hardhat");

describe("Should return true value", function main() {
    let owner, addr1, contract;
    beforeEach(async function () {
        [owner, addr1] = await ethers.getSigners();

        const ContractFactory = await ethers.getContractFactory("Mycontract");
        contract = await ContractFactory.deploy();
        await contract.waitForDeployment();
    });
    it("Should return name of contract", async function () {
        expect(await contract.name()).to.equal("Wallet");
    })

    it("Should return the set value", async function () {
        await contract.setValue(10);
        expect(await contract.getValue()).to.equal(10);
    })

    it("Should check the balan  ce", async function () {
        await owner.sendTransaction({
            to: contract.target,
            value: ethers.parseEther("1")
        });
        const balance = await contract.contractbalance();
        expect(balance).to.equal(ethers.parseEther("1"));
    });

    it("Should send ether to another user", async function () {
        const amount = ethers.parseEther("1");

        const initialBalance = await ethers.provider.getBalance(addr1.address);

        await contract.sendetheruser(
            addr1.address, {
            value: amount
        });

        const finalBalance = await ethers.provider.getBalance(addr1.address);

        expect(finalBalance).to.be.above(initialBalance);
    });

    it("Should retrun the account balance",async function(){
        // const amount =ethers.parseEther("1");
        const balance= await contract.accountbalance(owner.address);
        const actual_balance=await ethers.provider.getBalance(owner.address);
        expect(balance).to.equal(actual_balance);

    })

})