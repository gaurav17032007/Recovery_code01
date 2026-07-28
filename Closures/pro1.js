function outer(){
    // outer variable
    let number=0;

    // inner function
    return function inner(){
        number++;
        console.log(number);
    }

}
let counter=outer();
counter();
counter();
counter();