function compterCaracteres(phrase){
    if (phrase === ""){
        return {}
    }
    trimmedPhrase = phrase.trim().toLowerCase()
    const counter = {}
    for (const letter of trimmedPhrase){
        if (letter === " ") continue;
        counter[letter] = (counter[letter] || 0) + 1;
    }
    return counter
}
console.log(compterCaracteres("Bonjour le monde"))

function caracteresPlusFrequents(phrase, n){
    if (phrase === "" || n <= 0){
        return {}
    }
    trimmedPhrase = phrase.trim().toLowerCase()
    const counter = {}
    for (letter of trimmedPhrase){
        if (letter === " ") continue;
        counter[letter] = (counter[letter] || 0) + 1
    }   
    const result = []
    const sortedByKey = Object.entries(counter).sort((a,b) => b[1] - a[1])
    for (let i = 0; i < n && i < sortedByKey.length; i++){
        result.push(sortedByKey[i][0]);
    }
    return result
}
console.log(caracteresPlusFrequents("Bonjour le monde", 13));

function sontAnagrammes(mot1, mot2){
    const m1 = mot1.toLowerCase().split(" ").join("");
    const m2 = mot2.toLowerCase().split(" ").join("");    
    if (m1.length !== m2.length){
        return false;
    }
    const lettres = {};

    for (letter of mot1.toLowerCase()){
        lettres[letter] = (lettres[letter] || 0) + 1
    } 
    for (letter of mot2.toLowerCase()){
        lettres[letter] = (lettres[letter] || 0) - 1
        if (lettres[letter] < 0){
            return false;
        }
    }
    return true
}

console.log(sontAnagrammes("chien", "niche")); 

function grouperParAnagrammes(listeMots){
    const groupes = {};
    for (const word of listeMots){
        const key = word.toLowerCase().split("").sort().join("")
        groupes[key] = groupes[key] || [];
        groupes[key].push(word)
    }
    const result = [];
    for (const key in groupes){
        result.push(groupes[key])
    }
    return result

}
console.log(grouperParAnagrammes(["eat", "tea", "tan", "ate", "nat", "bat"]));