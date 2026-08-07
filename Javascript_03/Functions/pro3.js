// Arrow Function

let arr1=()=>{
    let array=[1,2,3,4,5];
    let array2=array.map((value)=>value+1);
    console.log(array2);
    let [a,b,c,d,e]=array2;
    console.log(a,b,c,d,e);
}
arr1();
// console.log(h1);
let arr=()=>{
    let obj={
        name:"John",
        age:30,
        getDetails:(skill)=>{
            return{
                skills:skill
            }
        }   
    }
    return obj;
}
let result=arr();
console.log(result);
console.log(result.getDetails("JavaScript"));