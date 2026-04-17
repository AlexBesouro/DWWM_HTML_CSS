const tasksGrid = document.querySelector(".tasks-grid");
// STEP 1. ==============LOADING / SAVING DATA===============
let tasks = []
function loadTasks(){
    const storedData = localStorage.getItem("my_stored_tasks")
    if (!storedData){
        tasks = [{name: "Task's name", leadTime: "Lead time", score: 5, description: "Task's description", date: new Date().toLocaleDateString('fr-FR')}]
        console.log(tasks)
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