function User(data, callback) {
    return new Promise((resolve) => {
        console.log("code execute...");
        setTimeout(() => {
            console.log("user run", data);
            if (typeof callback === "function") {
                callback();
            }
            resolve("Resolve run");
        }, 2000);
    })
}
function user1(a, b) {
    console.log(a + b);
    if (typeof callback === "function") {
        callback();
    }
}
function user2(a, b, nextcallback) {
    setTimeout(() => {
        console.log(a - b);
        if (typeof nextcallback === "function") {
            nextcallback();
        }
    }, 2000);
}
function user3(a, b, nextcallback) {
    console.log(a * b);
    if (typeof nextcallback === "function") {
        nextcallback();
    }
}
User(2)
    .then(() => { user1(3, 5) })
    .then(() => { user2(3, 8) })
    .then(() => { user3(3, 6) })