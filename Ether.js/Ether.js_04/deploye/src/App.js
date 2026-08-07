import './App.css';
import { useState,useEffect } from 'react';
const {ethers}=require("ethers");
function App() {
      const [store,setvalue]=useState(0);

      // function SignTransaction(){
      // //   if(!contract){
      // //     console.log("wait...")
      // //     return;
      // //   }
      // //   const tx=await store.sendetheruser("0x2d6188A56075307651F1D0a48Fafc4dD2c3EA238",{ value :ethers.parseEther("0.1")});
      // //   console.log(tx);
      // // }
      const contract=new ethers.ContractFactory("0x91b8680b4a32AB2174be32Ac530484CC2635a73A");
      const provider=await contract.deploy();
      await provider.waitForDeployment();
    
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
