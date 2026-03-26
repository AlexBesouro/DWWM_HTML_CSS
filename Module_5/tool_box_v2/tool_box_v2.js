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

// ----------------------------------------------------------------------------------------------------------------------------

const trouverParNom = (tableau, nom) => tableau.find((obj) => obj.nom === nom);
const trouverIndex = (tableau, valeur) => tableau.find((obj) => obj === valeur);
const contientNegatif = (tableau) => tableau.some((element) => element < 0);
const tousPositifs = (tableau) => tableau.every((element) => element > 0);
const tousComplets = (tableau) => tableau.every((contact) => contact.nom && contact.email && contact.telephone);
function trierNombres(tableau, ordre) {
    if (ordre === "croissant") {
        tableau.sort((a, b) => a - b);
    } else if (ordre === "decroissant") {
        tableau.sort((a, b) => b - a);
    } else {
        return "Ordre est non défini";
    }
    return tableau;
}
// ----------------------------------------------------------------------------------------------------------------------------
const compterMots = (text) => text.trim().split(" ").length;
function capitaliserMots(text) {
    let result = text.trim().split(" ");
    result = result.map((mot) => mot[0].toUpperCase() + mot.slice(1).toLowerCase()).join(" ");
    return result;
}
const inverserChaine = (texte) => texte.split("").reverse().join("");
const nettoyerTexte = (texte) =>
    texte
        .toLowerCase()
        .trim()
        .split(" ")
        .filter((str) => str != "")
        .join(" ");
// ----------------------------------------------------------------------------------------------------------------------------

// const contacts = [
//     {
//         prenom: "Thomas",
//         nom: "Dubois",
//         telephone: "+33 6 12 34 56 78",
//         email: "thomas.dubois@exemple.com",
//         ville: "Paris",
//     },
//     {
//         prenom: "Léa",
//         nom: "Moreau",
//         telephone: "+33 6 98 76 54 32",
//         email: "lea.moreau@exemple.com",
//         ville: "Lyon",
//     },
//     {
//         prenom: "Lucas",
//         nom: "Bernard",
//         telephone: "+33 7 11 22 33 44",
//         email: "lucas.bernard@exemple.com",
//         ville: "Marseille",
//     },
// ];

const ajouterContact = (prenom, nom, telephone, email, ville) =>
    contacts.push({ prenom: prenom, nom: nom, telephone: telephone, email: email, ville: ville });

// ajouterContact("Hugo", "Martin", "06 55 44 33 22", "hugo@email.com", "Bordeaux");
const afficherContacts = () => {
    console.log("=== CARNET DE CONTACTS (4 contacts) ===");
    contacts.forEach((contact, index) =>
        console.log(`${index + 1}. ${contact.prenom} ${contact.nom} - ${contact.ville} - ${contact.telephone}`),
    );
};

const afficherDetailsContact = (index) => console.log(contacts[index]);

function compterContactsParVille(ville) {
    let cnt = 0;
    for (contact of contacts) {
        if (contact.ville === ville) {
            cnt += 1;
        }
    }
    return `${cnt} cotact(s) a ${ville}`;
}
// ----------------------------------------------------------------------------------------------------------------------------
const contactList = [
    { nom: "Dupont", prenom: "Clara", ville: "Paris", age: 28, email: "clara.dupont@mail.fr" },
    { nom: "Martin", prenom: "Lucas", ville: "Lyon", age: 35, email: "lucas.martin@mail.fr" },
    { nom: "Bernard", prenom: "Emma", ville: "Paris", age: 22, email: "emma.bernard@mail.fr" },
    { nom: "Petit", prenom: "Hugo", ville: "Marseille", age: 41, email: "hugo.petit@mail.fr" },
    { nom: "Durand", prenom: "Lea", ville: "Lyon", age: 29, email: "lea.durand@mail.fr" },
    { nom: "Leroy", prenom: "Tom", ville: "Paris", age: 19, email: "tom.leroy@mail.fr" },
    { nom: "Moreau", prenom: "Julie", ville: "Lyon", age: 33, email: "julie.moreau@mail.fr" },
    { nom: "Roux", prenom: "Nathan", ville: "Marseille", age: 26, email: "nathan.roux@mail.fr" },
];
const rechercherContact = (contacts, nom) => {
    const contactRecherche = contacts.find((contact) => contact.nom.toLowerCase() === nom.toLowerCase());
    if (contactRecherche === undefined) {
        return "Contact non trouve";
    }
    return contactRecherche;
};

const filtrerParVille = (contacts, ville) => {
    const villeRecherche = contacts.filter((contact) => contact.ville.toLowerCase() === ville.toLowerCase());
    return villeRecherche;
};

const trierParAge = (contacts, ordre) => {
    if (ordre === "croissant") {
        contacts.sort((a, b) => a.age - b.age);
    } else if (ordre === "decroissant") {
        contacts.sort((a, b) => b.age - a.age);
    }
    console.log("Ordre est mal defini");
};

const afficherAnnuaire = (contacts) => {
    contacts.sort((a, b) => a.nom.localeCompare(b.nom, "fr"));
    contacts.forEach((contact) =>
        console.log(`${contact.nom} ${contact.prenom} - ${contact.ville} (${contact.age} ans)`),
    );
};

const statistiquesContacts = (contacts) => {
    let somme = 0;
    for (const contact of contacts) {
        somme += contact.age;
    }
    let ageMoyen = somme / contacts.length;
    const villes = contacts.map((contact) => contact.ville);
    const uniqueVilles = [...new Set(villes)].join(", ");
    console.log(`Total contacts: ${contacts.length}, Age moyen : ${ageMoyen.toFixed(1)} ans, Villes: ${uniqueVilles}`);
};
//------------------------------------------------------------------------------------------------------------------------------

function triBullesSimplifie(arrayNumero) {
    if (!arrayNumero) {
        return "Votre tableau n'est pas valide";
    } else if (arrayNumero.length === 1) {
        return arrayNumero;
    }
    for (let tourExt = 0; tourExt < arrayNumero.length - 1; tourExt++) {
        for (let tourInt = 0; tourInt < arrayNumero.length - 1 - tourExt; tourInt++) {
            if (arrayNumero[tourInt] > arrayNumero[tourInt + 1]) {
                const temp = arrayNumero[tourInt];
                arrayNumero[tourInt] = arrayNumero[tourInt + 1];
                arrayNumero[tourInt + 1] = temp;
            }
        }
    }
    return arrayNumero;
}

const motLePlusLong = (stringMots) => {
    if (!stringMots && !stringMots.trim()) {
        return "Votre phrase n'est pas valide";
    }
    const arrayMots = stringMots.split(" ");
    let plusLong = arrayMots[0];
    for (const mot of arrayMots) {
        if (mot.length > plusLong.length) {
            plusLong = mot;
        }
    }
    return plusLong;
};

function statistiquesCollection(collection, propriete) {
    const notes = collection.map((element) => element[propriete]);
    console.log(notes);
    let somme = 0;
    for (const element of notes) {
        somme += element;
    }
    const moyen = (somme / notes.length).toFixed(2);
    let max = notes[0];
    let min = notes[0];
    for (const element of notes) {
        if (element > max) {
            max = element;
        } else if (element < min) {
            min = element;
        }
    }
    return { min: min, max: max, moyenne: moyen };
}

const supprimerDoublons = (arrayNumero) =>
    arrayNumero.filter((element, index) => arrayNumero.indexOf(element) === index);
