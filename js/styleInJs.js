const sections = document.querySelectorAll('section')
// console.log(sections)
for (const section of sections) {
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgray';

}

const jalaliContainer = document.getElementById('jalali-container')
// jalaliContainer.style.backgroundColor="yellow"
jalaliContainer.classList.add("text-center")
jalaliContainer.classList.remove("large-text")


// ------------------------------------------------------------------

// console.log(jalaliContainer)
// console.log(jalaliContainer.childNodes)
// console.log(jalaliContainer.firstChild)
// console.log(jalaliContainer.lastChild)
// console.log(jalaliContainer.childNodes[3])
// console.log(jalaliContainer.childNodes[3].childNodes)
// console.log(jalaliContainer.childNodes[3].childNodes[2])
// console.log(jalaliContainer.childNodes[3].childNodes[2].nextSibling)
// console.log(jalaliContainer.childNodes[3].childNodes[2].previousSibling)


const jalaliUL= document.querySelector('#jalali-container ul')
// console.log(jalaliUL)

// any tag/element can create by below method
const newLi = document.createElement('li')
newLi.innerText= 'new jalali'
// console.log(newLi)
// jalaliUL.appendChild(newLi)


const newLi1 = document.createElement('li')
newLi1.innerText= 'another new jalali'
// jalaliUL.appendChild(newLi1)


// console.log(jalaliUL)
// console.log(jalaliUL.parentNode)
// console.log(jalaliUL.parentNode.parentNode)
// console.log(jalaliUL.parentNode.parentNode.parentNode)
// console.log(jalaliUL.parentNode.parentNode.parentNode.parentNode)
// console.log(jalaliUL.parentNode.parentNode.parentNode.parentNode.parentNode)
// console.log(jalaliUL.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)
// --------------------------------------------------------------------