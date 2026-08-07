const { ethers } = require("hardhat");

async function main() {

  const factory = await ethers.getContractFactory("Mycontract");

  const contract = await factory.deploy();

  await contract.waitForDeployment();

  console.log("Deployed at:", contract.target);

  const get =await contract.getValue();
  console.log("Get Value : ",get);
  // const get=await contract.getValue();
  // console.log("GetValue : ",Number(get));
  //  const amount = ethers.parseEther("1");

  // const sendEther=await contract.sendetheruser("0x4F9ec3bDD6C11C1DF1D42458413437d1eE0d61b9",{value :amount} 
  // );
  // const Transaction=await sendEther.wait();
  // console.log("Hash : ",Transaction.hash);

  // const balance=await contract.accountbalance("0x4F9ec3bDD6C11C1DF1D42458413437d1eE0d61b9");

  // console.log("Balance : ",ethers.formatEther(balance));
  // const [owner] = await ethers.getSigners();

  // const tx= await owner.sendTransaction({
  //   to : contract.target,
  //   value : amount
  // });
  // await tx.wait();
  // const contractvalue=await contract.contractbalance();

  // console.log("ContractBalance : ",ethers.formatEther(contractvalue));
}

main();