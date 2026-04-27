const btnCharger = document.getElementById("btn-charger")
const contenu = document.getElementById("contenu")

function createHTML(posts){
    let html = `<h2>${posts.length} posts showing:</h2>`
    for (const post of posts){
        html += `
        <div class="post" data-id="${post.id}" style="cursor: pointer;">
            <h3>${post.title}</h3>
        </div>`;
    }
    contenu.innerHTML = html
}
async function loadPosts() {
    contenu.innerHTML = `<p class="loading">Loading</p>`
    btnCharger.disabled = true
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!response.ok){
            throw new Error(`HTTP Error: ${response.status}`)
        }
        const posts = await response.json()
        createHTML(posts.slice(0,20))
    }catch (error){
        contenu.innerHTML = `<p class="error">${error.message}</p>`;
    }finally{
        btnCharger.disabled = false
    }
}
btnCharger.addEventListener("click", loadPosts)

async function showDetails(id) {
    contenu.innerHTML = `<p class="loading">Loading</p>`;
    try{
        const [postResponse, commentsResponse] = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        ]);
        if(!postResponse.ok || !commentsResponse.ok){
            throw new Error("Something went wrong!(")
        } 
        const post = await postResponse.json()
        const comments = await commentsResponse.json()
        console.log(comments)

        let html = `
            <button id="btn-retour">← Go back to list</button>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <h3>${comments.length} comments :</h3>
            `;
        for (const comment of comments){
            html += `
                <div class="comment">
                <strong>${comment.name}</strong> (${comment.email})
                <p>${comment.body}</p>
                </div>
            `;
        }
        contenu.innerHTML = html
        document.getElementById("btn-retour").addEventListener("click", loadPosts);
    }catch (error){
        contenu.innerHTML = `<p class="error">${error.message}</p>`;
    }
}
contenu.addEventListener("click", (e) =>{
    const postElement = e.target.closest("[data-id]");
    if (postElement){
        const id = postElement.dataset.id
        showDetails(id)
    }
})
