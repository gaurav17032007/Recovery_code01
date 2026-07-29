let arr = [1, 2, 3, 4, 5];

let arr1 = [6, 7, 8, 9, 10];
let arr2 = arr.map((connect) => connect * 2);
let arr3=[...arr1,...arr2];
console.log(arr3);
// console.log(arr2);
// console.log(arr1);