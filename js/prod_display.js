const prev = document.querySelector('.pic_prev')
const next = document.querySelector('.pic_next')
const main_pics = document.querySelectorAll('.pd_content')
const nav_pics = document.querySelectorAll('.navcontent')
let nav_button = document.querySelector('#nav_burger')
const pop_menu = document.querySelector('.nav_popper')
/*append*/

nav_button.addEventListener('click',function(){
    nav_button.classList.toggle('is-active')
    pop_menu.classList.toggle('pop_active')
})


next.addEventListener('click',function(){
    for(let i = 0; i < main_pics.length; i++){
        if(main_pics[i].classList.contains('show') === true){
            if(i === 2){
                main_pics[i].classList.toggle('show')
                nav_pics[i].classList.toggle('blk_active')
                main_pics[0].classList.toggle('show')
                nav_pics[0].classList.toggle('blk_active')
                break
            }else{
                main_pics[i].classList.toggle('show')
                nav_pics[i].classList.toggle('blk_active')
                main_pics[i+1].classList.toggle('show')
                nav_pics[i+1].classList.toggle('blk_active')
                break
            }
        }
    }
})

prev.addEventListener('click',function(){
    for(let i = 0; i < main_pics.length; i++){
        if(main_pics[i].classList.contains('show') === true){
            if(i === 0){
                main_pics[i].classList.toggle('show')
                nav_pics[i].classList.toggle('blk_active')
                main_pics[main_pics.length-1].classList.toggle('show')
                nav_pics[main_pics.length-1].classList.toggle('blk_active')
                break
            }else{
                main_pics[i].classList.toggle('show')
                nav_pics[i].classList.toggle('blk_active')
                main_pics[i-1].classList.toggle('show')
                nav_pics[i-1].classList.toggle('blk_active')
                break
            }
        }
    }
})

/*append*/

for(let ele of nav_pics){
    ele.addEventListener('click',function(){
        const elements = Array.from(nav_pics)
        const num = (elements.indexOf(ele))

        for(let x of main_pics){
            if(x.classList.contains('show')){
                x.classList.toggle('show')
                break
            }
        }

        for(let y of nav_pics){
            if(y.classList.contains('blk_active')){
                y.classList.toggle('blk_active')
                break
            }
        }

        main_pics[num].classList.toggle('show')
        nav_pics[num].classList.toggle('blk_active')
    })
}
