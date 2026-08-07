// Expression Function

const sum=function(a,b){
    return a+b;
}
let result1=sum(10,20);
console.log(result1);

const add = function (a, b) {
    let obj = {
        name: a,
        age: b,
        work: "Developer",
        getDetails: function (skill) {
            return {
                work: this.work,
                skills: skill
            }
        }
    }
    return obj;
}
let result = add("John", 30);
console.log(result);
console.log(result.getDetails("JavaScript"));

