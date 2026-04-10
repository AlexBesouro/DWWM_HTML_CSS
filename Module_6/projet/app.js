console.log("Ma Liste de Tâches chargee!")
const titleH1 = document.querySelector("h1")
titleH1.textContent = "My tasks to do!"




// === Element selection ===
const taskList = document.querySelector(".task-list");
const counter = document.querySelector(".counter");
const newTaskButton = document.querySelector("#btn-new-task");

const addForm = document.querySelector("#add-form");
const newTaskField = document.querySelector("#new-task-field");
const errorTask = document.querySelector("#error-task");


// === Refresh counter ===
function refreshCounter(event){
    const allTasks = document.querySelectorAll(".task")
    const allTasksDone = document.querySelectorAll(".task.done")
    const total = allTasks.length
    const taskFinished = allTasksDone.length
    const taskInProcess = total - taskFinished
    if (total === 0){
        counter.textContent = " 0 tasks"
    }else {
        counter.textContent = `${taskFinished} - finished, ${taskInProcess} - still active`
    }
}
refreshCounter()

function deleteTask(event){
    const deleteBtn = event.target.closest(".delete-btn")
    if (deleteBtn){
        const task = deleteBtn.closest(".task")
        task.remove()
        refreshCounter()
        return true
    }
    return false
}
function toggleStatus(event){
    const text = event.target.closest(".task-text")
    if (text){
        const task = text.closest(".task")
        task.classList.toggle("done")
        task.dataset.status = task.classList.contains("done") ? "finished" : "active"
        refreshCounter()
        return true
    }
    return false
}

taskList.addEventListener("click", function(event){
    if (deleteTask(event)) return;
    if (toggleStatus(event)) return;
})

function showNewTask(event){
    const newTask = event.target.closest("#btn-new-task")
    if (newTask){
        const addForm = document.querySelector("#add-form")
        if (addForm.style.display === "none"){
            addForm.style.display = "block"
        }else addForm.style.display = "none"
    }
}
newTaskButton.addEventListener("click", showNewTask)


function addTask(event){
    event.preventDefault()
    const input = newTaskField.value.trim()
    if (input === ""){
        newTaskField.classList.add("invalide")
        errorTask.textContent = "Enter the task's name!"
    } else{
        const newTask = document.createElement("li")
        const span = document.createElement("span");
        const deleteBtn = document.createElement("button")
        newTaskField.classList.remove("invalide");
        newTask.classList.add("task")
        newTask.dataset.status = "active"        
        span.classList.add("task-text")
        span.textContent = input + " "
        deleteBtn.classList.add("delete-btn")
        deleteBtn.textContent = "X"
        newTask.append(span,deleteBtn)
        taskList.append(newTask)
        newTaskField.value = ""
        errorTask.textContent = ""

        refreshCounter()
    }
}
addForm.addEventListener("submit", addTask)