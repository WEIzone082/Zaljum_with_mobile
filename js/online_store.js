$(document).ready(function(){
    $('.ws_slick_container').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows:true,
      prevArrow: $('.prev'),
      nextArrow: $('.next')
    });
  });

$('.m_ws_container').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows:false,
  dots:true
});

let nav_button = document.querySelector('#nav_burger')
const pop_menu = document.querySelector('.nav_popper')

nav_button.addEventListener('click',function(){
    nav_button.classList.toggle('is-active')
    pop_menu.classList.toggle('pop_active')
})