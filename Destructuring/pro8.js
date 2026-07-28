let arr = [
    { name: "viaks", age: 20, skill: "html" },
    { name: "mohan", age: 22, skill: "css" },
    { name: "nitin", age: 24, skill: "javascript" },
];
let structure=arr.forEach((key,index)=>{
        console.log(key.name);
        console.log(key.age);
        console.log(key.skill);
})
