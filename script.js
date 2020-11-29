const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const menuItem = document.querySelectorAll(".menu__link");

function addMenu() {
  menuIcon.classList.toggle("menu-icon_active");
  menu.classList.toggle("menu_active");
}

menuIcon.addEventListener("click", addMenu);

menuItem.forEach(function (e) {
  e.addEventListener("click", function () {
    addMenu();
  });
});
