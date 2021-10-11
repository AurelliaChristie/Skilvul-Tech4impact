async function getUsers() {
    try{
        let response = await fetch('https://randomuser.me/api/?results=2');
        let json =  await response.json();
        return json;
    } catch(error){
        console.log(error);
    }
}

  
async function renderUsers() {
    let users = await getUsers();
    let dataUser = users.results;
    return users;
}  
console.log(renderUsers())