function trouverPaireSomme(tableauTrie, cible) {
    let gauche = 0;
    let droite = tableauTrie.length - 1;
    while (gauche < droite) {
        const somme = tableauTrie[gauche] + tableauTrie[droite];

        if (somme === cible) {

        return [tableauTrie[gauche], tableauTrie[droite]];
        } else if (somme < cible) {
        gauche = gauche + 1;
        } else {
        droite = droite - 1;
        }
    }
    return null;
}

const nombres = [1, 2, 4, 6, 8, 10];

console.log(trouverPaireSomme(nombres, 10)); 