const menu = document.querySelector(".menu-icon");
const nav = document.querySelector("nav");

menu.addEventListener("click", function(){
    menu.classList.toggle("open");
    nav.classList.toggle("menu-visible");
});