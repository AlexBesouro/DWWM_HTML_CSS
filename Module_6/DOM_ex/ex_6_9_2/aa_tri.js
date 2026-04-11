const storedList = localStorage.getItem("my_products")
const storedProducts = storedList ? JSON.parse(storedList):[
    { nom: "Appareil Photo", prix: 550 },
    { nom: "Montre Connectée", prix: 199 },
    { nom: "Casque Audio", prix: 150 },
    { nom: "Ordinateur Portable", prix: 999 },
    { nom: "Clavier Mécanique", prix: 80 },
    { nom: "Souris Gamer", prix: 50 },
    { nom: "Soauris Gamer", prix: 50 }
]

const searchBar = document.querySelector("#search-bar")
const productGrid = document.querySelector("#product-grid")
const sortName = document.querySelector("#sort-name")
const sortPrice = document.querySelector("#sort-price")

function renderProducts(table){
    productGrid.innerHTML = ""
    table.forEach((product) => {
        const div = document.createElement("div")
        div.classList.add("card")
        const h3 = document.createElement("h3")
        const p = document.createElement("p")
        h3.textContent = product.nom
        p.textContent = `${product.prix} euro`
        div.append(h3)
        div.append(p)
        productGrid.append(div)
    })
}
searchBar.addEventListener("input", function(event){
    const input = searchBar.value.toLowerCase().trim()
    let products = storedProducts.filter((product) => product.nom.toLowerCase().includes(input))
    renderProducts(products)
})

sortName.addEventListener("click", function(event){
    const input = searchBar.value.toLowerCase().trim();
    const listToSort = storedProducts.filter(product => product.nom.toLowerCase().includes(input));
    const sortedAZ = [...listToSort].sort((a,b) => a.nom.localeCompare(b.nom))
    renderProducts(sortedAZ)
})
sortPrice.addEventListener("click", function(event){
    const input = searchBar.value.toLowerCase().trim();
    const listToSort = storedProducts.filter(product => product.nom.toLowerCase().includes(input));
    const sortedPrix = [...listToSort].sort((a,b) => a.prix - b.prix)
    renderProducts(sortedPrix)
})