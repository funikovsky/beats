const burger = document.querySelector('.humburger');
const fullMenu = document.querySelector('.fullscreen-menu');
const close = document.querySelector('.fullscreen-menu__close');
const body = document.querySelector('body');


burger.addEventListener("click", e => {
    e.preventDefault();
    fullMenu.classList.add('active');
    
    
    
});



close.addEventListener("click", e => {
    e.preventDefault();
    fullMenu.classList.remove('active');
    
    
    
});


