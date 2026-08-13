export function user(name,callback){
    callback();
    let obj={
        name:name,
        age:30,
        skill:"javascript",
        detail:function(){
            return{
                name:this.name
            }
        }
    }
    return obj;
}

let arrow=()=>{
    console.log("Done✔");
}
let result=user("john",arrow);
console.log(result);
console.log(result.detail());