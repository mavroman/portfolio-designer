const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

// const menuIconExit = document.querySelector('.menu-icon_active');

function addMenu() {
    menuIcon.classList.toggle('menu-icon_active');
    menu.classList.toggle('menu_active');
}

menuIcon.addEventListener('click', addMenu)