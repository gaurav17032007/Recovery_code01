const prompt = require("prompt-sync")();
let num;
do{
    let num = prompt("Enter a number");
    num = Number(num);
    if(num%2===0){
        console.log(num + " is even");
        break;
    }else if(num%2!==0){
        console.log(num + " is odd");
        break;
    }
}while(num%2===0 || num%2!==0);
console.log("The loop has ended");
