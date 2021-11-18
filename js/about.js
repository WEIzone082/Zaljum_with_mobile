let nav_button = document.querySelector('#nav_burger')
const pop_menu = document.querySelector('.nav_popper')

nav_button.addEventListener('click',function(){
    nav_button.classList.toggle('is-active')
    pop_menu.classList.toggle('pop_active')
})