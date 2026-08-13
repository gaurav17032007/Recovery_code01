// Constructor function
// A constructor function is a special function used to create multiple objects with the same structure.

const construct = (name, age, gender) => {
    return {
        name,
        age,
        gender
    };
};
const obj1 = construct("vikas", 25, "male");
const obj2 = construct("mukesh", 20, "female");
console.log(obj1);
console.log(obj2);


function construct2(name, age, gender) {
    return (
        this.name = name,
        this.age = age,
        this.gender = gender
    )
}
const Object1 = new construct2("nitn", 34, "male");

for (const key in Object1) {
    console.log(Object1[key]);
}

const construct3 = function () {
    const S1 = {
        name: "manish",
        age: 23,
        work: "developer"
    }
    console.log(S1);
}
construct3();