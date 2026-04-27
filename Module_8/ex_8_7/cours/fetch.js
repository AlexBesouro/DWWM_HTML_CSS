async function getData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    console.log(users)
    console.log(`Users number: ${users.length}`)
    console.log(`First user: ${users[0].name}`)
}
getData()

async function getUser(id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/user/${id}`)
    if(!response.ok){
        throw new Error(`Error HTTP: ${response.status}`)
    }
    const user = await response.json()
    return user
}

async function main() {
    try{
        const user = await getUser(1)
        console.log(`Name: ${user.name}`)
        console.log(`Email: ${user.email}`)
    }catch (error){
        console.error("Something went wrong: ", error.message)
    }
}
main()