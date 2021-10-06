const burger = document.querySelector('.humburger');
const fullMenu = document.querySelector('.fullscreen-menu');
const close = document.querySelector('.fullscreen-menu__close');
const body = document.querySelector('body');
const active = document.querySelector('active')
const menuLink = document.querySelectorAll('.menu--vertical .menu__link');
const memberInfo = document.querySelectorAll('.member__info')
const memberDecor = document.querySelectorAll('.member__info-decor-symbol')
const memberDesc = document.querySelectorAll('.member__desc')
const memberDescActive = document.querySelectorAll('.member__desc--active')






burger.addEventListener("click", e => {
    e.preventDefault();
    fullMenu.classList.add('active');
});

close.addEventListener("click", e => {
    e.preventDefault();
    fullMenu.classList.remove('active');
    
});

menuLink.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        fullMenu.classList.remove('active');
    })
})

//модальное окно секции КОМАНДА

for(let item of memberInfo) {
    item.addEventListener('click', e => {
        const infoDecor = item.lastElementChild.children[0];
        const descActive = item.parentElement.lastElementChild
        const descHeight = getComputedStyle(descActive).height;
        const currentHeight = parseInt(descHeight);
        
        if(currentHeight == 0) {
            infoDecor.classList.add('decor--active');
            descActive.classList.add('member__desc--active');
        
        } else  {
            descActive.classList.remove('member__desc--active');
            infoDecor.classList.remove('decor--active');
                 
            }
        
    })

}

 
    






