let arr=[
    {name:"vikas",age:30,skill:"html"},
    {name:"mohan",age:31,skill:"css"},
    {name:"nitin",age:32,skill:"javascript"},
    {name:"deepak",age:33,skill:"react.js"}
];
let arr2=arr.reduce((acc,cur)=>(acc+cur.age),0);
console.log(arr2);