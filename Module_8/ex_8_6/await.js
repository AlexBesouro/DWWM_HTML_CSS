function attendreEtRepondre(question) { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (!question) {
            reject(new Error("La question est vide !"));
        } else {
            resolve(`Reponse a "${question}" : 42`);
        }
        }, 100);
    });
}

// --- Code avec .then() a convertir ---

// Partie A : Appel simple
attendreEtRepondre("Quel est le sens de la vie ?")
    .then(reponse => {
        console.log(reponse);
    })
    .catch(erreur => {
        console.error(erreur.message);
    });

async function afficherReponse(question){
    try{ 
        const reponse = await attendreEtRepondre(question)
        console.log(reponse)
    } catch (error){
        console.error(error.message)
    }
    
}
afficherReponse("")
// Partie B : Appels enchaines
attendreEtRepondre("Premiere question")
    .then(reponse1 => {
        console.log(reponse1);
        return attendreEtRepondre("Deuxieme question");
    })
    .then(reponse2 => {
        console.log(reponse2);
        return attendreEtRepondre("Troisieme question");
    })
    .then(reponse3 => {
        console.log(reponse3);
        console.log("Toutes les questions ont recu une reponse !");
    })
    .catch(erreur => {
        console.error("Erreur :", erreur.message);
    });

async function afficherReponseB(question){
    try{ 
        const reponse1 = await attendreEtRepondre(question)
        const secondQuestion = "Second question"
        const reponse2 = await attendreEtRepondre(secondQuestion)
        const thirdQuestion = ""
        const reponse3 = await attendreEtRepondre(thirdQuestion)
        console.log(reponse1)
        console.log(reponse2)
        console.log(reponse3)
    } catch (error){
        console.error(error.message)
    }
    
}
afficherReponseB("Premier question")


function chargerCategorie(nom, delai) {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve({
            categorie: nom,
            films: [`${nom} Film 1`, `${nom} Film 2`, `${nom} Film 3`]
        });
        }, delai);
    });
}

async function loading(){
    try {
        console.time("total-time")
        const result = await Promise.all([
            chargerCategorie("Action", 800),
            chargerCategorie("Comedie", 500),
            chargerCategorie("Horreur", 1200),
            chargerCategorie("Science-Fiction", 600)
        ])
        console.log("All categories: ", result)
        console.timeEnd("total-time")
    }catch(error){
        console.error(error.message)
    }
}
loading()