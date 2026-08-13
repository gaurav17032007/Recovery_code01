function user1(callback) {
    console.log("user1 execute...")
    setTimeout(() => {
        if (typeof callback === "function") {
            console.log("user1 run complete");
            callback();
        }
    }, 2000);
}
function user2(nextcallback) {
    console.log("user2 executed...")
    setTimeout(() => {
        if (typeof nextcallback === "function");
        console.log("user2 run complete")
        nextcallback();
    }, 2000);
}
function user3(nextcallback) {
    console.log("user3 executed...");
    setTimeout(() => {
        if(typeof nextcallback==="function"){
            console.log("user3 run complete");
            nextcallback();
        }
    }, 2000);
}
function user4() {
    console.log("user4 executed...");
    setTimeout(() => {
        console.log("user4 run complete");
    }, 2000);
}
user1(
    () => {
        user2(
            () => {
                user3(
                    () => {
                        user4();
                    });
            })
    })