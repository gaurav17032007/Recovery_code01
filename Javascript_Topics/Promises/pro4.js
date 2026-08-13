function User(data) {
    let u1= new Promise((resolve) => {
        console.log("code execute...");
        setTimeout(() => {
            console.log("user run", data);
            resolve("Resolve run");
        }, 2000);
    })
    console.log(u1);
    return u1;
}
function user1(a, b) {
    console.log(a + b);
}
function user2(a, b) {
    setTimeout(() => {
        console.log(a - b);
    }, 2000);
}
function user3(a, b) {
    console.log(a * b);
}
User(2)
    .then(() => {user1(2,3)})
    .then(() => {user2(3,8)})
    .then(() => {user3(3,3)})