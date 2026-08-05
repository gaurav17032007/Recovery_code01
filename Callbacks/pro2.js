function call(callback) {
    callback();
    return {
        name: "john",
        age: 30
    }
}

function call1() {
    console.log("Run");
}

let result = call(call1);
console.log(result);
console.log(result.name);
console.log(result.age);    