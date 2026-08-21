
let element = document.createElement("div");
element.id = "div_id";
document.body.appendChild(element);

let input_element = document.createElement("input");
input_element.id = "int";
element.appendChild(input_element);

let element1 = document.createElement("div");
element1.id = "div_id1";
element1.style.display = "flex";
element.appendChild(element1);

let week = document.createElement("h1");
week.style.border = "2px solid black";
week.style.width = "40px";
week.style.height = "10px";
week.style.marginRight = "22px";
element1.appendChild(week);

let medium = document.createElement("h1");
medium.style.border = "2px solid black";
medium.style.width = "40px";
medium.style.height = "10px";
medium.style.marginRight = "22px";
element1.appendChild(medium);

let strong = document.createElement("h1");
strong.style.border = "2px solid black";
strong.style.width = "40px";
strong.style.height = "10px";
element1.appendChild(strong);

let element2 = document.createElement("div");
element2.id = "div2";
element.appendChild(element2);

let upper = document.createElement("h3");
upper.textContent = "UpperCase";
upper.style.border = "2px solid black";
upper.style.width = "24%";
upper.style.height = "20px";
upper.style.textAlign = "center";
element2.appendChild(upper);

let lower = document.createElement("h3");
lower.textContent = "LowerCase";
lower.style.border = "2px solid black";
lower.style.width = "24%";
lower.style.height = "20px";
lower.style.textAlign = "center";
element2.appendChild(lower);

let number = document.createElement("h3");
number.textContent = "Number";
number.style.border = "2px solid black";
number.style.width = "24%";
number.style.height = "20px";
number.style.textAlign = "center";
element2.appendChild(number);

let symbol = document.createElement("h3");
symbol.textContent = "Symbol";
symbol.style.border = "2px solid black";
symbol.style.width = "24%";
symbol.style.height = "20px";
symbol.style.textAlign = "center";
element2.appendChild(symbol);

// Length (>= 8)
// Uppercase letter (A-Z)
// Lowercase letter (a-z)
// Number (0-9)
// Special character (!@#$)
let input = document.getElementById("int");

input.addEventListener("input", function (e) {
    e.preventDefault();

    input.addEventListener("input", function () {

        let value = input.value;

        // 🔹 Checks
        let hasUpper = /[A-Z]/.test(value);
        let hasLower = /[a-z]/.test(value);
        let hasNumber = /[0-9]/.test(value);
        let hasSymbol = /[!@#$%^&*]/.test(value);

        // 🔹 UI for each condition
        upper.style.backgroundColor = hasUpper ? "green" : "red";
        lower.style.backgroundColor = hasLower ? "green" : "red";
        number.style.backgroundColor = hasNumber ? "green" : "red";
        symbol.style.backgroundColor = hasSymbol ? "green" : "red";

        // 🔹 Score calculate
        let score = 0;
        if (hasUpper) score++;
        if (hasLower) score++;
        if (hasNumber) score++;
        if (hasSymbol) score++;

        // 🔹 Strength logic (with length)
        if (value.length === 0) {
            week.style.backgroundColor = "";
            medium.style.backgroundColor = "";
            strong.style.backgroundColor = "";
        }
        else if (score <= 2 || value.length < 6) {
            week.style.backgroundColor = "red";
            medium.style.backgroundColor = "";
            strong.style.backgroundColor = "";
        }
        else if (score === 3) {
            week.style.backgroundColor = "";
            medium.style.backgroundColor = "yellow";
            strong.style.backgroundColor = "";
        }
        else if (score === 4 && value.length >= 8) {
            week.style.backgroundColor = "";
            medium.style.backgroundColor = "";
            strong.style.backgroundColor = "green";
        }

    });

})