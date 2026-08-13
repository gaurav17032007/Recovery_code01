let object = function () {
    let obj1 = {
        name: "vikas",
        age: 30,
        work: function () {
            let obj2 = {
                Email: "vikas@example.com"
            };
            console.log(obj2);
        }
    };

    console.log(obj1);
    obj1.work();
};

object();