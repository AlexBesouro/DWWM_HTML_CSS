function chargerUtilisateur() {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve({ nom: "Clara", age: 28 });
        }, 1000);
    });
}

function rechercherProduit(motCle) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (motCle.length >= 3) {
            resolve([
            { nom: "Clavier mecanique", prix: 89 },
            { nom: "Souris ergonomique", prix: 45 }
            ]);
        } else {
            reject("Le mot-cle doit contenir au moins 3 caracteres.");
        }
        }, 800);
    });
}

chargerUtilisateur()
    .then((data)=>console.log(`User: ${data.nom}, ${data.age} yo`))

rechercherProduit("abc")
    .then((data) => console.log(data))
    .catch((err)=> console.log(err))
    .finally(()=> console.log("Search finished"))
rechercherProduit("ab")
    .then((data) => console.log(data))
    .catch((err)=> console.log(err))
    .finally(()=> console.log("Search finished"))

//============================================================================

function dice(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            const diceRoll = Math.floor(Math.random()*6) + 1;
            if (diceRoll !== 6){
                resolve(diceRoll)
            }else reject("Sorry, you got 6, you lost!")
        }, 2500)
    })
}

dice()
    .then((value) => console.log(`Bravo, you win, you got ${value}`))
    .catch((err) => console.log(err))