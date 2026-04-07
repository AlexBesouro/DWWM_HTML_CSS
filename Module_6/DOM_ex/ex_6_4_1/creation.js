

const eggs = document.createElement("li")
eggs.textContent = "Oeufs"

const groceries = document.getElementById("courses")
groceries.append(eggs)

const butter = document.createElement("li")
butter.textContent = "Beurre"
groceries.prepend(butter)

console.log(`Total numbers of groceries ${groceries.children.length}`)