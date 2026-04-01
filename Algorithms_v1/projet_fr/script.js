

const notes = [12, 15, 8, 18, 14, 9, 16];


const sommeTableau = (tableau) =>  tableau.reduce((acc, note) => acc + note, 0)
const moyenneTableau = (tableau) => (tableau.reduce((acc, note) => acc + note, 0) / tableau.length).toFixed(2)
console.log(sommeTableau(notes));     
console.log(moyenneTableau(notes));    


const couleurs = ["rouge", "bleu", "rouge", "vert", "bleu", "rouge", "vert"];
function compterOccurrences(tableau, element){ 
    const count = tableau.reduce((acc, element) => {
    acc[element] = (acc[element] || 0) + 1;
    return acc
}, {});
    return count[element] || 0
}

console.log(compterOccurrences(couleurs, "rouge"));  
console.log(compterOccurrences(couleurs, "bleu"));   
console.log(compterOccurrences(couleurs, "jaune"));  


const personnes = [
    { nom: "Clara", ville: "Paris" },
    { nom: "Lucas", ville: "Lyon" },
    { nom: "Emma", ville: "Paris" },
    { nom: "Hugo", ville: "Marseille" },
    { nom: "Lea", ville: "Lyon" }
];
function grouperParPropriete (tableau, propriete){
    const parPropriete = tableau.reduce((subArray, obj) => { 
    const cle = obj[propriete]
        if (!subArray[cle]){
        subArray[cle] = []
    }
    subArray[cle].push(obj);
    return subArray
}, {});
    return parPropriete
}

console.log(grouperParPropriete(personnes, "ville"));

// --------------------------------------------------------------------------------------------------------------------------
const etudiants = [
    { nom: "Dupont", prenom: "Clara", ville: "Paris", note: 15, age: 22 },
    { nom: "Martin", prenom: "Lucas", ville: "Lyon", note: 12, age: 19 },
    { nom: "Durand", prenom: "Emma", ville: "Paris", note: 18, age: 25 },
    { nom: "Petit", prenom: "Hugo", ville: "Lyon", note: 14, age: 19 },
    { nom: "Robert", prenom: "Lea", ville: "Marseille", note: 16, age: 22 },
    { nom: "Albert", prenom: "Tom", ville: "Paris", note: 11, age: 20 },
    { nom: "Bernard", prenom: "Julie", ville: "Lyon", note: 17, age: 21 }
];

function trierParPropriete(tableau, propriete, ordre){
    return tableau.toSorted((a,b) => {
        if (typeof a[propriete] === "number"){
            return ordre.toLowerCase() === "croissant" ? a[propriete] - b[propriete]: b[propriete] - a[propriete];
        }else if (typeof a[propriete] === "string"){
            return ordre.toLowerCase() === "croissant" ? String(a[propriete]).localeCompare(String(b[propriete]), "fr", {sensitivity: "base"}): 
            String(b[propriete]).localeCompare(String(a[propriete]), "fr", {sensitivity: "base"});
        }else return "Something went wrong"
        }) 
}

// console.table(trierParPropriete(etudiants, "ville", "decroissant"))


const trierMultiCriteres = (tableau, criteres) => {
    return tableau.toSorted((a, b) => {

        for (let critere of criteres) {
        const { propriete, ordre } = critere;
        let result = 0;


        if (typeof a[propriete] === "number") {
            result = a[propriete] - b[propriete];
        } else {
            result = String(a[propriete]).localeCompare(String(b[propriete]), "fr", { sensitivity: "base" });
        }
        if (ordre.toLowerCase() === "decroissant") {
            result *= -1;
        }
        if (result !== 0) return result;
        }
        return 0; 
    });
};

console.table(trierMultiCriteres(etudiants, [
    { propriete: "ville", ordre: "croissant" }, 
    { propriete: "nom", ordre: "croissant" }
    ]));


const classement = (tableau, propriete) => {
    const trie = tableau.toSorted((a,b) => a[propriete] - b[propriete]);
    return trie.map((obj, i) => {return {...obj,rang: i + 1}});
}
console.table(classement(etudiants, "note"))

const topN = (tableau, propriete, n) => {
    const trie = tableau.toSorted((a,b) => b[propriete] - a[propriete]);
    return trie.map((obj, i) => {return {...obj,rang: i + 1}}).slice(0, n);
}
console.table(etudiants)
console.table(topN(etudiants, "note", 3))


// ============================== RECHERCHE ==================================
const fruits = ["pomme", "banane", "cerise", "datte", "figue", "kiwi", "mangue"];
const employes = [
    { id: 101, nom: "Alice", service: "dev" },
    { id: 205, nom: "Bob", service: "design" },
    { id: 312, nom: "Clara", service: "dev" },
    { id: 418, nom: "David", service: "rh" },
    { id: 527, nom: "Emma", service: "dev" }
];

const nombres = [3, 7, 11, 15, 18, 22, 26, 30, 35, 40, 44, 49, 53, 58, 62, 67, 71, 78, 84, 91];


function rechercheLineaire(tableau, valeur){
    let etapes = 0
    for (let i = 0; i < tableau.length; i++){
        etapes ++
        if (tableau[i] === valeur){
            return `Trouve: true, index: ${i}, etapes: ${etapes}`
        }
    }
    return `Trouve: false, index: ${-1}, etapes: ${etapes}`
}
// console.log(rechercheLineaire(fruits, "figue"));  // → 4
// console.log(rechercheLineaire(fruits, "ananas")); // → -1

function rechercheLineaireObjet(tableau, propriete, valeur){
    for (let i = 0; i < tableau.length; i++){
        if (tableau[i][propriete] === valeur){
            return tableau[i]
        }
    }
    return undefined
}
// console.log(rechercheLineaireObjet(employes, "nom", "Clasa"));
// console.log(rechercheLineaireObjet(employes, "nom", "Clarsa"));

function rechercheDichotomique(tableau, valeur){
    let first = 0;
    let last = tableau.length - 1;
    let etapes = 0
    while (first <= last){
        const middle = Math.floor((first + last) / 2)
        etapes ++
        if (tableau[middle] === valeur){
            return `Trouve: true, index: ${middle}, etapes: ${etapes}`
        }else if (tableau[middle] < valeur){
            first = middle + 1;
        }else {last = middle - 1}
    }
    return `Trouve: false, index: ${-1}, etapes: ${etapes}`
    }
    


console.log(rechercheDichotomique(nombres, 12)); 
console.log(rechercheDichotomique(nombres, 11)); 

function rechercheDichotomiqueObjet(tableau, propriete, valeur){
    let first = 0;
    let last = tableau.length - 1;
    while (first <= last){
        const middle = Math.floor((first + last) / 2)
        if (tableau[middle][propriete] === valeur){
            return tableau[middle]
        }else if (tableau[middle][propriete] < valeur){
            first = middle + 1;
        }else {last = middle - 1}
    }
    return undefined
}

console.log(rechercheDichotomiqueObjet(employes, "id", 418));
// console.log(rechercheDichotomiqueObjet(employes, "id", 41));

function comparerPerformance(limit){
    const arr = [];
    for (let i = 0; i < limit; i++) {
        arr.push(Math.floor(Math.random() * 1000000));
    }
    arr.sort((a, b) => a - b);
    const linear = rechercheLineaire(arr, arr[arr.length - 1]);
    const binary = rechercheDichotomique(arr, arr[arr.length - 1]);
    return `Resultats: recherche linear - ${linear}, recherche binary - ${binary}`
}
console.log(comparerPerformance(10000))