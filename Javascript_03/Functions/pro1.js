// Declaring Function

function add(a,b){
    return a+b;
}
let sum = add(5,10);
console.log(sum);

function declare(a,b){
    let obj={
        name:a,
        age:b,
        getDetails:function(skill){
            return {
                skills:skill
            };
        }
    }
    return obj;
}
let result = declare("John", 30);
console.log(result);
console.log(result.getDetails("JavaScript"));