/* Grupp 12 JavaScript */

/*Js for toggle-nav */
const toggleButton = document.getElementsByClassName('nav__toggle')[0]
const navbarLinks = document.getElementsByClassName('nav__list')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('show')
})


