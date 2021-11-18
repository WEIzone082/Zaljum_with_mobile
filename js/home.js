$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    dotsClass:'c-dots',
    dotClass:'c-dot'
  });

  $(document).ready(function(){
    $('.mobile_carousell').slick({
      dots:true,
      infinite: true,
      autoplay:true,
      autoplaySpeed:4200,
      arrows:false
    });

    $('.m_new_arr_slick').slick({
      dots:false,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      arrows:true,
      prevArrow: $('.prev'),
      nextArrow: $('.next')
    });
  });

  const c_dot = document.querySelectorAll('.c-dot')

  let num = 1

  for(let ele of c_dot){
    ele.textContent = (num)
    num++
  }

});

let fancy_shit = document.querySelector('.u_f_s');
let nav = document.querySelector('nav');
let h = window.innerHeight;
let w = window.innerWidth;
let nav_button = document.querySelector('#nav_burger');
const pop_menu = document.querySelector('.nav_popper');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop >  h || document.documentElement.scrollTop > h) {
      fancy_shit.style.display = 'none';
    }
} 

nav_button.addEventListener('click',function(){
    nav_button.classList.toggle('is-active')
    pop_menu.classList.toggle('pop_active')
})


