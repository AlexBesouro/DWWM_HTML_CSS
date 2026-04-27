import {renderCardsFilm} from "./dom.js"
import {loadFilms, buildMovieUrl} from "./films.js"
import {API_KEY, API_BASE} from "./config.js"

import {initialiserSearchEvenements, initialiserFavoritesEvenements} from "./events.js"



const filmsContainer = document.querySelector(".films-container")
const searchSection = document.querySelector(".search-section")


let movies = await loadFilms(filmsContainer, buildMovieUrl())
renderCardsFilm(movies, filmsContainer)
    

initialiserSearchEvenements(searchSection, filmsContainer)
initialiserFavoritesEvenements(movies, filmsContainer)

//===================================================================
// const configParDefaut = {
//     theme: "clair",
//     affichage: "grille",
//     filmsParPage: 10,
//     langue: "fr",
//     triParDefaut: "popularite"
// }

// function loadDefaultConfig(){
//     try {
//         const storedConfig = localStorage.getItem("user_config");
//         return JSON.parse(storedConfig) ?? {};
//     } catch (error) {
//         console.error("Error config:", error);
//         return {}; 
//     }
// }

// let config = {...configParDefaut,...loadDefaultConfig()}
// console.log(config)


// function mettreAJourConfig(configActuelle, nouvellesPrefs){
//     const newConfig = {...configActuelle,...nouvellesPrefs}
//     localStorage.setItem("user_config", JSON.stringify(newConfig))
//     return newConfig
// }
// config = mettreAJourConfig(config, {theme: "dark"})
// console.log(config)
// //

