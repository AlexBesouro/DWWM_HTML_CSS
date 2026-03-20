const NOM_OUTIL = "Ma Boîte à Outils JavaScript";
const VERSION = "1.0";
const AUTEUR = "Zhukov Oleksandr";
const ANNEE = 2026;
let nombreFonctions = 13;

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
    console.log(`1. convertirCelsiusEnFahrenheit(celsius) — retourne la valeur en °F
2. convertirFahrenheitEnCelsius(fahrenheit) — retourne la valeur en °C
3. verifierParite(nombre) — retourne "pair" ou "impair"
4. genererTableMultiplication(nombre) — affiche la table (1 à 10)
5. jouerFizzBuzz(limite) — affiche le FizzBuzz de 1 à limite
6. calculerMoyenne(notes)
7. trouverMaximum(nombres)
8. trouverMinimum(nombres)
9. filtrerNombresPairs(nombres)
10. creerContact(nom, email, telephone)
11. afficherContact(contact)
12. fusionnerContacts(contact1, contact2)
`);
}

function convertirCelsiusEnFahrenheit() {
    console.log("--- Convertisseur de température ---");
    const celsius = +prompt("Saisissez la temperature en Celsius: ");
    result = +((celsius * 9) / 5 + 32).toFixed(2);
    console.log(`${celsius}°C = ${result}°F`);
    return result;
}
function convertirFahrenheitEnCelsius() {
    console.log("--- Convertisseur de température ---");
    const fahrenheit = +prompt("Saisissez la temperature en Fahrenheit : ");
    const result = +(((fahrenheit - 32) * 5) / 9).toFixed(2);
    console.log(`${fahrenheit}°F = ${result}°C`);
    return result;
}
// convertirCelsiusEnFahrenheit();
// convertirFahrenheitEnCelsius();

// const montantTotal = 220;
// const pourcentage = 20;
// const montantPourcentage = (montantTotal * pourcentage) / 100;

// console.log("--- Calculateur de pourcentage ---");
// console.log(`${pourcentage}% de ${montantTotal} = ${montantPourcentage}`);

// const poids = 78;
// const taille = 1.8;
// const imc = +(poids / (taille * taille)).toFixed(2);
// const imcNormal = imc >= 18.5 && imc < 25;

// console.log("--- Calculateur d'IMC ---");
// console.log(`Poids : ${poids} kg | Taille : ${taille} m`);
// console.log(`IMC : ${imc}`);
// console.log(`Dans la plage normale (18.5 - 25) : ${imcNormal}`);

// --------------------------------------------------------------------------------------------------------------------------------------
function verifierParite() {
    console.log("--- Vérificateur de paires ---");
    const nombre = +prompt("Saisissez le nombre: ");
    const result = nombre % 2 === 0 ? "pair" : "unpair";
    console.log(`Votre numero est ${result}`);
}
// verifierParite();

// let agePersonne = 12;
// if (agePersonne >= 65) {
//     console.log("Categorie: senior");
// } else if (agePersonne >= 18) {
//     console.log("Categorie: adulte");
// } else if (agePersonne >= 12) {
//     console.log("Categorie: adolescent");
// } else {
//     console.log("Categorie: enfant");
// }

// let motDePasse = "gvsssg";
// if (motDePasse.length >= 10) {
//     console.log("Mot de passe: fort");
// } else if (motDePasse.length >= 6) {
//     console.log("Mot de passe: moyen");
// } else {
//     console.log("Mot de passe: faible");
// }
// nombreFonctions = nombreFonctions + 3;
// console.log(`\n${nombreFonctions} outil(s) disponible(s) dans la boîte à outils.`);

//--------------------------------------------------------------------------------------------------------------------------------------

function genererTableMultiplication() {
    console.log("--- Table Multiplication(1-10) ---");
    const nombre = +prompt("Saisissez le nombre entre 1 et 10: ");
    for (let i = 1; i <= 10; i++) {
        console.log(`${nombre} x ${i} = ${nombre * i}`);
    }
}
// genererTableMultiplication();

// console.log("=== COMPTEUR DE VOYELLES ===");
// const mot = "javascript";
// let nombreDeVoyelles = 0;
// for (let i = 0; i < mot.length; i++) {
//     if ("aeiou".includes(mot[i])) {
//         nombreDeVoyelles += 1;
//     }
// }
// console.log(`Nombre de voyelles: ${nombreDeVoyelles}`);
// console.log("=============================");

// console.log("=== MOTIF D'ÉTOILES ===");
// let sens = false;

