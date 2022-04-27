(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuClose = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.header__link');
    burgerItem.addEventListener('click', ()=>{
        menu.classList.add('header__nav_active');
    });
    menuClose.addEventListener('click', ()=>{
        menu.classList.remove('header__nav_active');
    });
    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', ()=>{
            menu.classList.remove('header__nav_active');
        })
    }
}());