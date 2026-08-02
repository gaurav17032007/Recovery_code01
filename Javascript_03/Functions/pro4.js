// Callback Function

let arr1=(name,callback)=>{
    console.log("Hello"+name);
    callback();
}
function arr(){
    console.log("Hello World");
}
arr1("vikas",arr);