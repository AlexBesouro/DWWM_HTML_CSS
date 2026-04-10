const formulaire = document.querySelector("#form-contact")
const formName = document.querySelector("#nom")
const formEmail = document.querySelector("#email")
const message = document.querySelector("#message")

formulaire.addEventListener("submit", function(event){
    event.preventDefault()
    const name = formName.value.trim()
    const email = formEmail.value.trim()
    if (name || email){
        message.textContent = `Merci ${name}, votre email ${email} a été enregistré !`
        
    } else return "Enter valid name and email"
    console.log(`Name - ${name}, Email - ${email}`)
    formName.value = ""
    formEmail.value = ""
})