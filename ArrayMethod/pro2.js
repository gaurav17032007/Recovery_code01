    let obj = [{
        name: "vikas",
        age: 30,
        skill: "html"
    }];
    let obj2 = obj.map((key,element) => {
        return {
            name: key.name,
            age: key.age,
            skill: key.skill
        }
    })
    console.log(obj2);