// let = let is a block-scoped variable and can be update but can't redeclared in the smae scope.

let obj={
    name:"vikas",
    age:34
};
console.log(obj);

function user1(){
    let obj={
        name:"mohan",
        age:30
    }
    console.log(obj);
}
user1();