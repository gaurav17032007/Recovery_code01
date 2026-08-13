// const = const is a block-scoped variable and can't redeclared and updated.

function user1(){
    const num=10;
    num++; // this is line give the error because const is not be updated
    console.log(num);
}
user1();