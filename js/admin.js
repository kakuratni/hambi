function massModify(selector, attribute, value) {
    let nodeList = document.querySelectorAll(selector);
    for (let i = 0; i < nodeList.length; i++) {
        nodelist[i][selector] = value;
    }
}


let adminData = {
    "i007":   {
        "name": "valaki",
        "email": "sdfsfd@dsadf.com",
        "address": "piripocs"
    },
    "i008":   {
        "name": "valako",
        "email": "sdfd@dsadf.com",
        "address": "pirips"
    }
};



let newRow = document.createElement("tr");

let parent = document.querySelector("table.table").lastElementChild;

parent.appendChild(newRow)

let newEntry = document.querySelector("#newEntry")
newEntry.addEventListener("submit", function(ev) {
    ev.preventDefault();
    console.log(this);
    let inputs = this.querySelectorAll("input"); 
    let values = {};
    for (let i = 0; i < inputs; i++) {
        values[inputs[i].name] = inputs[i].value;
    }
    console.log(values);
});

/*
let temps = [25, 35, 0, 3, 85, 19, -2];

function weatherWidget() {
    let day = document.querySelector("#day").value;
    let tempDiv = document.querySelector("#temp");
    tempDiv.innerHTML = temps[day] + "&degC";
} */


//add helptext

/* let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a felteteket";

let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);

parent.removeChild(helpText);
modifyButton.onclick = function () {
    alert("dsdfsdfsf");
}
 */
let modifyButton = document.querySelectorAll("table .btn.btn-info");
for (var i = 0; i < modifyButton.length; i++) {
    modifyButton[i].addEventListener('click', function(event) {
        if (!confirm("sure u want to modify " + this.title)) {
            event.preventDefault();
        }
    });
}

let deleteButton = document.querySelectorAll("table .btn.btn-danger");
for (var i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener('click', function(event) {
        if (!confirm("sure u want to delete " + this.title)) {
            event.preventDefault();
        }
    });
}
