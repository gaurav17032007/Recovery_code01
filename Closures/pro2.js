function outer() {
    let obj = {
        name: "vikas",
        age: 30
    }
    // inner function
    return function inner() {
        let work=obj.name;
        console.log(work);
    }
}
let counter = outer();
counter();
counter();
counter();