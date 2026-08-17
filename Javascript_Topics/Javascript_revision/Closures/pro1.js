function outer() {
    let name = "Vikas";

    function inner() {
        console.log(name);
    }

    return inner;
}

let result =  outer();

result();