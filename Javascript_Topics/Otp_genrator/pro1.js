
let element = document.createElement("div");
element.id = "div_element";
document.body.appendChild(element);

let form_element = document.createElement("form");
form_element.id = "form_id";
element.appendChild(form_element);

let input = document.createElement("input");
input.id = "num";
input.type = "number";
input.placeholder = "Enter the number";
form_element.appendChild(input);

let btn = document.createElement("button");
btn.textContent = "Fill";
btn.type = "submit";
form_element.appendChild(btn);


let btn2 = document.createElement("button");
btn2.id="resend_id";
btn2.textContent = "Resend";
element.appendChild(btn2);

let otp = Math.floor(Math.random() * 9999);
window.alert(otp);

document.getElementById("resend_id").addEventListener("click", function () {
    otp = Math.floor(Math.random() * 9999);
    window.alert(otp);
    isExpired=false;
})
let timer;
let isExpired = false;
function Start(){
    setInterval(() => {
        console.log(otp);
    }, 1000);
    
    setTimeout(() => {
        clearInterval(timer);
        otp = null;
        isExpired = true;
    }, 30000);  
}


let form = document.getElementById("form_id").addEventListener("submit", function check(e) {
    e.preventDefault();
    let int = document.getElementById("num").value;

    if (isExpired) {
        window.alert("Otp expired");
        return;
    }

    if (otp === Number(int)) {
        window.alert("Run ✔");
    } else {
        window.alert("failed❌");
    }

    document.getElementById("num").value = "";

})
