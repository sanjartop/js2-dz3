let row = document.querySelector('.row')


// const getUser = () => {
 fetch('https://hp-api.onrender.com/api/characters')
.then((res) => res.json())
.then((res) => {
    res.forEach((item) => {
        row.innerHTML += `
        <div class='card'>
            <img class='card_img' src='${item.image}' href=''/>
            <h2>${item.gender}</h2>
            <h1 class='card_title'>${item.name}</h1>
            <p class='actor'>actor: ${item.actor}</p>
            <p class='birth-day'>Year of birth: ${item.yearOfBirth}</p>
        </div>
        `
    })
})   

// getUser()