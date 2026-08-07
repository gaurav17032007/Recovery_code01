// Callback Function

let obj1 = (name, callback) => {
    callback();
    let obj = {
        name: name,
        age: 30,
        getDetails: function (skill) {
            return {
                skills: skill
            }
        }
    };
    return obj;
    return todo();
}

function first() {
    console.log("First Function");
}
function second(callback) {
    console.log("Second Function");
}
let result = obj1("John", first);
console.log(result);
console.log(result.getDetails("JavaScript"));

let result1 = obj1("Vikas", second);
console.log(result1);
