const nombres = [4, 8, 15, 16, 23, 42];
const mots = ["Bonjour", " ", "tout", " ", "le", " ", "monde", " !"];

const somme = nombres.reduce((acc, number) => acc + number, 0)
console.log(somme)
const produit = nombres.reduce((acc, number) => acc * number, 1)
console.log(produit)
const max = nombres.reduce((acc, number) => number > acc ? number:acc)
console.log(max)

const phrase = mots.reduce((acc, word) => acc + word, "")
console.log(phrase)

//------------------------------------------------------------------------------------------------------------------

const ventes = [
  { produit: "Clavier", categorie: "Informatique", prix: 49.99 },
  { produit: "Souris", categorie: "Informatique", prix: 29.99 },
  { produit: "Cahier", categorie: "Papeterie", prix: 3.50 },
  { produit: "Ecran", categorie: "Informatique", prix: 249.99 },
  { produit: "Stylo", categorie: "Papeterie", prix: 1.99 },
  { produit: "Casque", categorie: "Audio", prix: 79.99 },
  { produit: "Enceinte", categorie: "Audio", prix: 149.99 },
  { produit: "Classeur", categorie: "Papeterie", prix: 5.99 }
];

const cat = ventes.reduce((acc, obj) => acc + obj.prix, 0).toFixed(2)
console.log(cat)
const prixMoyen = (ventes.reduce((acc, obj) => acc + obj.prix, 0) / ventes.length).toFixed(2)
console.log(prixMoyen)

const produitParCategorie = ventes.reduce((acc, obj) => {
    const cle = obj.categorie; 
    if (!acc[cle]){
        acc[cle] = 0
    }
    acc[cle] += 1;
    return acc
}, {});

console.log(produitParCategorie)

const produitParNom = ventes.reduce((acc, obj) => {
    const cle = obj.categorie; 
    if (!acc[cle]){
        acc[cle] = []
    }
    acc[cle].push(obj.produit);
    return acc
}, {});

console.log(produitParNom)

const plusCher = ventes.reduce((acc, obj) => obj.prix > acc.prix ? obj : acc, ventes[0])
console.log(`Le plus cher : ${plusCher.produit} (${plusCher.prix} EUR)`)

