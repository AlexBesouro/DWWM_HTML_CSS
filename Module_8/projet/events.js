import {loadFilms}from "./films.js";
import { renderCardsFilm, filtredByGenre } from "./dom.js";

    

function initialiserSearchEvenements(searchSection, filmsContainer, getMovies){
    const searchForm = document.querySelector(".search-form");
    searchForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        const searchInput = document.querySelector("#movie-search")
        const query = searchInput.value.trim().toLowerCase()
        if (query){
            const films = getMovies() 
            const searchedFilms = films.filter(film => film.title.toLowerCase().includes(query))
            renderCardsFilm(searchedFilms, filmsContainer)
        }
    })
    
    const searchButtons = document.getElementById("filtres");
    searchButtons.addEventListener("click", (e)=> {
        if (e.target.tagName !== "BUTTON") return;
        const genre = e.target.dataset.genre;
        const films = getMovies() 
        let filtredFilms;
        switch (genre){
            case "all":
                filtredFilms = films
                break
            case "sf":
                filtredFilms = filtredByGenre("sf", films)
                break
            case "comics":
                filtredFilms = filtredByGenre("comics", films)
                break
            case "action":
                filtredFilms = filtredByGenre("action", films);
                break
        }
        renderCardsFilm(filtredFilms, filmsContainer)
    })
    const ratingDiv = document.querySelector(".rating-filter-container")
    const ratingInput = document.querySelector("#movie-rating")
    const ratingValue = document.querySelector("#rating-value")

    ratingInput.addEventListener("input", (e) => {
        ratingValue.textContent = e.target.value
    })


    ratingDiv.addEventListener("submit", (e) => {
        e.preventDefault()
        const rating = parseFloat(ratingInput.value)
        if (!isNaN(rating)) {
            const films = getMovies()
            const filteredFilms = films.filter(film => film.rating >= rating)
            renderCardsFilm(filteredFilms, filmsContainer)

        }
    })
}


export {initialiserSearchEvenements }