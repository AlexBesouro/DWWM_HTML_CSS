import { loadFavotites } from "./films.js";

function renderCardsFilm(filmsList, htmlSelector){
    htmlSelector.innerHTML = ""
    const favoriteMovies = loadFavotites()
    
    for (const film of filmsList ?? []) {
        const card = document.createElement("div")
        card.classList.add("film-card")
        
        const img = document.createElement("img")
        const posterSrc = film?.poster_path ? `https://image.tmdb.org/t/p/w500${film.poster_path}` : "./img/placeholder.png"
        img.src = posterSrc
        img.alt = `Affiche de ${film?.title ?? 'Film'}`
        
        const h3 = document.createElement("h3")
        h3.textContent = film?.title ?? "No title"
        
        const fragment = document.createDocumentFragment()
        
        const year = film?.release_date?.slice(0, 4) ?? "N/A"
        const rating = film?.vote_average ? `${film.vote_average.toFixed(1)}/10` : "N/A"
        
        const details = [
            { label: 'Year', value: year, class: 'film-year' },
            { label: 'Note', value: rating, class: 'film-rating' }
        ]
        
        for (const detail of details) {
            const p = document.createElement("p")
            p.classList.add(detail?.class ?? '')
            p.textContent = `${detail.label}: ${detail.value}`
            fragment.append(p)
        }
        
        const button = document.createElement("button")
        button.classList.add("favorite")
        button.dataset.filmId = film.id
        
        
        if (favoriteMovies.some(fav => fav.id === film.id)) {
            button.classList.add("active")
        }
        
        card.append(img, h3, fragment, button)
        card.dataset.filmId = film.id
        htmlSelector.append(card)
    }
}


export { renderCardsFilm }