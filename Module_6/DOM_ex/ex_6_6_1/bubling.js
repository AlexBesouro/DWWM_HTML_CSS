const enfant = document.querySelector(".enfant")
const parent = document.querySelector("#parent")
const grandParent = document.querySelector("#grand-parent")

enfant.addEventListener("click", function(event){
    // console.log(`"Clic capte par : ${event.currentTarget}`)})
    console.log("1. Clic capte par : LI (enfant) — " + event.target.textContent.trim());
})
parent.addEventListener("click", function(event){
    console.log(`"Clic capte par : ${event.currentTarget.tagName}`)})
grandParent.addEventListener("click", function(event){
    console.log(`"Clic capte par : ${event.currentTarget}`)})



const btnAjouter = document.querySelector("#btn-ajouter")
const inputColor = document.querySelector("#champ-couleur")
const listColors = document.querySelector("#liste-couleurs")
function addColor(event){
    if ((inputColor.value).trim() !== ""){
        const li = document.createElement("li")
        li.textContent = inputColor.value + " "
        const btnDelete = document.createElement("button")
        btnDelete.textContent = "X"
        btnAjouter.classList.add("btn-supprimer")
        li.append(btnDelete)
        listColors.append(li)
        
        inputColor.value = ""

    }
}

btnAjouter.addEventListener("click", addColor)
listColors.addEventListener("click", function(event){
    const btnDelete = event.target.closest(".btn-supprimer")
    if (btnDelete){
        const li = btnDelete.closest("li")
        const color = li.textContent.replace("X", "").trim()
        li.remove()
        console.log(`${color} supprime!`)
        return
    }
})
