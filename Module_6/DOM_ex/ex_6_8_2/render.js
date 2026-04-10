const storedContacts = localStorage.getItem("mes_contacts")
const contacts = storedContacts ? JSON.parse(storedContacts):[
    { nom: "Alice Martin", telephone: "06 12 34 56 78" },
    { nom: "Thomas Bernard", telephone: "07 88 99 00 11" },
    { nom: "Léa Petit", telephone: "01 45 67 89 22" }
];

const contactList = document.getElementById("contact-list")
const counter = document.getElementById("counter")
const contactForm = document.getElementById("contact-form")
const nameContact = document.getElementById("name")
const phoneContact = document.getElementById("phone")

function renderContacts(){
    contactList.innerHTML = ""
    contacts.forEach((contact) => {
        const li = document.createElement("li")
        li.textContent = `${contact.nom} - ${contact.telephone}`
        contactList.append(li)

    })
    counter.textContent = `${contacts.length} contact(s) enregistre`
}
renderContacts()

function addContact(event){
    event.preventDefault()
    const inputName = nameContact.value.trim()
    const inputPhone = phoneContact.value.trim()
    
    if (inputName && inputPhone){
        contacts.push({nom: inputName, telephone: inputPhone})
        localStorage.setItem("mes_contacts", JSON.stringify(contacts))  
        nameContact.value = "";
        phoneContact.value = "";
        renderContacts();
    }
}

contactForm.addEventListener("submit", addContact)