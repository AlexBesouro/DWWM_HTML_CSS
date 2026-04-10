const formInscription = document.querySelector("#formInscription")
const pseudo = document.querySelector("#pseudo")
const age = document.querySelector("#age")
const erreurPseudo = document.querySelector("#erreurPseudo")
const erreurAge = document.querySelector("#erreurAge")
const messageGlobal = document.querySelector("#messageGlobal")


function validatePseudo(event){
    const userPseudo = pseudo.value.trim()
    if (userPseudo.length < 3){
        pseudo.classList.add("invalide")
        pseudo.classList.remove("valide")
        erreurPseudo.textContent = "Pseudo non vide et >= 3 caractères"
        return false
    } else {
        pseudo.classList.add("valide")
        pseudo.classList.remove("invalide")
        erreurPseudo.textContent = ""
        return true
    }
}
function validateAge(event){
    const userAge = parseInt(age.value)
    if (userAge < 16 || userAge >= 120){
        age.classList.add("invalide")
        age.classList.remove("valide")
        erreurAge.textContent = "Âge (entre 16 et 120)"
        return false
    } else {
        age.classList.add("valide")
        age.classList.remove("invalide")
        erreurAge.textContent = ""
        return true
    }
}
pseudo.addEventListener("input", validatePseudo)
age.addEventListener("input", validateAge)


formInscription.addEventListener("submit", function(event){
    event.preventDefault()
    const isPseudoValid = pseudo.value.trim().length >= 3;
    const isAgeValid = parseInt(age.value) >= 16 && parseInt(age.value) <= 120;

    if (!isPseudoValid) {
        pseudo.classList.add("invalide");
        erreurPseudo.textContent = "Minimum 3 caractères !";
    }

    if (!isAgeValid) {
        age.classList.add("invalide");
        erreurAge.textContent = "Âge entre 16 et 120 !";
    }
    if (isAgeValid && isPseudoValid){
        messageGlobal.textContent = "Inscription reussie !"
        pseudo.value = ""
        age.value = ""
    }

})