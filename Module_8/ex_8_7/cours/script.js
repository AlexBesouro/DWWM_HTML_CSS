async function afficherUtilisateurs() {
    const conteneur = document.getElementById("liste-utilisateurs");

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
        }

        const utilisateurs = await response.json();

        // Construire le HTML a partir des donnees
        let html = "";
        for (const user of utilisateurs) {
        html += `
            <div class="carte-utilisateur">
            <h2>${user.name}</h2>
            <p>📧 ${user.email}</p>
            <p>📍 ${user.address.city}</p>
            <p>🏢 ${user.company.name}</p>
            </div>
        `;
        }

        conteneur.innerHTML = html;

    } catch (erreur) {
        conteneur.innerHTML = `<p class="erreur">Erreur : ${erreur.message}</p>`;
    }
}
afficherUtilisateurs()

const btnCharger = document.getElementById("btn-charger");
const resultats = document.getElementById("resultats");

btnCharger.addEventListener("click", async () => {
  // === ETAT 1 : LOADING ===
    resultats.innerHTML = `<p class="chargement">⏳ Chargement en cours...</p>`;
    btnCharger.disabled = true;  // Desactiver le bouton pendant le chargement

    const delay = new Promise(resolve => setTimeout(resolve, 3000));
    try {
        const [response] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/posts"),
            delay
        ]);

        if (!response.ok) {
        throw new Error(`Erreur ${response.status}`);
        }

        const posts = await response.json();

        // === ETAT 2 : SUCCESS ===
        let html = `<p>${posts.length} posts trouves :</p>`;
        // Afficher seulement les 10 premiers
        for (const post of posts.slice(0, 10)) {
        html += `
            <article class="post">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            </article>
        `;
        }
        resultats.innerHTML = html;

    } catch (erreur) {
        // === ETAT 3 : ERROR ===
        resultats.innerHTML = `
        <p class="erreur">
            ❌ Impossible de charger les posts : ${erreur.message}
        </p>
        `;
    } finally {
        btnCharger.disabled = false;  // Reactiver le bouton dans tous les cas
    }
});