const title_h1 = document.getElementById("titre-principal")
console.log(title_h1)
title_h1.textContent = "Draste"

const intro_premier = document.querySelector(".intro")
console.log(intro_premier)
console.log(intro_premier.textContent)
intro_premier.textContent = "Ce texte a été modifié."


const items = document.querySelectorAll(".item")
console.log(items)
console.log(items[1].textContent)
console.log(items.length)
items.forEach((element,index) => element.textContent = `${index + 1}. ${element.textContent}`)

const intro_deuxieme = document.querySelectorAll(".intro")[1]

intro_deuxieme.textContent = "Modification reussie!"