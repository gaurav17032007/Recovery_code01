let num=Math.floor(Math.random()*9999);

let timer = setInterval(() => {
    console.log(num);
}, 1000);

setTimeout(() => {
    clearInterval(timer);
    console.log(`num ${num} is stop`);
    if(num===Number(num)){
        console.log("correct");
    }else{
        console.log("wrong");
    }
    let h1=num=null;
    if(h1===Number(num)){
        console.log("h1 is correct");
    }else{
        console.log("h1 is wrong");
    }
    console.log(`This is checking this ${num}`);
    console.log(`H1 num ${h1} this `);
    console.log(`num ${num} is stop`);
}, 6000);
