console.log("Ma Liste de Tâches chargee!")
const titleH1 = document.querySelector("h1")
titleH1.textContent = "Mes Tâches du Jour"

// const allTasks = document.querySelectorAll(".task-list li")
// allTasks.forEach(element => console.log(element)) 

// const taskCounter = document.querySelector(".counter")
// taskCounter.textContent = `${allTasks.length} tâches en cours`

// allTasks.forEach(element => element.textContent = `📌 ${element.textContent}`) 

// allTasks[0].classList.add("done")
// allTasks[0].dataset.status = "done"

// let activeTasks = 0
// let completedTasks = 0

// allTasks.forEach(element => {
//     if (element.dataset.status === "done"){
//         completedTasks += 1
//     }else activeTasks +=1
// }) 
// console.log(`Taches en cours: ${activeTasks}`)
// console.log(`Taches fini: ${completedTasks}`)
// taskCounter.textContent = `${activeTasks} tâches en cours, ${completedTasks} terminée`


const taches = [
    { id: 1, texte: "Faire les courses", status: "active" },
    { id: 2, texte: "Reviser JavaScript", status: "done" },
    { id: 3, texte: "Ranger le bureau", status: "active" }
];

function afficherTaches(table){
    const listConteiner = document.querySelector(".task-list")
    listConteiner.innerHTML = ""

    table.forEach(element => {
        const li = document.createElement("li")
        li.classList.add("task")
        if (element.status === "done"){
            li.classList.add("done")
        }
        li.dataset.id = element.id;
        li.innerHTML = `<span>${element.texte}</span>`
        listConteiner.append(li)
    })
}

afficherTaches(taches)