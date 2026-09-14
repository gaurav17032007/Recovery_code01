let element = document.createElement("div");
element.id="main_div";
document.body.appendChild(element);

let heading1 = document.createElement("h2");
heading1.textContent = "Counter App";
element.appendChild(heading1);

let heading2 = document.createElement("h2");
heading2.id = "heading_2";
heading2.innerText = 0;
element.appendChild(heading2);

let element1 = document.createElement("div");
element1.id="main_div1";
element.appendChild(element1);

let button1 = document.createElement("button");
button1.id="inc";
button1.textContent = "increment";
button1.addEventListener("click", increment);
element1.appendChild(button1);

let button3 = document.createElement("button");
button3.id="res";
button3.textContent = "Reset";
button3.addEventListener("click", reset);
element1.appendChild(button3);

let button2 = document.createElement("button");
button2.id="dec";
button2.textContent = "decrement";
button2.addEventListener("click", decrement);
element1.appendChild(button2);

let sum = 0;
let id = document.getElementById("heading_2");
function increment(e) {
    e.preventDefault();
    if(sum==10){
        alert("enough");
        return;
    }
    sum++; 
    id.textContent = sum;
}

function decrement(e) {
    e.preventDefault();
    if(sum==0){
        return;
    }
    sum--; 
    id.textContent = sum;
}

function reset(e) {
    e.preventDefault();
    sum = 0; 
    id.textContent = sum;
}