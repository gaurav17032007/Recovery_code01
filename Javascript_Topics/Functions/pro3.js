// async function 

async function greet(num){
    let a=10;
    a=a**10;
    console.log(a);

    let b=await num/20;
    console.log(b);
    console.log(typeof(b));
}
greet(3);








