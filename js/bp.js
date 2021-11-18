$(document).ready(function(){
    $('.b_news').slick({
      autoplay:true,
      autoplaySpeed:4200,
      dots:true,
    });
  });


let nav_button = document.querySelector('#nav_burger')
const pop_menu = document.querySelector('.nav_popper')

nav_button.addEventListener('click',function(){
    nav_button.classList.toggle('is-active')
    pop_menu.classList.toggle('pop_active')
})