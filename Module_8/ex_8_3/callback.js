function simulateRequest(url, delai, c){
    console.log(`Request send to: ${url}`)
    setTimeout(()=>{
        const response = {
            url: url,
            status: 200,
            data: `Data of ${url}`
        };
        c(response)
    }, delai);
}

console.log("======START=====")
simulateRequest("/api/films", 2000, (cb) => {
    console.log(`Got from ${cb.url}: `, cb.data)
})
simulateRequest("/api/actors", 1000, (cb) => {
    console.log(`Got from ${cb.url}: `, cb.data)
})
simulateRequest("/api/directors", 3000, (cb) => {
    console.log(`Got from ${cb.url}: `, cb.data)
})
console.log("======FINISH=====")
