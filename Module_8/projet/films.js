function loadFilms(){
    console.log("[films.js] Movies loading...")
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("[films.js] Done !");
            const films = [
            {id:1, title: "Inception", year: 2010, director: "Christopher Nolan", rating: 8.8, poster: "inception.jpg", genre: "SF" },
            {id:2, title: "Interstellar", year: 2014, director: "Christopher Nolan", rating: 8.7, poster: "interstellar.jpg", genre: "SF" },
            {id:3, title: "The Dark Knight", year: 2008, director: "Christopher Nolan", rating: 9.0, poster: "dark-knight.jpg", genre: "Comics" },
            {id:4, title: "Pulp Fiction", year: 1994, director: "Quentin Tarantino", rating: 8.9, poster: "pulp-fiction.jpg", genre: "Action" },
            {id:5, title: "Parasite", year: 2019, director: "Bong Joon-ho", rating: 8.5, poster: "Parasite.jpg", genre: "Action" }
        ];        
        resolve(films)
    }, 2000);
    })
}

let favoriteMovies = []
function ajouterAuxFavoris(favoris, film){
    if (favoris.some(movie => movie.id === film.id)){
        return;
    }else {
        favoriteMovies = [...favoris, film]
        return favoriteMovies
    }
}

function retirerDesFavoris(favoris, idFilm){
    return favoris.filter(film => film.id !== idFilm)
}


function mettreAJourFilm(favoris, idFilm, modifications){
    return favoris.map(film => film.id === idFilm ? {...film, ...modifications} : film)
}


export {loadFilms, favoriteMovies, ajouterAuxFavoris, retirerDesFavoris, mettreAJourFilm}