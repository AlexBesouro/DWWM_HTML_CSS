const storedList = localStorage.getItem("my_countrys")
const storedCountryList = storedList ? JSON.parse(storedList) : [
    "France", "Allemagne", "Espagne", "Italie", "Portugal", "Belgique", "Suisse", "Canada"
] 

const searchBar = document.querySelector("#search-bar")
const countryList = document.querySelector("#country-list")

function renderCountrys(){
    countryList.innerHTML = ""
    const searchingCountry = searchBar.value.toLowerCase().trim()
    let listToRender = storedCountryList.filter((country) => country.toLowerCase().includes(searchingCountry))
    listToRender.forEach((country) => {
        const li = document.createElement("li")
        li.textContent = country
        countryList.append(li)
    })
}
searchBar.addEventListener("input", renderCountrys)