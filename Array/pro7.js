let array=[2,1,4,3,5];

let number=array.map((user)=>user+0);
console.log(number);

let arr=[{name: "Alice", age :23},
    {name:"Bob" ,age: 20},
    {name:"Stiphen" ,age: 29}
];

let number1=arr.map((key,element)=>{
    return{
        element:element,
        key:key.name,
        age:key.age
    }
});
console.log(number1);