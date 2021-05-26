const menu = document.querySelector('#hamburger-menu');
const closeMenu = document.querySelector('#close-menu');
const dropdownMenu = document.querySelector('.dropdown')

menu.addEventListener('click', function(){
  menu.classList.add('hide')
  closeMenu.classList.add('unhide')
  dropdownMenu.classList.add('unhide')
})

closeMenu.addEventListener('click', function(){
  menu.classList.remove('hide')
  closeMenu.classList.remove('unhide')
  dropdownMenu.classList.remove('unhide')
})