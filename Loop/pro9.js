const prompt = require("prompt-sync")();
let obj={
    num:0,
    num2:1,
    getNum: function(){
        num3 = prompt("Enter a number");
        num3 = Number(num3);
        return num3;
    }
}
console.log(obj);
console.log(obj.getNum());