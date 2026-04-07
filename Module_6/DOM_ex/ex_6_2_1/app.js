console.log("=== Exploration du DOM ===");
console.log("Titre de la page :", document.title);
console.log("Body :", document.body);
console.log("URL :", document.URL);

console.log("Nombre de liens: ", document.links.length)
console.log("Nombre d'images :", document.images.length)
console.log("Premier lien :",  document.links[0])

const compteur = document.querySelector("a");
console.log(compteur);
const allLinks = document.querySelectorAll("a");
console.log(allLinks);
console.log(allLinks[1]);

const paragraphe = document.querySelector("p");
console.log(paragraphe)
const paragraphe_1 = document.querySelectorAll("p");
console.log(paragraphe_1[2])

paragraphe_1[2].textContent = "Nouveau <strong>texte</strong>";

// innerHTML — modifie le HTML (peut inserer des balises)
paragraphe.innerHTML = "<strong>Texte en gras</strong>";