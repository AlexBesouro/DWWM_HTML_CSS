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
    const x = notes.length;
    let somme = 0;
    for (let i = 0; i < x; i++) {
        somme += notes[i];
    }
    const result = Number(somme / x).toFixed(2);
    return result;
}

function trouverMaximum() {
    const input = prompt("Saisissez les nombres séparés par des espaces:");
    const nombres = input.split(" ").map(Number);
    let max = nombres[0];
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] > max) {
            max = nombres[i];
        }
    }
    return max;
}

function trouverMinimum() {
    const input = prompt("Saisissez les nombres séparés par des espaces:");
    const nombres = input.split(" ").map(Number);
    let min = nombres[0];
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] < min) {
            min = nombres[i];
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
