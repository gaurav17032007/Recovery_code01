// Expression function

// expression function
// A function expression in JavaScript is a function that is stored inside a variable. Instead of giving the function a name directly, we assign the function to a variable.
const greet=function(num){
    let number=num**num;
    console.log(number);
    return num;
}
greet(5);