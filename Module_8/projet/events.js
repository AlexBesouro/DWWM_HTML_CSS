import {loadFilms, buildMovieUrl, loadFavotites, addToFavorites, deleteFromFavorites,updateFavorites} from "./films.js";
import { renderCardsFilm } from "./dom.js";

    

function initialiserSearchEvenements(searchSection, filmsContainer){
    const searchForm = document.querySelector(".search-form");
    searchForm.addEventListener("submit", async (e)=>{
        e.preventDefault();
        const searchInput = document.querySelector("#movie-search")
        const query = searchInput.value.trim().toLowerCase()
        if (query){
            let url = buildMovieUrl({ type: 'search', query: query })
            let searchedFilms = await loadFilms(filmsContainer, url)
            renderCardsFilm(searchedFilms, filmsContainer)
        }
    })
    
    const searchButtons = document.getElementById("filtres");
    searchButtons.addEventListener("click", async (e)=> {
        if (e.target.tagName !== "BUTTON") return;
        const genre = e.target.dataset.genre;
        let filtredFilms;
        let url = buildMovieUrl()
        switch (genre){
            case "all":
                filtredFilms = await loadFilms(filmsContainer, url)
                break
            case "sf":
                url = buildMovieUrl({type: 'discover', genre: 878})
                filtredFilms = await loadFilms(filmsContainer, url)
                break
            case "fantasy":
                url = buildMovieUrl({type: 'discover', genre: 14})
                filtredFilms = await loadFilms(filmsContainer, url)
                break
            case "action":
                url = buildMovieUrl({type: 'discover', genre: 28})
                filtredFilms = await loadFilms(filmsContainer, url)
                break
        }
        renderCardsFilm(filtredFilms, filmsContainer)
    })


    const ratingDiv = document.querySelector(".rating-filter-container")
    const ratingInput = document.querySelector("#movie-rating")
    const ratingValue = document.querySelector("#rating-value")

    ratingInput.addEventListener("input", async (e) => {
        ratingValue.textContent = e.target.value
    })


    ratingDiv.addEventListener("submit", async (e) => {
        e.preventDefault()
        const rating = parseFloat(ratingInput.value)
        if (!isNaN(rating)) {
            const url = buildMovieUrl({type: 'discover', rating: rating})
            const filteredFilms = await loadFilms(filmsContainer, url)
            renderCardsFilm(filteredFilms, filmsContainer)

        }
    })
}
function initialiserFavoritesEvenements(loadedFilms, filmsContainer){

    let favoriteMovies = loadFavotites()
    function toggleFavorite(film, button) {
        const isFavorite = favoriteMovies.some(movie => movie.id === film.id)
        
        if (isFavorite) {
            favoriteMovies = deleteFromFavorites(favoriteMovies, film.id)
            button.classList.remove("active")
        } else {
            favoriteMovies = addToFavorites(favoriteMovies, film)
            button.classList.add("active")
        }
        
        localStorage.setItem("my_favorite_movies", JSON.stringify(favoriteMovies))
    }

    filmsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("favorite")) {
            const filmId = parseInt(e.target.dataset.filmId)
            const film = loadedFilms.find(m => m.id === filmId)
            
            if (film) {
                toggleFavorite(film, e.target)
            }
        }
    })
}

export {initialiserSearchEvenements, initialiserFavoritesEvenements}