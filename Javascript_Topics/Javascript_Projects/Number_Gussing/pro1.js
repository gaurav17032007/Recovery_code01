let element = document.createElement("div");
document.body.appendChild(element);

let heading = document.createElement("h2");
heading.textContent = "Guess a number between 1 to 100";
element.appendChild(heading);

let form = document.createElement("form");
form.addEventListener("submit", handler);
element.appendChild(form);

let input_element = document.createElement("input");
input_element.id = "int";
input_element.type = "text";
form.appendChild(input_element);

let button1 = document.createElement("button");
button1.textContent = "Check";
button1.type = "submit";
form.appendChild(button1);

let button2 = document.createElement("button");
button2.textContent = "Restart";
button2.addEventListener("click", restart);
element.appendChild(button2);

let h2 = document.createElement("h2");
h2.textContent = "Result :";
element.appendChild(h2);

let h3 = document.createElement("h3");
h3.id = "h3_id";
h3.textContent = `Attempts :`;
element.appendChild(h3);

let number = Math.floor(Math.random() * 100);
console.log(number);

let h3_value = document.getElementById("h3_id");
let count = 0;
function handler(e) {
    e.preventDefault();
    let input = document.getElementById("int");
    let value = Number(input.value);
    if (count >= 5) {
        alert("please restart the game");
        return;
    }
    if (number < value) {
        h2.textContent = `Result : Low value`;
    } else if (number > value) {
        h2.textContent = `Result : High value`;
    } else if (number === value) {
        h2.textContent = `Result : Correct value`;
    }
    count++;
    input = document.getElementById("int").value = "";

    h3_value.textContent = `Attempts : ${count}`;

}

function restart(e) {
    e.preventDefault();
    let val = count = 0;
    number = Math.floor(Math.random() * 100);
    console.log(number);
    h3_value.textContent = `Attempts : ${val}`;
    h2.textContent = "Result :";
    document.getElementById("int").value = "";
}