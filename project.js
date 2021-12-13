let tasks = [];
let notesDiv, noteDiv, taskDiv, deadlineDiv, buttonDiv, button, span, taskInfo;
let index = 0;
showStorage();
function saveTask() {
    let inputToDo = document.getElementById("ToDo");
    let inputDate = document.getElementById("date");
    let inputTime = document.getElementById("time");
    taskInfo = {
        toDo: inputToDo.value,
        deadlineDate: inputDate.value,
        timeDeadline: inputTime.value,
    }
    tasks.push(taskInfo);
    addToStorage();
    createNote(taskInfo);
}

function addToStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function createNote(taskInfo) {
    defineDivs();
    createEraseButton(index);
    giveClasses();
    giveContent(taskInfo);
    setInPlace();
}

function defineDivs() {
    notesDiv = document.getElementById("notesDiv");
    noteDiv = document.createElement("div");
    taskDiv = document.createElement("div");
    deadlineDiv = document.createElement("div");
    buttonDiv = document.createElement("div");
}



function giveClasses() {
    noteDiv.setAttribute("class", "noteDiv");
    noteDiv.setAttribute("id", index);
    taskDiv.setAttribute("class", "taskDiv");
    deadlineDiv.setAttribute("class", "deadlineDiv");
    span.setAttribute("class", "glyphicon glyphicon-remove")
    button.setAttribute("class", "remove-button");
}

function giveContent(taskInfo) {
    taskDiv.innerHTML = taskInfo.toDo;
    deadlineDiv.innerHTML = taskInfo.deadlineDate + "<br>" + taskInfo.timeDeadline;
}

function setInPlace() {
    notesDiv.appendChild(noteDiv);
    noteDiv.appendChild(taskDiv);
    noteDiv.appendChild(deadlineDiv);
    buttonDiv.appendChild(button);
    noteDiv.appendChild(buttonDiv);
    button.appendChild(span);
    index++;
}

function createEraseButton(index) {
    button = document.createElement("button");
    span = document.createElement("span");
    button.onclick = () => removeTask(index);
}

function removeTask(index) {
    tasks.splice(index, 1);
    let note = document.getElementById(index);
    notesDiv.removeChild(note);
    addToStorage();

}

function showStorage() {
    if (localStorage.getItem("tasks") != null) {
        tasks = JSON.parse(localStorage.getItem("tasks"));
        for (let i = 0; i < tasks.length; i++) {
            createNote(tasks[i]);
        }
    }
}
