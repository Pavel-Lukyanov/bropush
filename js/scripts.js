document.addEventListener('DOMContentLoaded', () => {
    //Бургер меню
    /* const btn = document.getElementById('menuBtn');
    let menu = document.getElementById('menuContainer');
 
    btn.addEventListener('click', showMenu);
 
    function showMenu() {
        menu.classList.toggle('menu-show');
        let toggle = document.querySelector('.nav-toggle');
        this.classList.toggle('opened');
    } */

    let menu = document.getElementById('menuContainer');
    let menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        menu.classList.toggle('menu-show');
    });



});