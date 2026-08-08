function user1() {
    return new Promise((resolve,reject) => {
        console.log("user1 execute...")
        setTimeout(() => {
            console.log("user1 run complete");
            resolve("run");
        }, 2000);
    })
}
function user2() {
    return new Promise((resolve,reject)=>{
        console.log("user2 executed...")
        setTimeout(() => {
            console.log("user2 run complete")
            resolve("run");
        }, 2000);
    })
}
function user3() {
    return new Promise((resolve,reject)=>{
        console.log("user3 executed...");
        setTimeout(() => {
            console.log("user3 run complete");
            resolve("run");
        }, 2000);
    })
}
function user4() {
    console.log("user4 executed...");
    setTimeout(() => {
        console.log("user4 run complete");
    }, 2000);
}
user1()
    .then(() =>  user2())
    .then(() =>  user3())
    .then(() =>  user4())
    .catch(()=>{
        console.log("Error method run");
    })