// To-Do Input Functionality

let button = document.getElementById("addItem");
let icon = document.getElementsByClassName("fa-plus")[0];

// Counter Functionality

function countToDo() {
    let counter = document.getElementById("toDoCounter");
    let toDoList = document.getElementById("toDoList");
    counter.innerHTML = "(" + toDoList.childElementCount + ")";
}

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
    let completedList = document.getElementById("completedList");  
    let toDoList = document.getElementById("toDoList");
    let item = this.parentElement;
    toDoList.removeChild(item);
    completedList.appendChild(item);
    countToDo()
}

function deleteTask() {
    this.parentElement.remove();
    countToDo()
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
    edit.innerHTML = '<i class="far fa-edit"></i>'
    edit.addEventListener("click", editTask);
    parent.appendChild(edit);

    let complete = document.createElement("button");
    complete.classList.add("complete");
    complete.innerHTML = '<i class="fas fa-check-square"></i>'
    complete.addEventListener("click", completeTask)
    parent.appendChild(complete);

    let trash = document.createElement("button");
    trash.classList.add("trash");
    trash.innerHTML = '<i class="far fa-trash-alt"></i>'
    trash.addEventListener("click", deleteTask);
    parent.appendChild(trash)
}



// Input functionality

function addItemTodo(text) {

    let item = document.createElement("li");
    item.innerText = text;

    let edit = document.createElement("button");
    edit.classList.add("edit");
    edit.innerHTML = '<i class="far fa-edit"></i>';
    edit.addEventListener("click", editTask);
    item.appendChild(edit);

    let complete = document.createElement("button");
    complete.classList.add("complete");
    complete.innerHTML = '<i class="fas fa-check-square"></i>'
    complete.addEventListener("click", completeTask)
    item.appendChild(complete);

    let trash = document.createElement("button");
    trash.classList.add("trash");
    trash.innerHTML = '<i class="far fa-trash-alt"></i>'
    trash.addEventListener("click", deleteTask);
    item.appendChild(trash)


    let list = document.getElementById("toDoList");
    list.appendChild(item);

}

function inputTask() {
    let value = document.getElementById("item").value;
    if (value) {
        addItemTodo(value);
        countToDo()
    } else {
        alert("Please input a task!")
    }
    document.getElementById("item").value = "";
}

button.addEventListener("click", inputTask);
icon.addEventListener("click", inputTask);




// Completed list functionality


let completedList = document.getElementById("completedList");
let toDoList = document.getElementById("toDoList");

function changeListDisplay() {
    if (completedList.style.display === "none") {
        completedList.style.display = "flex"
        toDoList.style.display = "none"
        document.getElementById("displayCompleted").style.background = "linear-gradient(to right, rgb(39, 169, 253), rgb(25, 203, 207) )"
        document.getElementById("displayToDo").style.background = "#fff"
        document.getElementById("displayCompleted").removeEventListener("click", changeListDisplay);
        document.getElementById("displayToDo").addEventListener("click", changeListDisplay);
    } else {
        completedList.style.display = "none"
        toDoList.style.display = "flex"
        document.getElementById("displayToDo").style.background = "linear-gradient(to right, rgb(39, 169, 253), rgb(25, 203, 207) )"
        document.getElementById("displayCompleted").style.background = "#fff"
        document.getElementById("displayToDo").removeEventListener("click", changeListDisplay);
        document.getElementById("displayCompleted").addEventListener("click", changeListDisplay);
    }   
}

document.getElementById("displayToDo").addEventListener("click", changeListDisplay);
document.getElementById("displayCompleted").addEventListener("click", changeListDisplay);

// Set and format the time in the footer

function setTime() {
    let date = new Date();
    let formattedDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " and it is currently " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ".";
    document.getElementById("datetime").innerHTML = formattedDate;
}

setInterval(setTime, 1000);

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