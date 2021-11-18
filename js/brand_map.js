const tpe = document.querySelector('#Taipei');
const guide = document.querySelector('.guide');
const city = document.querySelector('.city_block');
const brands = document.querySelector('.city_brands');
const brand = document.querySelectorAll('.brand');
const m_choose = document.querySelectorAll('.choose')
const m_map = document.querySelectorAll('.m_parts');
const m_tpe = document.querySelector('#m_Taipei')
const m_brand = document.querySelector('.m_taipei_brands')
const close = document.querySelector('.close_this_shit')

let nav_button = document.querySelector('#nav_burger');
const pop_menu = document.querySelector('.nav_popper');

let count = 1;
let stay = false;

nav_button.addEventListener('click',function(){
    nav_button.classList.toggle('is-active');
    pop_menu.classList.toggle('pop_active');
})

$(tpe).mouseenter(function(){
    if(! stay){
        guide.classList.toggle('guide_inactive');
        city.classList.toggle('show_hover');
    }
})
.mouseleave(function(){
    if(! stay){
        guide.classList.toggle('guide_inactive');
        if(city.classList.contains('show_hover')){
            city.classList.toggle('show_hover');
        }
    }
})


tpe.addEventListener('click',()=>{
    if(count === 1){
        tpe.style.fill = 'brown';
        brands.classList.toggle('brands_extend');
       /* brand.classList.toggle('brand_show'); */
       for(ele of brand){
           ele.classList.toggle('brand_show');
       }
        stay = true;
        count ++;
    }else{
        tpe.removeAttribute('style');
        city.classList.toggle('show_hover');
        brands.classList.toggle('brands_extend');
        /* brand.classList.toggle('brand_show'); */
        for(ele of brand){
            ele.classList.toggle('brand_show');
        }
        stay = false;
        count -=1;
    }
})

let arr = Array.from(m_choose);

for(let x of m_choose){
    x.addEventListener('click',function(){
        let place = arr.indexOf(x)
        for(let text of m_choose){
            if(text.classList.contains('choose_active')){
                text.classList.toggle('choose_active');
                break
            }
        }
        x.classList.toggle('choose_active');

        for(let part of m_map){
            if(part.classList.contains('m_part_active')){
                part.classList.toggle('m_part_active');
                break
            }
        }
        m_map[place].classList.toggle('m_part_active');
    })
}

m_tpe.addEventListener('click',function(){
    m_brand.classList.toggle('m_show_1')
    setTimeout(function(){
        m_brand.classList.toggle('m_show_2')
    }, 200);
    
})

close.addEventListener('click',function(){
    setTimeout(function(){
        m_brand.classList.toggle('m_show_1')
    }, 200)
    m_brand.classList.toggle('m_show_2')
})