// anonymouse function
// An anonymous function is simply a function without a name.

const inter=setInterval(function(){
    console.log("Running....")
},1000);

setTimeout(function(){
    clearInterval(inter);
    console.log("Stop");
},5000);