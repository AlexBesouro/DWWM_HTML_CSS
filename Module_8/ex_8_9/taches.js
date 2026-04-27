let state = {
    utilisateur: {
        nom: "Alice",
        preferences: {
        theme: "clair",
        langue: "fr"
        }
    },
    taches: [
        { id: 1, texte: "Apprendre le spread", terminee: true },
        { id: 2, texte: "Maitriser async/await", terminee: false },
        { id: 3, texte: "Connecter une API", terminee: false }
    ],
    filtre: "toutes",  // "toutes", "actives", "terminees"
    chargement: false,
    erreur: null
};

function ajouterTache(state, texte){
    const newState = {
        ...state,
        taches:[...state.taches, {id: state.taches.length + 1, texte: texte, terminee: false}]
    }
    return newState
}
// console.log(ajouterTache(state, "lozat"))
function toggleTache(state, id){
    const newState = {
        ...state,
        taches: state.taches.map(tache => tache.id === id ? {...tache, terminee: !tache.terminee} : tache)
    }
    return newState
}
// console.log(toggleTache(state, 2))

function supprimerTache(state, id){
    const newState = {
        ...state,
        taches: state.taches.filter(tache => tache.id !== id)
    }
    return newState
}
// console.log(supprimerTache(state, 2))

function changerFiltre(state, filtre){
    const newState = {
        ...state,
        filtre: filtre
    }
    return newState
}
console.log(changerFiltre(state, "actives"))
console.log(state)
