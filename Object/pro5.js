let object = function () {
    this.name = "vikas";
    this.age = 30;

    this.work = function () {
        let Email = "vikas@example.com";
        console.log(Email);
    }

    let obj={
        name: this.name,
        age: this.age,
        work: this.work 
    }
    console.log(obj);
    obj.work();
}

object();