let num = 20;
if (num > 18 && num === 20) {
    console.log("correct");
} else {
    console.log("failure");
}

if (num > 28 || num === 20) {
    console.log("correct");
} else {
    console.log("failure");
}

setTimeout((num) => {
    if (!num) {
        console.log("run");
    } else {
        console.log("wait");
    }
}, 3000);