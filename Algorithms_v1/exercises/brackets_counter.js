function isBracket(bracket){
    if (bracket === "("){
        return 1;
    }else if  (bracket === ")"){
        return -1
    } else return false;
}
function bracketCounter(text){
    let pile = 0;
    for (const i of text){
        if (isBracket(i)){
            pile += isBracket(i);
            if (pile < 0){
                return false
            }
        }
    }
    if (pile != 0) return false;
    return true
}

console.log(bracketCounter("((a + b))"));             // → true
console.log(bracketCounter("(a + b) * (c - d)"));    // → true
console.log(bracketCounter("((a + b)"));              // → false (non fermee)
console.log(bracketCounter(")("));                    // → false (fermante avant ouvrante)
console.log(bracketCounter(""));                      // → true (vide = equilibre)
console.log(bracketCounter("abc + def"));             // → true (pas de parentheses)
console.log(bracketCounter("((()))"));                // → true (imbrication correcte)
console.log(bracketCounter("(()")); 