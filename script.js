// To-Do Input Functionality

let button = document.getElementById("addItem");
let icon = document.getElementsByClassName("fa-plus")[0];


// Input button styling
icon.addEventListener("mouseover", function() {
    button.style.backgroundColor = "black"
    icon.style.color = "white";
})

icon.addEventListener("mouseout", function() {
    button.style.backgroundColor = "white";
    icon.style.color = "black";
})

button.addEventListener("mouseover", function() {
    button.style.backgroundColor = "black"
    icon.style.color = "white";
})

button.addEventListener("mouseout", function() {
    button.style.backgroundColor = "white";
    icon.style.color = "black";
})

// Edit, Complete, and Delete Task Functionality

function completeTask() {
    this.parentElement.style.textDecoration = "line-through";
    this.parentElement.style.opacity = "0.3"
}

function deleteTask() {
    this.parentElement.remove();
}

function editTask() {
    let parent = this.parentElement;
    let value = prompt("What changes would you like to make to this task?")
    if (value) {
        parent.innerText = value;
    } else {
        alert("Please input a task!");
    }
    
    let edit = document.createElement("button");
    edit.classList.add("edit");
    edit.innerText = "Edit";
    edit.addEventListener("click", editTask);
    parent.appendChild(edit);

    let complete = document.createElement("button");
    complete.classList.add("complete");
    complete.innerText = "Check";
    complete.addEventListener("click", completeTask)
    parent.appendChild(complete);

    let trash = document.createElement("button");
    trash.classList.add("trash");
    trash.innerText = "Trash";
    trash.addEventListener("click", deleteTask);
    parent.appendChild(trash)
}



// Input functionality

function addItemTodo(text) {

    let item = document.createElement("li");
    item.innerText = text;

    let edit = document.createElement("button");
    edit.classList.add("edit");
    edit.innerText = "Edit";
    edit.addEventListener("click", editTask);
    item.appendChild(edit);

    let complete = document.createElement("button");
    complete.classList.add("complete");
    complete.innerText = "Check";
    complete.addEventListener("click", completeTask)
    item.appendChild(complete);

    let trash = document.createElement("button");
    trash.classList.add("trash");
    trash.innerText = "Trash";
    trash.addEventListener("click", deleteTask);
    item.appendChild(trash)


    let list = document.getElementById("toDoList");
    list.appendChild(item);

}

function inputTask() {
    let value = document.getElementById("item").value;
    if (value) {
        addItemTodo(value);
    } else {
        alert("Please input a task!")
    }
    document.getElementById("item").value = "";
}

button.addEventListener("click", inputTask);
icon.addEventListener("click", inputTask);



// Set and format the time in the footer

function setTime() {
    let date = new Date();
    let formattedDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " and it is currently " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ".";
    document.getElementById("datetime").innerHTML = formattedDate;
}

setInterval(setTime, 1000)

// Clock Functionality

setInterval(setClock, 1000);

let secondsHand = document.querySelector('[data-seconds-hand]');
let minuteHand = document.querySelector('[data-minute-hand]');
let hourHand = document.querySelector('[data-hour-hand]');

function setClock() {
    let currentDate = new Date();
    let secondsRatio = currentDate.getSeconds() / 60;
    let minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    let hourRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondsHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hourRatio);

}

function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360);
}