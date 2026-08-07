let obj={
    name:"Mohan"
}
let obj1={
    age:30
}
let {age}=obj1;
let obj2={...obj,...obj1};
console.log(obj2);
for (const key in obj2) {
    console.log(key);
    console.log(obj2[key]);
}