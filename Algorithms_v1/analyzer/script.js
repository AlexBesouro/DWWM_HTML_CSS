const textPreloaded = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat, voluptatum architecto, suscipit natus veniam incidunt unde dolore eius ullam error molestias! Iure unde quidem explicabo earum necessitatibus esse consequatur quos? Assumenda maiores facilis necessitatibus ullam quia maxime architecto nam eveniet illo corporis laborum hic magni porro, quisquam dolorum autem sunt! Doloribus placeat nemo nam sapiente odit veritatis nihil quas. Neque dignissimos sit officia, reprehenderit est eaque perferendis eius adipisci quisquam necessitatibus doloremque placeat molestias numquam nesciunt soluta vero tenetur, dolore voluptatum harum. Debitis culpa doloremque vero animi ratione repellat vel at atque quidem, corrupti ipsum alias enim pariatur consectetur et mollitia amet voluptatibus dignissimos suscipit maiores. Nostrum, iure? Obcaecati neque molestias a nisi eius fuga non fugit esse. Eligendi doloribus, sequi nesciunt sed soluta cupiditate sapiente earum. A ipsam magni repellat, tenetur iste incidunt excepturi adipisci. Animi molestiae vitae laborum eaque aspernatur ab iure expedita magnam odit. Error sequi fuga deserunt architecto omnis, unde numquam eaque, id maiores magni autem quas aspernatur quam totam. Ad distinctio pariatur quibusdam quasi iusto repellendus doloribus nihil, numquam, molestias minus voluptatibus nam nesciunt. Nam quasi minus accusamus fugit. Necessitatibus id voluptas officiis aliquid libero voluptatum repudiandae eligendi obcaecati eum culpa numquam, corporis molestias."

function getText(){
    const userInput = prompt("Enter your text (min 200 words):")
    if (userInput === null || userInput.trim() === ""){
        console.log("Using preloaded text!")
        return textPreloaded
    }else return userInput
}
const text = getText()


function splitByWord(text){
    if (text.length === 0) return null
    return text
        .split(/\s+/) // delete all spaces
        .map(word => 
            word.replace(/[^a-zA-Z0-9]/, "") // all except characters and numbers replacing with ""
        )
        .filter(word => word.length > 0);
}

function splitByChar(text){
    if (text.length === 0) return null
    const chars = []
    for (let i = 0; i < text.length; i++){
            if (!/[a-zA-Z0-9]/.test(text[i])) continue;
            else chars.push(text[i])
        } 
    return chars
}
console.log(splitByChar(textPreloaded))

function countTextElement(text, element){
    const elementTrimmed = element.trim().toLowerCase()
    
    if (elementTrimmed === "character"){
        const chars = splitByChar(text)
        return chars.length
    }else if (elementTrimmed === "word"){
        const words = splitByWord(text)
        return words.length
    }else if (elementTrimmed === "sentence"){
        const sentences = text.split(/[.!?]\s+/)
        return sentences.length
    }else return "Chose the right element!"
    
}

console.log(countTextElement(textPreloaded, "character"))
console.log(countTextElement(textPreloaded, "word"))
console.log(countTextElement(textPreloaded, "sentence"))

function wordsStatistic(text){
    const words = splitByWord(text)
    if (words.length === 0) return null;
    const statistic = words.reduce((acc, val) => {
        return {
            "sumLength": acc.sumLength + val.length,
            "longest": val.length > acc.longest.length ? val: acc.longest,
            "shortest": val.length < acc.shortest.length ? val: acc.shortest
        }
    }, {"sumLength": 0, "longest": words[0], "shortest": words[0]});
    statistic["average"] = Math.round((statistic.sumLength / words.length) * 100) / 100
    statistic.longest = [statistic.longest, statistic.longest.length]
    statistic.shortest = [statistic.shortest, statistic.shortest.length]
    return statistic
}
console.log(wordsStatistic(textPreloaded))

function frequencyWord(text){
    const words = splitByWord(text);
    const countedWords = {}
    for (const word of words){
        countedWords[word] = (countedWords[word] || 0) + 1
    }
    const entries = Object.entries(countedWords);
    return entries.sort((a, b) => b[1] - a[1]).slice(0,10);
}

console.log(frequencyWord(textPreloaded))

function frequencyChar(text){
    const chars = splitByChar(text);
    const countedChar = {}
    for (const char of chars){
        countedChar[char] = (countedChar[char] || 0) + 1
    }
    const entries = Object.entries(countedChar);
    return entries.sort((a, b) => b[1] - a[1]).slice(0,10);
}

console.log(frequencyChar(textPreloaded))

function findTheWord(text){
    // const input = prompt("Enter the word you searching:").trim().toLowerCase()
    const input = ""
    if (!input) return "Input the proper word"
    const words = splitByWord(text)
    const indexes = []
    const stats = {}
    for (let i = 0; i < words.length; i++){
        if (words[i].toLowerCase() === input){
            indexes.push(i)
        }
    }
    if (indexes.length > 0){
        stats["word"] = input;
        stats["indexes"] = indexes
        stats["count"] = indexes.length
        return stats
    }
    return "Word is not found"
}
console.log(findTheWord(textPreloaded))

function sortingWords(text){
    const words = splitByWord(text)
    const alphabeticSort = words.toSorted((a,b) => a.localeCompare(b, "fr", {sensitivity: "base"}))
    const lengthSort = words.toSorted((a,b) => b.length - a.length)
    return {"alphabeticSort": alphabeticSort.slice(0,10), "lengthSort.slice": lengthSort.slice(0,10)}

}
console.log(sortingWords(textPreloaded))