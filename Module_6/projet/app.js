const taskList = document.querySelector(".task-list");
const counter = document.querySelector(".counter");
const newTaskButton = document.querySelector("#btn-new-task");
const addForm = document.querySelector("#add-form");
const newTaskField = document.querySelector("#new-task-field");
const errorTask = document.querySelector("#error-task");
const filterButtons = document.querySelectorAll(".btn-filter");
const sortNameButton = document.querySelector("#sort-name");
const searchInput = document.querySelector("#searching");

let todoItems = [];
let currentFilter = "all";
let currentSortOrder = "asc";

function createTaskId() {
    return Math.random().toString(36).slice(2, 10);
}

function loadTodos() {
    const storedData = localStorage.getItem("my_todo_list");
    if (!storedData) {
        todoItems = [{ id: createTaskId(), text: "Climbing", status: "active" }];
        saveTodos();
        return;
    }

    try {
        const parsed = JSON.parse(storedData);
        todoItems = Array.isArray(parsed)
            ? parsed.map(item => {
                if (typeof item === "string") {
                    return {id: createTaskId(), text: item, status: "active" };
                }
                return {
                    id: item.id || createTaskId(),
                    text: item.text || "",
                    status: item.status === "finished" ? "finished" : "active"
                };
            })
            : [];
    } catch (error) {
        todoItems = [{ id: createTaskId(), text: "Climbing", status: "active" }];
    }
}

function saveTodos() {
    localStorage.setItem("my_todo_list", JSON.stringify(todoItems));
}

function renderToDoList(items) {
    taskList.innerHTML = "";
    items.forEach(task => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const button = document.createElement("button");

        li.classList.add("task");
        li.dataset.status = task.status;
        li.dataset.id = task.id;
        if (task.status === "finished") {
            li.classList.add("done");
        }

        span.classList.add("task-text");
        span.textContent = task.text;

        button.classList.add("delete-btn");
        button.textContent = "X";

        li.append(span, button);
        taskList.append(li);
    });
}

function getVisibleTasks() {
    const searchValue = searchInput?.value.trim().toLowerCase() || "";
    return todoItems
        .filter(task => {
            if (currentFilter === "active") return task.status === "active";
            if (currentFilter === "done") return task.status === "finished";
            return true;
        })
        .filter(task => task.text.toLowerCase().includes(searchValue));
}

function refreshCounter() {
    const total = todoItems.length;
    const taskFinished = todoItems.filter(task => task.status === "finished").length;
    const taskInProcess = total - taskFinished;

    counter.textContent = total === 0
        ? "0 tasks"
        : `${taskFinished} - finished, ${taskInProcess} - still active`;
}

function updateFilterButtons() {
    filterButtons.forEach(button => {
        if (button.dataset.filter === currentFilter) {
            button.classList.add("actif");
        } else {
            button.classList.remove("actif");
        }
    });
}

function renderList() {
    const visibleTasks = getVisibleTasks();
    renderToDoList(visibleTasks);
    refreshCounter();
}

function deleteTask(event) {
    const deleteBtn = event.target.closest(".delete-btn");
    if (!deleteBtn) return false;

    const taskItem = deleteBtn.closest(".task");
    const taskId = taskItem.dataset.id;

    todoItems = todoItems.filter(task => task.id !== taskId);
    saveTodos();
    renderList();
    return true;
}

function toggleStatus(event) {
    const text = event.target.closest(".task-text");
    if (!text) return false;

    const taskItem = text.closest(".task");
    const taskId = taskItem.dataset.id;
    const taskIndex = todoItems.findIndex(task => task.id === taskId);
    if (taskIndex === -1) return false;

    todoItems[taskIndex].status = todoItems[taskIndex].status === "finished" ? "active" : "finished";
    saveTodos();
    renderList();
    return true;
}

function setFilter(event) {
    const button = event.target.closest(".btn-filter");
    if (!button) return;

    currentFilter = button.dataset.filter;
    updateFilterButtons();
    renderList();
}

function sortByName() {
    todoItems.sort((a, b) => a.text.localeCompare(b.text, "fr", { sensitivity: "base" }));
    saveTodos();
    renderList();
}

function showNewTask() {
    addForm.classList.toggle("hidden");
}

function addTask(event) {
    event.preventDefault();
    const input = newTaskField.value.trim();

    if (input === "") {
        newTaskField.classList.add("invalide");
        errorTask.textContent = "Enter the task's name!";
        return;
    }

    todoItems.push({ id: createTaskId(), text: input, status: "active" });
    saveTodos();
    newTaskField.classList.remove("invalide");
    newTaskField.value = "";
    errorTask.textContent = "";
    renderList();
}

loadTodos();
updateFilterButtons();
renderList();

taskList.addEventListener("click", event => {
    if (deleteTask(event)) return;
    if (toggleStatus(event)) return;
});

newTaskButton.addEventListener("click", showNewTask);
addForm.addEventListener("submit", addTask);
filterButtons.forEach(button => button.addEventListener("click", setFilter));
sortNameButton.addEventListener("click", sortByName);
searchInput?.addEventListener("input", renderList);