// const hauteur = 5;
// if (sens) {
//     for (let i = 1; i < 6; i++) {
//         console.log("*".repeat(i));
//     }
// } else {
//     for (let i = 5; i > 0; i--) {
//         console.log("*".repeat(i));
//     }
// }
// console.log("=============================");
// console.log("=== MOTIF D'ÉTOILES CENTREE ===");
// const nombreDeLigne = 5;
// for (let i = 1; i <= nombreDeLigne; i++) {
//     const vides = " ".repeat(nombreDeLigne - i);
//     const etoiles = "*".repeat(2 * i - 1);
//     console.log(vides + etoiles);
// }
// console.log("=============================");

//--------------------------------------------------------------------------------------------------------------------------------------
function jouerFizzBuzz() {
    console.log("--- FizzBuzz ---");
    const nombre = +prompt("Saisissez le nombre: ");
    let x = 1;
    while (x <= nombre) {
        if (x % 3 === 0 && x % 5 === 0) {
            console.log("FizzBuzz");
        } else if (x % 3 === 0) {
            console.log("Fizz");
        } else if (x % 5 === 0) {
            console.log("Buzz");
        } else console.log(x);
        x += 1;
    }
}
// jouerFizzBuzz();

// console.log("===  Deviner un nombre  ===");
// let guess = "";
// const numero = Math.floor(Math.random() * 50) + 1;
// while (guess !== numero) {
//     guess = +prompt("Entrez votre numero SVP: ");
//     if (guess === numero) {
//         console.log("Félicitations, vous avez gagné.");
//     } else if (guess > numero) {
//         console.log("Désolé, le nombre auquel je pensais est plus petit.");
//     } else {
//         console.log("Désolé, le nombre auquel je pensais est plus grand.");
//     }
// }
// console.log("=============================");

// console.log("===  Calculer une puissance  ===");

// let cnt_1 = 1;
// while (cnt_1 <= 10) {
//     let res = 1;
//     for (let i = 1; i <= cnt_1; i++) {
//         res *= 2;
//     }
//     console.log(`2 en puissance ${cnt} = ${res}`);
//     cnt_1 += 1;
// }
// let cnt = 1;
// while (cnt <= 5) {
//     let res = 1;
//     for (let i = 1; i <= cnt; i++) {
//         res *= 3;
//     }
//     console.log(`3 en puissance ${cnt} = ${res}`);
//     cnt += 1;
// }

function calculerMoyenne(notes) {
    const x = notes.length;
    let somme = 0;
    for (let i = 0; i < x; i++) {
        somme += notes[i];
    }
    return +(somme / x).toFixed(2);
}

function trouverMaximum(nombres) {
    let max = nombres[0];
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] > max) {
            max = nombres[i];
        }
    }
    return max;
}
function trouverMinimum(nombres) {
    let min = nombres[0];
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] < min) {
            min = nombres[i];
        }
    }
    return min;
}

function filtrerNombresPairs(nombres) {
    const new_array = [];
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] % 2 === 0) {
            new_array.push(nombres[i]);
        }
    }
    return new_array;
}

function creerContact(nom, email, telephone) {
    const contact = {
        nom: nom,
        email: email,
        telephone: telephone,
        dateCreation: 2026,
    };
    return contact;
}
// console.log(creerContact("Alex", "alex@gmail.com", "01 23 45 67 89"));

function afficherContact(contact) {
    for (let cle in contact) {
        console.log(`${cle} : ${contact[cle]}`);
    }
}
// console.log(afficherContact({ nom: "Alex", email: "alex@gmail.com", telephone: "01 23 45 67 89", dateCreation: 2026 }));

// function fusionnerObjets(obj1, obj2) {
//     const new_obj = { ...obj1, ...obj2 };
//     return new_obj;
// }
// console.log(
//     fusionnerObjets(
//         { nom: "Alex", email: "alex@gmail.com", telephone: "01 23 45 67 89", dateCreation: 2026 },
//         { nom_nom: "Bla", email_email: "bla@gmail.com", telephone_phone: "01 23 45 67 89", dateCreation: 2026 },
//     ),
// );
function fusionnerContact(contact1, contact2) {
    const new_contact = { contact_1: contact1, contact_2: contact2 };
    return new_contact;
}
console.log(
    fusionnerContacts(
        { nom: "Alex", email: "alex@gmail.com", telephone: "01 23 45 67 89", dateCreation: 2026 },
        { nom: "Bla", email: "bla@gmail.com", telephone: "01 23 45 67 89", dateCreation: 2026 },
    ),
);
