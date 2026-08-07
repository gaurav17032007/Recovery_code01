//0xb95C373Fbd1c84ccfe52dC13758D3Bd4cc403A07 This is contract deploye address
const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Student Details", function () {
  let contract;
  it("Should be return Student Details", async function () {
    const deployed = await ethers.getContractFactory("StudentDetails");
    contract = await deployed.deploy();
    await contract.waitForDeployment();

    console.log("ContractAddress : ", contract.target);
  });

  it("Should set the Student Details", async function () {
    const StudentId = 101;
    const StudentName = "Vikas";
    const StudentAge = 21;
    const waitForEvent = new Promise((resolve, reject) => {
      // Make sure "log" matches the exact case-sensitive name of your Solidity event
      contract.once("log", (id, name, age) => {
        try {
          console.log("\n--- Event Caught ---");
          console.log("Id : ", id.toString());
          console.log("Name : ", name);
          console.log("Age : ", age.toString());
          resolve(); // Test passes when event is received
        } catch (error) {
          reject(error);
        }
      });
    });

    // 2. Trigger the function that emits the "log" event
    const tx = await contract.setStudent(StudentId, StudentName, StudentAge);
    await tx.wait();

    // 3. Tell the test to pause here until the listener triggers resolve()
    await waitForEvent;
    const map = await contract.student(StudentId);

    expect(map.name).to.equal(StudentName);
    expect(map.age).to.equal(StudentAge);

    console.log("Name : ", map.name);
    console.log("Age : ", Number(map.age));
  });
});
