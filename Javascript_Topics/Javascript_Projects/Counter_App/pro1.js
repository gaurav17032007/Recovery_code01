let element = document.createElement("div");
document.body.appendChild(element);

let heading1 = document.createElement("h2");
heading1.textContent = "Counter App";
element.appendChild(heading1);

let heading2 = document.createElement("h2");
heading2.id="heading_2";
heading2.innerText=0;
element.appendChild(heading2);

let button1 = document.createElement("button");
button1.textContent = "+";
button1.addEventListener("click",increment);
element.appendChild(button1);

let button3 = document.createElement("button");
button3.textContent = "Reset";
button3.addEventListener("click", reset);
element.appendChild(button3);

let button2 = document.createElement("button");
button2.textContent = "--";
button2.addEventListener("click",decrement);
element.appendChild(button2);

let sum=1;
let id=document.getElementById("heading_2");
function increment(e){
    e.preventDefault();
    id.textContent=sum++;
    if(sum>=10){
        alert()
    }
}

function decrement(e){
    e.preventDefault();
    // let id=document.getElementById("heading_2");
    id.textContent=sum--;

}

function reset(){

}
