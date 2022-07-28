// JavaScript source code

let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let textDate = document.getElementById("textDate");
let textArea = document.getElementById("textArea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();


});

let formValidation = () => {
    if (textInput.value === "") {
        console.log('Failure');
        msg.innerHTML = "El titulo de la tarea no puede ser vacio."
    }
    else {
        console.log('Success');
        msg.innerHTML = "";
        acceptData();
        add.setAttribute("data-bs-dismiss", "modal");
        add.click();

        (() => {
            add.setAttribute("data-bs-dismiss", "modal");
        })
    }
};

let data = {};

let acceptData = () => {
    data["text"] = textInput.value;
    data["date"] = textDate.value;
    data["description"] = textArea.value;
    createTask();
    console.log(data);
};


let createTask = () => {
    tasks.innerHTML += `
        <div>
                <span class="fw-bold">${data.text}</span>
                <span class="small text-secondary">${data.date}</span>
                <p>${data.description}</p>
                <span class="options">
                    <i class="fa-solid fa-pencil"></i>
                    <i onClick = "deleteTask(this)" class="fa-solid fa-trash"></i>
                </span>
            </div>

` ;
    resetForm();
};

let resetForm = () => {
    textInput.value = "";
    textDate.value = "";
    textArea.value = "";
};

let deleteTask = (e) => {
    e.parentElement.remove();
};