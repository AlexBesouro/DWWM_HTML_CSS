function sommeMaxFenetre(tableau, k) {
    if (tableau.length < k) {
        return null;
    }

    let sommeCourante = 0;
    for (let i = 0; i < k; i++) {
        sommeCourante = sommeCourante + tableau[i];
    }
    let sommeMax = sommeCourante;

    for (let i = k; i < tableau.length; i++) {
        sommeCourante = sommeCourante + tableau[i] - tableau[i - k];

        if (sommeCourante > sommeMax) {
        sommeMax = sommeCourante;
        }
    }

    return sommeMax;
}


console.log(sommeMaxFenetre([2, 1, 5, 1, 3, 2], 3)); 