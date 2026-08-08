// var = var is a function-scoped variable and can be redeclared and updated.

var arr=[1,2,3,4];
function user(){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
user();

function user1(){
    var num= 45;
    var num= 47;
    console.log(num);
}
user1();

function user2(){
    var num=67;
    num=54;
    console.log(num);
}

user2();
