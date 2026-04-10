const storedFilms = localStorage.getItem("mes_films");
const films = storedFilms ? JSON.parse(storedFilms) : [
    { titre: "Inception", annee: 2010 }, 
    { titre: "Interstellar", annee: 2014 }, 
    { titre: "The Dark Knight", annee: 2008 }
];

const listeFilms = document.getElementById("liste-films")

function renderFilms(){
    listeFilms.innerHTML = ""
    films.map((film) => {
        const li =document.createElement("li")
        li.textContent = `${film.titre} (${film.annee})`
        listeFilms.append(li)
    })
}
renderFilms();
films.push({ titre: "Film", annee: 2000 })
localStorage.setItem("mes_films", JSON.stringify(films))

