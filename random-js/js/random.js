const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => displayUsers(data.results))
}
const displayUsers = users => {
    const usersContainer = document.getElementById('users-container');
    console.log(users);
    for(const user of users){
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = 
        `
        <h3>User Name: ${user.name.first} ${user.name.last}</h3>
        <p>Email: ${user.email}</p>
        <p>User location: ${user.location.city},  ${user.location.country}</p>
        `;
        usersContainer.appendChild(userDiv);
    }
}
loadUsers()

 