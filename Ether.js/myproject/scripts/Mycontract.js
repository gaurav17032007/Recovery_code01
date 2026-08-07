const {ethers}=require("hardhat");
const prompt=require("prompt-sync")();

async function main() {
    const Hello=await ethers.getContractFactory("Mycontract");
    const DeployeContract=await Hello.deploy();
    await DeployeContract.waitForDeployment();

    while (true) {
    const input1 = parseInt(prompt("Enter the id : "));
    const input2 = prompt("Enter the name : ");
    const input3 = parseInt(prompt("Enter the Salary : "));

    const tx = await DeployeContract.SetEmployee(input1, input2, input3);
    await tx.wait();

    const more = prompt("Add more? (yes/no): ");
    if (more !== "yes") break;
}

    while(true){
        const Id=parseInt(prompt("Enter the id : "));
    const Id_Structure= await DeployeContract.Employee_List(Id);

    console.log("ID : ",Id_Structure.id.toString());
    console.log("Name : ",Id_Structure.name);
    console.log("Salary : ",Id_Structure.salary.toString());

    const more=prompt("You want searching(y/n) : ");
    if(more!=="y") break; 
    }
    console.log("Stored Successfully ✅")

}
main();