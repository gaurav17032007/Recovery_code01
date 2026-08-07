const {expect , assert} = require("chai");
const {ethers} =require("hardhat");

describe("Mycontract",async function () {
  let contract;
  beforeEach(async()=>{
    const getContractName= await ethers.getContractFactory("NormalContract");
    const deployeContract= await getContractName.deploy("Hello world");
    await deployeContract.waitForDeployment();
    contract=deployeContract;
  })
    it("Should return the Mycontract once it's changed",async function() {
 
      assert(await contract.getValue()),"Hello world";
    })
    it("Should asign new value to NormalContract",async function () {
     
      const set=await contract.setValue("Hello world");
      await set.wait();
      expect(await contract.getValue()).to.equal("Hello world");
      
    })
})