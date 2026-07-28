function outer() {
    let obj = {
        name: "vikas",
        age: 30
    }
    // inner function
    return function inner() {
        let work=obj.name;
        let work2=obj.age++;
        console.log(work, work2);
    }
    // return inner;

}
let counter = outer();
counter();
counter();
counter();