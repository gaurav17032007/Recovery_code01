function User() {
    let obj = {
        name: "vikas",
        age: 30,
        work: {
            skill:"java"
        },
        company: "Infosys"
    }

    let { name, age, company } = obj;
    console.log(name, age, company);
}
User();