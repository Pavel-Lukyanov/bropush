document.addEventListener('DOMContentLoaded', () => {
    //Бургер меню
    const btn = document.getElementById('menuBtn');
    let menu = document.getElementById('menuContainer');

    btn.addEventListener('click', showMenu);

    function showMenu() {
        menu.classList.toggle('menu-show');
        let toggle = document.querySelector('.nav-toggle');
        this.classList.toggle('opened');
    }
});