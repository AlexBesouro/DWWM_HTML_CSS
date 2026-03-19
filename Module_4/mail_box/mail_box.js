const NOM_OUTIL = "Ma Boîte à Outils JavaScript";
const VERSION = "1.0";
const AUTEUR = "Zhukov Oleksandr";
const ANNEE = 2026;

let nombreFonctions = 0;
console.log(`${NOM_OUTIL} ${VERSION}\nPar ${AUTEUR} - ${ANNEE}`);

console.log(`Tapez aide() pour voir les fonctions\n${nombreFonctions} fonction(s) disponible(s)`);

// console.log(`
// ╔══════════════════════════════════════════╗
// ║   ${NOM_OUTIL} v${VERSION}
// ║   Par ${AUTEUR} — ${ANNEE}
// ╠══════════════════════════════════════════╣
// ║   Tapez aide() pour voir les fonctions
// ║   ${nombreFonctions} fonction(s) disponible(s)
// ╚══════════════════════════════════════════╝
// `);

const temperatureCelsius = 22;
const temperatureFahrenheit = (temperatureCelsius * 9) / 5 + 32;

console.log("--- Convertisseur de température ---");
console.log(`${temperatureCelsius}°C = ${temperatureFahrenheit}°F`);

const montantTotal = 220;
const pourcentage = 20;
const montantPourcentage = (montantTotal * pourcentage) / 100;

console.log("--- Calculateur de pourcentage ---");
console.log(`${pourcentage}% de ${montantTotal} = ${montantPourcentage}`);

const poids = 78;
const taille = 1.8;
const imc = +(poids / (taille * taille)).toFixed(2);
const imcNormal = imc >= 18.5 && imc < 25;

console.log("--- Calculateur d'IMC ---");
console.log(`Poids : ${poids} kg | Taille : ${taille} m`);
console.log(`IMC : ${imc}`);
console.log(`Dans la plage normale (18.5 - 25) : ${imcNormal}`);

nombreFonctions = nombreFonctions + 3;
console.log(`\n${nombreFonctions} outil(s) disponible(s) dans la boîte à outils.`);

// --------------------------------------------------------------------------------------------------------------------------------------

let nombreAVerifier = 235431231;
console.log(nombreAVerifier % 2 === 0 ? "pair" : "unpair");

let agePersonne = 12;
if (agePersonne >= 65) {
    console.log("Categorie: senior");
} else if (agePersonne >= 18) {
    console.log("Categorie: adulte");
} else if (agePersonne >= 12) {
    console.log("Categorie: adolescent");
} else {
    console.log("Categorie: enfant");
}

let motDePasse = "gvsssg";
if (motDePasse.length >= 10) {
    console.log("Mot de passe: fort");
} else if (motDePasse.length >= 6) {
    console.log("Mot de passe: moyen");
} else {
    console.log("Mot de passe: faible");
}
nombreFonctions = nombreFonctions + 3;
console.log(`\n${nombreFonctions} outil(s) disponible(s) dans la boîte à outils.`);
