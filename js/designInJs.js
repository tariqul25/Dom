const fruitsTitle = document.getElementById('fruits-title')
console.log(fruitsTitle)
// document.getElementById('fruits-title.style')     ==> to access all style
// Belows two attribute added without console cause ==> this is style
fruitsTitle.style.color = "blue"
fruitsTitle.style.backgroundColor = "yellow"

// Below the fruits-container title color changed with dom
const sportsJournal = document.getElementById('sports')
console.log(sportsJournal)

// attribute get  

// It's not style ==>  so without console belows two will not execute 
console.log(sportsJournal.getAttribute('id'))
console.log(sportsJournal.getAttribute('class'))

// attribut set 
console.log(sportsJournal.setAttribute('title','tooltip set by javascript'))

const houseContainer = document.getElementsByClassName('housing-container')
console.log(houseContainer)
console.log(houseContainer[0])
console.log(houseContainer[0].innerHTML)
console.log(houseContainer[0].innerText)


// console.log(houseContainer[0].innerHTML = 'ABC wow DOM is changing')