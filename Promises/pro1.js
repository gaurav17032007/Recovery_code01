function User(data, callback) {
    console.log("code execute...");
    setTimeout(() => {
        console.log("user run", data);
        if (callback) {
            callback();
        }
    }, 2000);
}

User(2, () => {
    User(5, () => {
        console.log("done");
        User(6, () => {
            console.log("six run");
            User(7, () => {
                console.log("seven is run");
            })
        })
    });
});