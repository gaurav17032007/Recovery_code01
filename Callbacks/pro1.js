let add = false;
function user(callback) {
    let id = document.getElementById("btn1");
    id.addEventListener("click", () => {
        alert("Code run");
        if (!add) {
            callback();
            add = true;
            console.log("user");
        }
    })
}

function user1() {
    let doc = document.querySelector("#btn");
    doc.addEventListener("click", () => {
        let demo = document.getElementById("demo");
        demo.textContent = "Hello World";
        demo.style.fontWeight = "bold";
        demo.style.color = "White";
        demo.style.border = "2px solid black";
        demo.style.width = "300px";
        demo.style.height = "50vh";
        demo.style.backgroundColor = "black";
        console.log("user1");
    })
}

user(user1);