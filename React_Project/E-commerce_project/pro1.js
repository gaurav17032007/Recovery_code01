let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let Menvalue=[];
for (let i = 0; i < arr.length; i +=4) {
    Menvalue.push(arr.slice(i, i + 4));
}
console.log(Menvalue);
