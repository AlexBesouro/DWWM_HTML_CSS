// ======================================== FACTORIELLE ==========================================

`return 4 * factorielle(4 - 1) -> 
    return 3 * factorielle(3 -1) ->
        return 2 * factorielle(2 -1) ->
            return 1 -> ((((1) * 2) * 3) * 4)
`

function factorielle(n) {
    if (n < 0){
        return null
    }
    if (n <= 1){
        return 1
    }else return n * factorielle(n - 1)
}

console.log(factorielle(10))


// ======================================== FIBONACCI ==========================================
function fibonacci(n) {            
    if (n <= 1) { //  Base case
        return 1;
    }

    const result =  fibonacci(n - 1) + fibonacci(n - 2);
    
    return result
}
console.log(fibonacci(6));

const cache = {};

function fibMemo(n) {
    if (n <= 1) return n;
    
    // Если мы уже считали это число — просто берем из памяти
    if (cache[n]) return cache[n];

    // Если нет — считаем и записываем в кэш
    cache[n] = fibMemo(n - 1) + fibMemo(n - 2);
    return cache[n];
}

console.log(fibMemo(46));

// ======================================== FLATTEN ==========================================

function aplatir(tableau) {
  // On construit un nouveau tableau "plat"
    let resultat = [];

    for (const element of tableau) {
        // CAS DE BASE : l'element n'est pas un tableau → on l'ajoute directement
        if (!Array.isArray(element)) {
            // console.log(element)
            resultat.push(element);
            // console.log(resultat)
        }
        // CAS RECURSIF : l'element est un tableau → on l'aplatit recursivement
        else {
        const sousResultat = aplatir(element); // Appel recursif !
        resultat = resultat.concat(sousResultat);
        // console.log(resultat)
        }
    }

    return resultat;
}
console.log(aplatir([1, [2, [3, [4, [5, 3]]]]]));
// → [1, 2, 3, 4, 5] — 4 niveaux d'imbrication !

// ======================================== with objects ==========================================


function chercherCle(objet, cleRecherchee) {
  // Parcourir chaque propriete de l'objet
    for (const cle in objet) {
        // CAS DE BASE : on a trouve la cle !
        if (cle === cleRecherchee) {
        return objet[cle]; // On renvoie la valeur associee
        }

        // CAS RECURSIF : la valeur est un objet → on cherche dedans
        if (typeof objet[cle] === "object" && objet[cle] !== null && !Array.isArray(objet[cle])) {
        const resultat = chercherCle(objet[cle], cleRecherchee);
        if (resultat !== undefined) {
            return resultat; // Trouve dans un sous-objet !
        }
        }
    }

    // La cle n'a pas ete trouvee
    return undefined;
}

// Test avec un objet profondement imbrique
const entreprise = {
    nom: "TechCorp",
    adresse: {
        rue: "10 avenue de la Tech",
        ville: "Lyon",
        coordonnees: {
        latitude: 45.75,
        longitude: 4.85
        }
    },
    directeur: {
        prenom: "Clara",
        contact: {
        email: "clara@techcorp.com",
        telephone: "06 12 34 56 78"
        }
    }
};

console.log(chercherCle(entreprise, "ville"));      // → "Lyon"
console.log(chercherCle(entreprise, "email"));       