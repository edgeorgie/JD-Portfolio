const menuBtn = document.querySelector('.menu-btn')
const hamburguer = document.querySelector('.menu-btn__burger')
const nav = document.querySelector('.nav')
const menuNav = document.querySelector('.menu-nav')
const navItems = document.querySelectorAll('.menu-nav__item')
const divHome = document.getElementById('home__div')
const newDivHome = document.createElement('div')
const divContact = document.getElementById('contact__list_id')
const newDivContact = document.createElement('div')
const browserWidth = window.outerWidth
const specificScreenSize = 1366 

let showMenu = false

menuBtn.addEventListener('click', toggleMenu)
divHome.addEventListener('DOMContentLoaded', responsiveHome)
// divContact.addEventListener('DOMContentLoaded', responsiveContact)

function toggleMenu() {
  if (!showMenu) {
    hamburguer.classList.add('open')
    nav.classList.add('open')
    menuNav.classList.add('open')
    navItems.forEach(item => item.classList.add('open'))

    showMenu = true
  } else {
    hamburguer.classList.remove('open')
    nav.classList.remove('open')
    menuNav.classList.remove('open')
    navItems.forEach(item => item.classList.remove('open'))

    showMenu = false
  }
}

function responsiveHome() {
  if (browserWidth == specificScreenSize) {
    divHome.insertAdjacentElement('afterend', newDivHome)
    newDivHome.classList.add('home__img')
  }
}

// function responsiveContact() {
//   if (browserWidth == specificScreenSize) {
//     divContact.insertAdjacentElement('afterend', newDivContact)
//     newDivContact.classList.add('contact__img')    
//   }
// }

responsiveHome()
// responsiveContact()