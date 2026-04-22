import {films}from "./films.js";
import { renderCardsFilm, filtredByGenre } from "./dom.js";

    
// }

function initialiserSearchEvenements(searchSection, filmsContainer){
    const searchForm = document.querySelector(".search-form");
    searchForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        const searchInput = document.querySelector("#movie-search")
        const query = searchInput.value.trim().toLowerCase()
        if (query){
        const searchedFilms = films.filter(film => film.title.toLowerCase().includes(query))
        renderCardsFilm(searchedFilms, filmsContainer)
    };
    })
    
    const searchButtons = document.getElementById("filtres");
    searchButtons.addEventListener("click", (e)=> {
        if (e.target.tagName !== "BUTTON") return;
        const genre = e.target.dataset.genre;
        let filtredFilms;
        switch (genre){
            case "all":
                filtredFilms = films;
                break
            case "sf":
                filtredFilms = filtredByGenre(films, "sf")
                break
            case "comics":
                filtredFilms = filtredByGenre(films,"comics")
                break
            case "action":
                filtredFilms = filtredByGenre(films, "action");
                break
        }
        renderCardsFilm(filtredFilms, filmsContainer)
    })

}


export {initialiserSearchEvenements }