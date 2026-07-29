    let obj = [{
        name: "vikas",
        age: 30,
        skill: "html"
    }];
    let obj2 = obj.filter((key,item) => {
        // console.log(`${item.obj}`);
        return {
            key:key.name,
            age:key.age,
            skill:key.skill
        }
    });
    console.log(obj2);
    for (const key in obj2) {
        console.log(obj2[key]);
        let {name,age,skill}=obj2[key];
        console.log(name,age,skill);
    }