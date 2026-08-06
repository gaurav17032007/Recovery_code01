function User(data, callback) {
    console.log("code execute...");
    setTimeout(() => {
        console.log("user run", data);
        if (typeof callback === "function") {
            callback();
        }
    }, 2000);
}
function user1(a, b, callback) {
    console.log(a + b);
    if (typeof callback === "function") {
        callback();
    }
}
function user2(a, b, nextcallback) {
    console.log(a - b);
    if (typeof nextcallback === "function") {
        nextcallback();
    }
}
function user3(a, b,nextcallback) {
    console.log(a * b);
    if(typeof nextcallback === "function"){
        nextcallback();
    }
}
User(2, () => {
    user1(6, 3);
        console.log("sum");
        user2(5, 4, () => {
            console.log("minus");
            user3(3, 4, () => {
                console.log("multiply");
        })
    })
});