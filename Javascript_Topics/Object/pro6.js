let  object={
    name:"vikas",
    age:30,
    marks:{
        math:90,
        science:80,
        english:70 
    },
    display:function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.marks);
    }
}

object.display();