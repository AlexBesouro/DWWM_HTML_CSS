import {renderCardsFilm} from "./dom.js"
import {films} from "./films.js"
import {initialiserSearchEvenements} from "./events.js"

const filmsContainer = document.querySelector(".films-container")
const searchSection = document.querySelector(".search-section")

renderCardsFilm(films, filmsContainer)
initialiserSearchEvenements(searchSection, filmsContainer)

//===================================================================
const configParDefaut = {
    theme: "clair",
    affichage: "grille",
    filmsParPage: 10,
    langue: "fr",
    triParDefaut: "popularite"
}

function loadDefaultConfig(){
    try {
        const storedConfig = localStorage.getItem("user_config");
        return JSON.parse(storedConfig) ?? {};
    } catch (error) {
        console.error("Error config:", error);
        return {}; 
    }
}

let config = {...configParDefaut,...loadDefaultConfig()}
console.log(config)


function mettreAJourConfig(configActuelle, nouvellesPrefs){
    const newConfig = {...configActuelle,...nouvellesPrefs}
    localStorage.setItem("user_config", JSON.stringify(newConfig))
    return newConfig
}
config = mettreAJourConfig(config, {theme: "dark"})
console.log(config)
//=======================================================================================================================
console.log("===================================================================")
function logAction(action, ...details){
    const header = action.toUpperCase()
    const detailsString = details.length > 0 ? details.join(" — ") : "no details";
    console.log(`${header} — Details : ${detailsString}`);
}
logAction("mettreAJourConfig", "metre a jour configs")

function filtrerFilms(films, ...criteres){
    return films.filter(film => {
        return criteres.every(critere => {
            const [type, valeur] = Object.entries(critere)[0];
            if (type === "genre"){
                return film.genre.includes(valeur);
            }
            if (type === "anneeMinimum"){
                return film.year >= valeur;
            }
            if (type === "noteMinimum"){
                return film.note >= valeur;
            }
            return true;
        });
    });
}

console.log(filtrerFilms(films, {anneeMinimum: 2008}))

export {filmsContainer}