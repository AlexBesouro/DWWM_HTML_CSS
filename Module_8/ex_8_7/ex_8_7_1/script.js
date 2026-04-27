async function renderUsers() {
    
    const results = document.getElementById("resultats")
    const p = document.querySelector(".loading")
    try{
        p.textContent = "Loading..."
        const query = await fetch("https://jsonplaceholder.typiode.com/users")

        if (!query.ok){
            throw new Error(`HTTP Error: ${query.status}`)
        }
        const users = await query.json()
        let html = ""
        for (const user of users){
            html += `
            <div class="carte-utilisateur">
                <h2>${user.name} (${user.email})</h2>
            </div>
            `
        }
        p.textContent = ""
        results.innerHTML = `
        <h2>Users found:</h2> 
        ${html}
        `
    }catch (error){
        p.textContent = `Error : ${error.message}`;
        console.error("Something went wrong: ", error.message)
    }
}
renderUsers()