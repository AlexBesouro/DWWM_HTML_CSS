import {API_KEY, API_BASE} from "./config.js"


function buildMovieUrl(options = { type: 'popular' }) {
    const baseUrl = API_BASE;
    const params = new URLSearchParams({
        api_key: API_KEY,
        language: 'en-EN',
        page: 1
    });

    let endpoint = "/movie/popular";

    if (options.type === 'search' && options.query) {
        endpoint = "/search/movie";
        params.append('query', options.query);
    } 
    else if (options.type === 'discover') {
        endpoint = "/discover/movie";
        params.append('sort_by', 'popularity.desc');
        
        if (options.genre) params.append('with_genres', options.genre);
        if (options.rating) params.append('vote_average.gte', options.rating);
    }

    return `${baseUrl}${endpoint}?${params.toString()}`;
}

async function loadFilms(htmlSelector, url){
    htmlSelector.innerHTML = `<p class="loading">Loading...</p>`
    try{
        const request = await fetch(url)
        if (!request.ok){
            throw new Error(`HTTP error: ${request.status}`)
        }
        let moviesList = await request.json()
        moviesList = moviesList.results
        console.log(moviesList)
        return moviesList
    }catch(error){
        htmlSelector.innerHTML = `<p class="error">${error.message}</p>`;
    }
    
}


function loadFavotites(){
    const request = localStorage.getItem("my_favorite_movies")
    let myFavoriteMovies;
    try{
        myFavoriteMovies = (request && typeof request === 'string') 
        ? JSON.parse(request) 
        : [];
    }catch (error){
        console.error("Error parsing JSON:", error.message);
        myFavoriteMovies = [];
    }
    return myFavoriteMovies
    
}

function addToFavorites(favorites, film){
    if (favorites.some(movie => movie.id === film.id)){
        return favorites;
    }else {
        return [...favorites, film]
    }
}

function deleteFromFavorites(favoris, idFilm){
    return favoris.filter(film => film.id !== idFilm)
}


function updateFavorites(favoris, idFilm, modifications){
    return favoris.map(film => film.id === idFilm ? {...film, ...modifications} : film)
}


export {loadFilms, buildMovieUrl, loadFavotites, addToFavorites, deleteFromFavorites,updateFavorites}