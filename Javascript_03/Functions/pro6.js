// async Function

async function main(name, age, skill) {
    let count=await timer();
    {
        return {
            Name: name,
            Age: age,
            Skill: skill
        }
    }
}
let result = main("Vikas", 20, "Javascript").then(result=>console.log(result));

function timer() {
    let start = setInterval(() => {
        console.log("Hello world");
    }, 2000);

    setTimeout(() => {
        clearInterval(start);
        console.log("..Stop");
    }, 5000);
}