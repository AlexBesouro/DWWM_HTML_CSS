const contacts = [
    { nom: "Alice", email: "alice@example.com" },
    { nom: "Bob", email: "bob@example.com" },
    { nom: "Charlie", email: "charlie@example.com" },
    { nom: "Diana", email: "diana@example.com" }
];
const contactsList = document.getElementById("liste-contacts")

contacts.forEach(element => {
    const li = document.createElement("li")
    li.classList.add("contact-item")
    li.innerHTML = `<strong class="nom">${element.nom}</strong> - <span class="email">${element.email}</span>`
    contactsList.append(li)
})

console.log(contactsList.children[1].textContent)
contactsList.children[1].remove()
console.log(contactsList.children.length)