let obj={
    name:"Mohan"
}
let obj1={
    age:30
}
let obj2={...obj,...obj1,work:function(){return {skill:"html"}}};
console.log(obj2);
console.log(obj2.work());