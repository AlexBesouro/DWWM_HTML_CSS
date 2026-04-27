async function envoyerCommentaire(postId, nom, email, texte) {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
        postId: postId,
        name: nom,
        email: email,
        body: texte
        })
    });

    const commentaireCree = await response.json();
    console.log("Commentaire cree :", commentaireCree);
}

envoyerCommentaire(1, "Clara", "clara@email.com", "Super article !");
// → { postId: 1, name: "Clara", email: "clara@email.com", body: "Super arti