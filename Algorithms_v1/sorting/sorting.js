// const ages = [25, 8, 42, 15, 3, 67, 31];
// const prenoms = ["Lucas", "emma", "Clara", "hugo", "Alice"];
// const temperatures = [-5, 12, 0, 38, -15, 22, 8];

// const sortedAges = ages.toSorted((a,b) => a - b)
// console.log(sortedAges)
// const sortedAgesDec = ages.toSorted((a,b) => b - a)
// console.log(sortedAgesDec)
// const sortedPrenoms = prenoms.toSorted((a,b) => a.localeCompare(b, "fr", { sensitivity: "base" }))
// console.log(sortedPrenoms)

// const sortedTemperatures = temperatures.toSorted((a,b) => b - a).slice(0,3)
// console.log(sortedTemperatures)

// // ----------------------------------------------------------------------------------------------------------------------------

// const produits = [
//     { nom: "Clavier mecanique", prix: 89.99, categorie: "informatique", stock: 15 },
//     { nom: "Souris gaming", prix: 49.99, categorie: "informatique", stock: 0 },
//     { nom: "Casque audio", prix: 129.99, categorie: "audio", stock: 8 },
//     { nom: "Ecran 27 pouces", prix: 349.99, categorie: "informatique", stock: 3 },
//     { nom: "Enceinte bluetooth", prix: 59.99, categorie: "audio", stock: 12 },
//     { nom: "Webcam HD", prix: 39.99, categorie: "informatique", stock: 0 },
//     { nom: "Micro USB", prix: 29.99, categorie: "audio", stock: 20 }
// ];


// const sortedProduitsPrix = produits.toSorted((a,b) => a.prix - b.prix).map((prod) => `${prod.nom} : ${prod.prix}`);
// console.log(sortedProduitsPrix)
// const sortedProduitsNom = produits.toSorted((a,b) => a.nom.localeCompare(b.nom, "fr", {sensitivity: "base"}));
// console.log(sortedProduitsNom)

// console.log(sortedProduitsPrix.reverse().slice(0,3))

// const sortedProduitsCategorie = produits.toSorted((a,b) => {
//     const sortedCategorie = a.categorie.localeCompare(b.categorie, "fr", {sensitivity: "base"});
//     if (sortedCategorie !== 0) return sortedCategorie;

//     return a.prix - b.prix
// });

// console.table(sortedProduitsCategorie)


// ----------------------------------------------------------------------------------------------------------------------------
const prenoms = ["Emma", "Lucas", "Clara", "Hugo", "Lea", "Adam", "Nina", "Paul", "Jade", "Tom"];
function chercherPrenom(tableau, prenom){
    let etapes = 0;
    for (let i = 0; i < tableau.length; i++){
        etapes ++
        if (tableau[i] === prenom){
            return `Trouve: true, index: ${i}, etapes: ${etapes}`;
        }
    } 
    return `Trouve: false, index: -1, etapes: ${etapes}`;
}
console.log(chercherPrenom(prenoms, "ClaSra"))

const nombres = [3, 7, 11, 15, 18, 22, 26, 30, 35, 40, 44, 49, 53, 58, 62, 67, 71, 78, 84, 91];

function rechercheDicho(tableau, valeur){
    let debut = 0;
    let fin = tableau.length - 1
    etapes = 0
    while (debut <= fin){
        etapes ++
        const center = Math.floor((debut + fin) / 2)
        if (tableau[center] === valeur){
            return `Trouve: true, index: ${center}, etapes: ${etapes}`
        } else if (tableau[center] < valeur){
            debut = center + 1
        }else {fin = center - 1}
    }
    return `Trouve: false, index: -1, etapes: ${etapes}`
}

console.log(rechercheDicho(nombres, 31))