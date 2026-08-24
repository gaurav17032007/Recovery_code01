let element = document.createElement("div");
element.id = "div_id";
document.body.appendChild(element);

let form = document.createElement("form");
form.id = "form_id";
form.addEventListener("submit", handler);
element.appendChild(form);

let name1 = document.createElement("h3");
name1.textContent = "Name";
form.appendChild(name1);

let input_element1 = document.createElement("input");
input_element1.id = "input_id1";
input_element1.placeholder = "Enter your name";
form.appendChild(input_element1);

let h5_element1 = document.createElement("h5");
form.appendChild(h5_element1);

let name2 = document.createElement("h3");
name2.textContent = "Email";
form.appendChild(name2);

let input_element2 = document.createElement("input");
input_element2.id = "input_id2";
input_element2.placeholder = "Enter your email";
form.appendChild(input_element2);

let h5_element2 = document.createElement("h5");
form.appendChild(h5_element2);

let name3 = document.createElement("h3");
name3.textContent = "Password";
form.appendChild(name3);

let input_element3 = document.createElement("input");
input_element3.id = "input_id3";
input_element3.placeholder = "Enter your password";
form.appendChild(input_element3);

let element2 = document.createElement("div");
element2.id = "div2";
element2.style.display = "flex";
form.appendChild(element2);

let border1 = document.createElement("h5");
border1.textContent = "Uppercase";
border1.style.border = "2px solid black";
border1.style.width = "70px";
border1.style.height - "20vh";
border1.style.textAlign = "center";
element2.appendChild(border1);

let border2 = document.createElement("h5");
border2.textContent = "lowercase";
border2.style.border = "2px solid black";
border2.style.width = "70px";
border2.style.height - "20vh";
border2.style.textAlign = "center";
border2.style.marginLeft = "10px";
element2.appendChild(border2);

let border3 = document.createElement("h5");
border3.textContent = "Symbol";
border3.style.border = "2px solid black";
border3.style.width = "60px";
border3.style.height - "20vh";
border3.style.textAlign = "center";
border3.style.marginLeft = "10px";
element2.appendChild(border3);

let h5_element3 = document.createElement("h5");
form.appendChild(h5_element3);

let button_element = document.createElement("button");
button_element.textContent = "Submit";
form.appendChild(button_element);

function handler(e) {
    e.preventDefault();
    let input1 = document.getElementById("input_id1");
    let input2 = document.getElementById("input_id2");

    if (input1.value.length < 4) {
        h5_element1.textContent = "invalid name";
        h5_element1.style.color = "red";
    } else {
        h5_element1.textContent = "";
    }

    if (input2.value.length < 4 || !input2.value.includes("@") || !input2.value.includes(".com")) {
        h5_element2.textContent = "invalid email";
        h5_element2.style.color = "red";
    } else {
        h5_element2.textContent = "";
    }




}
let input3 = document.getElementById("input_id3");
let hasUpper = /[A-Z]/.test(input3.value);
let haslower = /[a-z]/.test(input3.value);
let hasymbol = /[!@#$%^&*]/.test(input3.value);
if (hasUpper) {
    border1.style.backgroundColor = "red";
}else{
    border1.style.backgroundColor = "";
}