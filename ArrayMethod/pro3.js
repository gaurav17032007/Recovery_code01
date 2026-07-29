    let obj = [{
        name: "vikas",
        age: 30,
        skill: "html"
    }];
    let obj2 = obj.filter(item => {
        console.log(`${item.age > 18 ? "true" : "false"}`);
        return item.age > 18;
    });