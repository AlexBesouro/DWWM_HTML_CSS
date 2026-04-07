const titleH1 = document.getElementById("titre")
titleH1.style.color = "blue"

const firstItem = document.querySelector(".item")
firstItem.classList.add("surligne")

const secondItem = document.querySelectorAll(".item")[1]
secondItem.classList.add("barre")

const thirdItem = document.querySelectorAll(".item")[2]
thirdItem.classList.add("important")

console.log(firstItem.classList.contains("surligne"))
console.log(firstItem.classList.contains("barre"))


const allItems = document.querySelectorAll(".item")
allItems.forEach(element => console.log(element.dataset.status))
allItems.forEach(element => console.log(element.dataset.category))

allItems.forEach(element => {if (element.dataset.status === "done")
    element.classList.add("barre")
})

for (let i = 0; i < 3; i++){
    firstItem.classList.toggle("surligne")
    console.log(firstItem.classList.contains("surligne"))
}