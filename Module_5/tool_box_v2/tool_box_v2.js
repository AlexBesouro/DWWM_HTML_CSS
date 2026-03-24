const NOM_OUTIL = "Ma Boîte à Outils JavaScript";
const VERSION = "2.0";
const AUTEUR = "Zhukov Oleksandr";
const ANNEE = 2026;
let nombreFonctions = 5;

console.log(`${NOM_OUTIL} ${VERSION}\nPar ${AUTEUR} - ${ANNEE}`);

console.log(`Tapez aide() pour voir les fonctions\n${nombreFonctions} fonction(s) disponible(s)`);

console.log(`
╔══════════════════════════════════════════╗
║   ${NOM_OUTIL} v${VERSION}
║   Par ${AUTEUR} — ${ANNEE}
╠══════════════════════════════════════════╣
║   Tapez aide() pour voir les fonctions
║   ${nombreFonctions} fonction(s) disponible(s)
╚══════════════════════════════════════════╝
`);

function aide() {
    console.log(`1. Calculer une moyenne
2. Trouver le maximum
3. Trouver le minimum
4. Convertir une note
5. Tester si un nombre est pair
0. Quitter`);
}

function calculerMoyenne() {
    const input = prompt("Saisissez les notes séparées par des espaces:");
    const notes = input.split(" ").map(Number);
    let somme = 0;
    notes.forEach((note) => (somme += note));
    const result = Number(somme / notes.length).toFixed(2);
    return result;
}

function trouverMaximum() {
    const input = prompt("Saisissez les nombres séparés par des espaces:");
    const nombres = input.split(" ").map(Number);
    let max = nombres[0];
    for (let nombre of nombres) {
        if (nombre > max) {
            max = nombre;
        }
    }
    return max;
}

function trouverMinimum() {
    const input = prompt("Saisissez les nombres séparés par des espaces:");
    const nombres = input.split(" ").map(Number);
    let min = nombres[0];
    for (let nombre of nombres) {
        if (nombre < min) {
            max = nombre;
        }
    }
    return min;
}

function verifierParite() {
    const nombre = Number(prompt("Saisissez le nombre:"));
    const result = nombre % 2 === 0 ? "pair" : "unpair";
}

function convertirNote() {
    const note = Number(prompt("Saisissez la note:"));
    let result;
    switch (true) {
        case note >= 16:
            result = "A - Excellent";
            break;
        case note >= 14:
            result = "B - Tres bien";
            break;
        case note >= 12:
            result = "C - Bien";
            break;
        case note >= 10:
            result = "D - Passable";
            break;
        case note >= 0:
            result = "F - Insuffisant";
            break;
        default:
            result = "Note est invalid";
            break;
    }
    return result;
}
function menu() {
    console.log("=== MA BOITE A OUTILS v2 ===");
    do {
        let response = Number(prompt("Sélectionnez une option (0-5): "));
        switch (response) {
            case 1:
                result = calculerMoyenne();
                console.log(result);
                break;
            case 2:
                result = trouverMaximum();
                console.log(result);
                break;
            case 3:
                result = trouverMinimum();
                console.log(result);
                break;
            case 4:
                result = convertirNote();
                console.log(result);
                break;
            case 5:
                result = verifierParite();
                console.log(result);
                break;
            case 0:
                return null;
            default:
                result = "Option est invalid";
                break;
        }

        response = prompt("Voulez-vous procéder à une autre opération? (oui/no): ");
        if (response) {
            response = response.toLowerCase().trim();
        }
    } while (response === "oui"); // Working while answer is yes/y

    console.log("C'est tout alors ! Au revoir");
    return result;
}

function compterOccurrences(tableau, valeur) {
    let compteur = 0;
    tableau.forEach((element) => {
        if (element === valeur) {
            compteur++;
        }
    });
    return compteur;
}

//-------------------------------------ARROW FUNC---------------------------------------------------------------------
// const estPair = n => n % 2 === 0;
// const valeurAbsolue = n => n < 0 ? -n : n;
// const celsiusEnFahrenheit = c => c * 9/5 + 32;
// const fahrenheitEnCelsius = f => (f - 32) * 5/9;
// const estNegatif = (n) => 0 > n;
// const carre = (n) => n ** 2;
// const cube = (n) => n ** 3;
// const pourcentage = (partie, total) => (partie * 100) / total;
// const initialiser = (prenom) => prenom[0].toUpperCase();

//-------------------------------------TABLEAU---------------------------------------------------------------------
afficherTableauFormate(["HTML", "CSS", "JavaScript"], "Mes competences");

function afficherTableauFormate(tableau, titre) {
    const largeur = 22;
    const bordureH = "─".repeat(largeur);

    // Centrer le titre
    const espaces = largeur - titre.length;
    const gauche = Math.floor(espaces / 2);
    const titreCentre = `${" ".repeat(gauche)}${titre}${" ".repeat(largeur - gauche - titre.length)}`;

    console.log(`┌${bordureH}┐`);
    console.log(`│${titreCentre}│`);
    console.log(`├${bordureH}┤`);

    // Afficher chaque element avec son numero
    tableau.forEach((element, index) => {
        const ligne = `${index + 1}. ${element}`;
        console.log(`│ ${ligne.padEnd(largeur - 1)}│`);
    });

    console.log(`└${bordureH}┘`);
    console.log(`(${tableau.length} elements)`);
}

//-------------------------------------MAP/FILTER---------------------------------------------------------------------
const nombres = [5, -3, 8, -1, 12, 0, -7, 3];

const personnes = [
    { nom: "Dupont", prenom: "Clara", age: 25 },
    { nom: "Martin", prenom: "Lucas", age: 17 },
    { nom: "Durand", prenom: "Emma", age: 30 },
    { nom: "Petit", prenom: "Leo", age: 15 },
    { nom: "Robert", prenom: "Julie", age: 22 },
];

const prixBruts = [9.999, 45.5, 120, 3.1, 79.995];

function doublerValeurs() {
    const input = prompt("Saisissez les nombres séparés par des espaces:");
    const double = input.map((element) => element * 2);
    return double;
}

const extraireNoms = (tableau) => tableau.map((personne) => `${personne.prenom} ${personne.nom}`);

const formaterSansArrondir = (tableau) =>
    tableau.map((prix) => {
        const coupe = Math.trunc(prix * 100) / 100;
        return `${coupe.toFixed(2)} EUR`;
    });

const garderPositifs = (tableau) => tableau.filter((nombre) => nombre > 0);

const filtrerParCritere = (tableau, ageMinimum) => tableau.filter((personne) => personne.age > ageMinimum);

const nomsDesMajeurs = (tableau) => tableau.filter((personne) => personne.age > 18).map((personne) => personne.prenom);
