function num(first,...second){
    return[
        first,
        second
    ]
}
console.log(num(10,20,30,40,50));
let [a,b]=num(10,20,30,40,50);
console.log(a,b);