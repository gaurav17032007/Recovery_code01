let element = document.createElement("div");
element.id = "Main_div";
document.body.appendChild(element);

let h2 = document.createElement("h2");
h2.textContent = "[+ Add new task............]"
element.appendChild(h2);

let form = document.createElement("form");
form.addEventListener("submit", handleApi);
element.appendChild(form);


let selector = document.createElement("input");
selector.id = "int";
selector.type = "text";
selector.placeholder = "Enter the task";
form.appendChild(selector);

let button = document.createElement("button");
button.id = "btn";
button.textContent = "ADD";
button.type = "submit";
form.appendChild(button);

let result = document.createElement("h3");
element.appendChild(result);


function handleApi(e) {
    e.preventDefault();
    let int = document.getElementById("int");
    let task = {
        id: Date.now(),
        value: int.value,
        complete: false
    }
    let user = localStorage.setItem(task.id, JSON.stringify(task));
    int.value = " ";
    getApi();
}

document.querySelector("form").addEventListener("submit", handleApi);

function getApi() {
    let html = "";

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

        let task = JSON.parse(value);

        html += `
      <div>
        <p>${task.value}</p>
        <button onclick="deleteTask('${key}')">Delete</button>
      </div>
    `;
    }

    result.innerHTML = html;
}
function deleteTask(id) {
  localStorage.removeItem(id);
  getApi(); // UI update
}