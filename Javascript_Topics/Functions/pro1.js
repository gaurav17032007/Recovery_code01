// Declaration function
// A function declaration in JavaScript is the most basic way to create a function. It means you declare (define) a function using the function keyword, give it a name, and write the code it should execute.

let num=20;
function greet(){
    num=num%3;
    console.log(num);
    return num;
}
greet();