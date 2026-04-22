const livre = {title: ":Le Petit Prince", author: "Saint-Exupery", year: 1943, pages:96}

const {title, author} = livre
console.log(`${title} de ${author}`)

const saisons = ["Printemps", "Ete", "Automne", "Hiver"]
const [premier, , troisiem, quatrieme] = saisons

console.log(`Mes saisons preferees : ${premier} et ${troisiem}.`)

//=================================================================================

const utilisateur = {first_name: "Marie", last_name: "Dupont", email: "marie@email.com"}

const {first_name:prenom, last_name: nom, phone = "Non renseigne"} = utilisateur

console.log(`${prenom} ${nom} - Tel: ${phone}`)

function presenterUtilisateur({first_name:prenom, last_name: nom, email}){
    console.log(`Bonjour, je suis ${prenom} ${nom} (${email})`)
}
presenterUtilisateur(utilisateur)