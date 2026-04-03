function letterOffset(letter, offset){
    if (!/[a-zA-Z]/.test(letter)){
        return letter;
    }
    const base = letter >= "a" && letter <= "z" ? ("a").charCodeAt() : "A".charCodeAt();
    const position = (letter.charCodeAt() - base);
    const newPosition = ((position + offset) % 26 + 26) % 26;
    return String.fromCharCode(newPosition + base)
}
    
function cesar(text,offset){
    const result = []
    for (const letter of text){
        result.push(letterOffset(letter, offset))
    }
    return result.join("")
}

console.log(cesar("Bonjour ebat", 5))