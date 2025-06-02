
// 1.where to add
const placesList = document.getElementById('places-list')
// console.log(placesList)

// 2.what to be added
const li = document.createElement('li');
li.innerText = 'new bandarban'

// 3.add the child
placesList.appendChild(li);

// firstly amra jekane child add korte chai tkn tar parent e 1 ta id declare korte hobe


// 1.where to add
const mainContainer = document.getElementById('main-container')

// 2.what to be added
const section = document.createElement('section')
const h1 = document.createElement('h1');
h1.innerText = 'My Food List'
section.appendChild(h1);


const ul = document.createElement('ul');


const li1 = document.createElement('li')
li1.innerText = "biriyani";
ul.appendChild(li1);

const li2 = document.createElement('li')
li2.innerText = "borhani";
ul.appendChild(li2);

const li3 = document.createElement('li')
li3.innerText = "salad";
ul.appendChild(li3);

section.appendChild(ul)

// 3.add the child
mainContainer.appendChild(section);



// set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> My Dress section </h1>
<ul>
<li>T-shirt</li>
<li>Lungi</li>
<li>Sando Genji</li>
</ul>
`

mainContainer.appendChild(sectionDress);