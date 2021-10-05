const burger = document.querySelector('.humburger');
const fullMenu = document.querySelector('.fullscreen-menu');
const close = document.querySelector('.fullscreen-menu__close');
const body = document.querySelector('body');
const active = document.querySelector('active')
const menuLink = document.querySelectorAll('.menu--vertical .menu__link');




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




