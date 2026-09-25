let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let getproduct=[];
for(let i=0;i<arr.length;i+=3){
    getproduct.push(arr.slice(i,i+3));
}
getproduct.slice(0,5).map((item)=>item!==13).map((value)=>console.log(value));
// console.log(getproduct);