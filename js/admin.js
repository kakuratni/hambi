function massModify(selector, attribute, value) {
    let nodeList = document.querySelectorAll(selector);
    for (let i = 0; i < nodeList.length; i++) {
        nodelist[i][selector] = value;
    }
}

fetchInit = {
    method: "GET",
      Headers: new Headers(),
      mode: "cors",
      cache: "default"
  };
users = fetch("http://localhost:3000/users", fetchInit).then(
    data => data.json(),
    err => console.error(err)
    ).then(
    users => users
    );

/*
let users = [
    {
        "id": "001",
        "first-name": "valaki",
        "last-name": "mas",
        "email": "sdfsfd@dsadf.com",
        "address": "piripocs"
    },
    {       
        "id": "002",
        "first-name": "kelep",
        "last-name": "masmari",
        "email": "sdfd@dsa.com",
        "address": "pirips"
    },
    {       
        "id": "007",
        "first-name": "James",
        "last-name": "Bond",
        "email": "007.jb@secretagent.com",
        "address": "Győr, 9025, Knézich u. 15."
    }
];
*/
let table = document.querySelector("#userTable tbody");
let createTD = (html, parent) =>  {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
}

let createButtonGroup = parent => { 
    let group = document.createElement("div");
    group.className = "btn-group";
    let btnInfo = document.createElement("button");
    btnInfo.className = "btn-info btn";
    btnInfo.innerHTML = "Modify";
    let btnDanger = document.createElement("button");
    btnDanger.className = "btn-danger btn";
    btnDanger.innerHTML = "Delete";
    group.appendChild(btnInfo);
    group.appendChild(btnDanger);
    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
}

for ( let k in users ) { 
  let tr = document.createElement("tr");
  //to add numbering uncomment this
  //createTD(parseInt(k)+1, tr);
  for ( let data of Object.values(users[k]) ) {
      createTD(data, tr);
/*     let td = document.createElement("td");
    td.innerHTML = data;
    tr.appendChild(td); */
  }
  createButtonGroup(tr);
  table.appendChild(tr);
}



 
/* let newRow = document.createElement("tr");

let parent = document.querySelector("table.table").lastElementChild;

parent.appendChild(newRow)

parent = document.querySelector("table.table").lastElementChild;
for (let i = 0, i < users.) {
    parent.appendChild(users[i].value)
}

 */


let newEntries = document.querySelector("#newEntry");
newEntries.addEventListener("submit", function(ev) {
    ev.preventDefault();
    console.log(this)
    let inputs = this.querySelectorAll("input");
    let values = {};
    for (let i = 0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value;
    };
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
    modifyButton[i].addEventListener('click', function (event) {
        if (!confirm("sure u want to modify " + this.title)) {
            event.preventDefault();
        }
    });
}

let deleteButton = document.querySelectorAll("table .btn.btn-danger");
let deleteLineEventHandlerFunction = function (event) {
    if (!confirm("sure u want to delete " + this.title)) {
        event.preventDefault();
    } else {
        this.parentElement.parentElement.parentElement.remove();
    }

    console.log(event);
}

for (var i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener('click', deleteLineEventHandlerFunction);
}