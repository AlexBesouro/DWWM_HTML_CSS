
function renderCardsFilm(filmsList, htmlSelector){
    htmlSelector.innerHTML = ""
    filmsList.forEach(film => {
        const card = document.createElement("div")
        card.classList.add("film-card")
        const img = document.createElement("img")
        img.src = `./img/${film.poster}`
        img.alt = `Affiche de ${film.title}`
        const h3 = document.createElement("h3")
        h3.textContent = film.title
        const details = [
        { label: 'Annee', value: film.year, class: 'film-year' },
        { label: 'Realisateur', value: film.director, class: 'film-director' },
        { label: 'Note', value: `${film.rating}/10`, class: 'film-rating' }
        ];
        const fragment = document.createDocumentFragment()
        details.forEach(detail => {
            const p = document.createElement("p")
            p.classList.add(detail.class);
            p.textContent = `${detail.label}: ${detail.value}`
            fragment.append(p)
        })
        const button = document.createElement("button")
        button.classList.add("favorite")
        card.append(img,h3,fragment, button)
        htmlSelector.append(card)
    }) 
}


function filtredByGenre(filmList, filmGenre){
    return filmList.filter(film => film.genre.toLowerCase().includes(filmGenre.toLowerCase()))
}

export { renderCardsFilm, filtredByGenre }