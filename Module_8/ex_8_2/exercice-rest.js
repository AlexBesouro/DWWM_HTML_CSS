const tab = ["red", "blue", "orange", "violet"]
const tabCopie = [...tab, "green"]
console.log(tabCopie)

const tab1 = ["yellow", "pink", "black"]
const bigTab = [...tab, "white", ...tab1]
console.log(bigTab)
const [a,b, ...left] = bigTab
console.log(a)
console.log(b)
console.log(left)

const car = {marque:"Audi", modele: "RS 6", annee: 2025, couleur: "black"}
const modifiedCar = {...car, couleur: "cherry"}
modifiedCar.km = 10234
console.log(modifiedCar)
console.log(car)


function premierEtReste(first, ...rst){
    console.log(`Premier: ${first} et Reste: [${rst.join(', ')}]`)
}
premierEtReste("chef", "employe1", "employe2", "employe3")

console.log("======================================================================================")

const configDefaut = {theme: "clair", langue: "fr", notifications: true, itemsParPage: 10, affichage: "liste"}
const prefsUtilisateur = {theme: "sombre", itemsParPage: 25}

const configFinale = {...configDefaut, ...prefsUtilisateur}
console.log(configFinale)

const produits = [
    { id: 1, nom: "Clavier", prix: 49.99, stock: 15 },
    { id: 2, nom: "Souris", prix: 29.99, stock: 30 },
    { id: 3, nom: "Ecran", prix: 299.99, stock: 5 }
];
function mettreAJourPrix(produits, id, nouveauPrix){
    return produits.map(prod => {
        if (prod.id === id){
            return {...prod, prix: nouveauPrix};
        }
        return prod
    })
}
console.log(mettreAJourPrix(produits, 2, 35.00))
console.log(produits)

console.log("======================================================================================")

function creerEquipe(capitaine, ...joueurs){
    return {capitaine: capitaine, joueurs: joueurs, taille: joueurs.length + 1}
}
console.log(creerEquipe("Bruno", "player 1","player 2","player 3" ))

const utilisateur = {id: 1, nom: "nomnom", email:"email", motDePasse:"password", role:"admin"}
const {motDePasse, ...utilisateurPublic} = utilisateur
console.log(utilisateurPublic)

console.log("======================================================================================")

const profil = {
    nom: "Alice",
    scores: { math: 18, francais: 15 }
};
const copie = { ...profil, scores:{...profil.scores} }
copie.scores.math = 20
console.log(profil)
console.log(copie)
