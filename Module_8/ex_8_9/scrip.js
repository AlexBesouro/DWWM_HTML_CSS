const produit = {
    nom: "Clavier mecanique",
    prix: 89.99,
    stock: 15,
    categorie: "Peripheriques"
};

const produitSolde = {... produit, prix: produit.prix * 0.8, }

// console.log(produit)
// console.log(produitSolde)

const panier = ["Souris", "Clavier", "Ecran"];

const panierAvecCasque = [...panier, "casque"]
const panierSansSouris = panier.filter(prod => prod !== "Souris")
const panierModifie = panier.map(prod=> prod==="Ecran"? "Ecran 4K":prod)

// console.log(panier)
// console.log(panierAvecCasque)
// console.log(panierSansSouris)
// console.log(panierModifie)

const utilisateur = {
    nom: "Alice",
    estConnecte: true,
    estAdmin: true,
    nbMessages: 0
};

const salutation = utilisateur.estConnecte ? "Bonjour Alice" : "Veuillez vous connecter";
const role = utilisateur.estAdmin ? "Administrateur" : "Utilisateur"
const badgeMessages = utilisateur.nbMessages > 0 && "3 nouveaux messages"  
const menuAdmin = utilisateur.estAdmin && utilisateur.estConnecte && "Gestion du site"

// console.log(salutation)
// console.log(role)
// console.log(badgeMessages)
// console.log(menuAdmin)


const films = [
    {
        titre: "Inception",
        realisateur: { nom: "Christopher Nolan" },
        critiques: { note: 8.8, nombre: 2500 }
    },
    {
        titre: "Film Inconnu"
        // Pas de realisateur ni de critiques
    },
    {
        titre: "Matrix",
        realisateur: { nom: "Wachowski" }
        // Pas de critiques
    }
];

films.forEach(film=>{
    console.log(
        `"Titre : ${film.titre} | Realisateur : ${film.realisateur?.nom?? 'Inconnu'} | Note : ${film.critiques?.note ?? 'N/A'}`
    )
})


const appState = {
    utilisateur: { nom: "Bob", preferences: { theme: "sombre" } },
    notifications: [
        { id: 1, texte: "Nouveau film ajoute", lue: false },
        { id: 2, texte: "Votre avis a ete publie", lue: true }
    ],
    chargement: false,
    erreur: null
};

const newState = {
    ...appState,
    utilisateur: {...appState.utilisateur,
        preferences:{...appState.utilisateur.preferences, theme: "clair"}
    },
    notifications:[...appState.notifications, { id: 3, texte: "Bienvenue", lue: false }]
}
// console.log(appState)
// console.log(newState)
console.log(appState.chargement ? "Chargement..." : "Contenu pret")
console.log(appState.erreur && "Something wrong")
const notifications = newState?.notifications ?? []
const nonLue = notifications.filter(notif => !notif.lue).length
console.log(nonLue)