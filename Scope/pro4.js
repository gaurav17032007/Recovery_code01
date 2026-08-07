let arr=[{name:"John",age:30,work:"developer"}]
let num=arr.map((key,element)=>{
    return {
        name:key.name,
        age:key.age,
        // work:key.work
    }
    });
console.log(arr);
console.log(num);