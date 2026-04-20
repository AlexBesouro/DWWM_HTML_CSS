const tasksGrid = document.querySelector(".tasks-grid");
const addDay = document.querySelector(".add-day");
const modal = document.querySelector(".modal")
const taskForm = document.querySelector(".add-task-form")
const dateInput = document.getElementById('task-date');
const taskGrid = document.querySelector(".tasks-grid")
const nameSearch = document.querySelector("#name-search")
const sorting = document.querySelector(".btn-header")
// STEP 1. ==============LOADING / SAVING DATA===============
let tasks = []
function loadTasks(){
    const storedData = localStorage.getItem("my_stored_tasks")
    if (!storedData){
        tasks = []
        return;
    }
    try {
        const parsedData = JSON.parse(storedData);
        tasks = Array.isArray(parsedData) ? parsedData.flatMap((task) => {
            if (typeof task === "object" && task !== null){
                return {name: task.name, leadTime:task.leadTime, score:task.score,
                    description:task.description, date:task.date
                }
            } return [];
        }) : [];
    }catch (error) {
        console.error("Data error:", error);
        tasks = [];
    }
}
loadTasks()
function saveTasks(){
    localStorage.setItem("my_stored_tasks", JSON.stringify(tasks))
}


// STEP 2. ==============RENDER TASKS=====================
function renderTasks(tasksArray){
    tasksGrid.innerHTML = ""
    tasksArray.forEach(task => {
        const card = document.createElement("div");
        card.classList.add("container-day");

        const button = document.createElement("button")
        button.classList.add("close-modal")
        button.textContent = 'X';

        const h3 = document.createElement("h3")
        h3.classList.add("card-name")
        h3.textContent = task.name;

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const createRow = (labelStr, valueClass, valueStr) => {
            const row = document.createElement('div');
            row.classList.add('card-info-row');
            row.innerHTML = `<span class="label">${labelStr}</span> <span class="${valueClass}">${valueStr}</span>`;
            return row;
        };

        const comments = document.createElement('div');
        comments.classList.add('card-comments');
        comments.innerHTML = `<span class="label">Description:</span><p class="comment-text">${task.description}</p>`;

        const date = document.createElement('span');
        date.classList.add('card-date');
        date.textContent = task.date;

        cardBody.append(createRow("Lead time", "task-time", task.leadTime))
        cardBody.append(createRow("Score", "task-rating", "★".repeat(task.score)))
        cardBody.append(comments)

        card.append(button, h3, cardBody, date);
        tasksGrid.append(card);
    })
}
renderTasks(tasks)
tasks.sort((a, b) => {
        const dateB = new Date(b.date.split('/').reverse().join('-'));
        const dateA = new Date(a.date.split('/').reverse().join('-'));
        return dateB - dateA;
    });

// STEP 3 ================ ADD TASKS=======================

const today = new Date().toISOString().split('T')[0];
dateInput.max = today;
function addTasks(event){
    modal.classList.add("active");
    const form = document.querySelector("#add-task-form");
    if(form) form.reset();
    dateInput.value = today;
}
addDay.addEventListener("click", addTasks)

function handleFormSubmit(event) {
    event.preventDefault(); 
    const taskName = document.querySelector("#task-name").value.trim();
    const taskLeadTime = document.querySelector("#task-lead-time").value.trim();
    const taskScore = parseInt(document.querySelector("#task-score").value);
    const taskDescription = document.querySelector("#task-description").value.trim();
    const rawDate = document.querySelector("#task-date").value;
    const taskDate = rawDate.split('-').reverse().join('/');

    if (!taskName) return;
    tasks.push({
        name: taskName,
        leadTime: taskLeadTime,
        score: taskScore,
        description: taskDescription,
        date: taskDate
    });

    saveTasks();       
    renderTasks(tasks);  
    modal.classList.remove("active");
}
taskForm.addEventListener("submit", handleFormSubmit)

// STEP 4 ================ MODAL OPENING/CLOSING=============

taskGrid.addEventListener("click", (e)=>{
    const card = e.target.closest(".container-day");
    if (e.target.classList.contains("close-modal")) {
        card.classList.remove("active");
        modal.classList.remove("active");
        document.body.classList.remove("active"); 
        return;
    }
    if (card) {
        modal.classList.add("active");
        card.classList.add("active");
        document.body.classList.add("active"); 
    }
    
})
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        const activeCard = document.querySelector(".container-day.active");
        if (activeCard) activeCard.classList.remove("active");
        modal.classList.remove("active");
        document.body.classList.remove("active");
    }
})

// STEP 5 ========== SEARCH BY NAME ================
function searchTasks(){
    const input = nameSearch?.value.trim() || "";
    return tasks.filter(task => task.name.toLowerCase().includes(input))
}

function renderTasksList(){
    const visibleTasks = searchTasks()
    renderTasks(visibleTasks)
}

nameSearch?.addEventListener("input", renderTasksList)

// STEP 5 ========== SORT ================

function sortList(){
    tasks.sort((a, b) => {
        const dateA = new Date(a.date.split('/').reverse().join('-'));
        const dateB = new Date(b.date.split('/').reverse().join('-'));
        
        return dateA - dateB;
    });
    renderTasksList()
}

sorting.addEventListener("click", sortList)