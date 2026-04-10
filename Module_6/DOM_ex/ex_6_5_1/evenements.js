let counter = 0
const counterDisplay = document.querySelector("#compteur")

function buttonClicked(event){
    console.log("Button was clicked")
    counter += 1
    counterDisplay.textContent = `Clics : ${counter}`
    console.log(event.type)
    console.log(event.target.textContent)
}
const buttonClick = document.querySelector("#btn-clic")
buttonClick.addEventListener("click", buttonClicked)


function buttonStyled(event){
    console.log("Button was clicked to change style")
    const styleDisplay = document.querySelector("#btn-style")
    styleDisplay.classList.toggle('actif')
    console.log(event.type)
    console.log(event.target.textContent)

}
const buttonStyle = document.querySelector("#btn-style")
buttonStyle.addEventListener("click", buttonStyled)

const typedInput = document.querySelector("#saisie")
const mirroredInput = document.querySelector("#miroir")
function outputMirror(event){
    mirroredInput.textContent = `Vous tapez : ${event.target.value}`
}
typedInput.addEventListener("input", outputMirror)
typedInput.addEventListener("keydown", function(event){
    console.log(event.key)
    if (event.key === "Enter"){
            console.log("Valide!")
    }
})

const linkToBlock = document.querySelector("#lien-bloque")
const message = document.querySelector("#message-lien")
linkToBlock.addEventListener("click", function(event){
    event.preventDefault()
    message.textContent = "Navigation bloquee !"
})
