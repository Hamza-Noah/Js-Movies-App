const menu = document.querySelector(".menu-icon");
const nav = document.querySelector("nav");
const sidebar = document.querySelector(".sidebar-content");

menu.addEventListener("click", function(){
    menu.classList.toggle("open");
    nav.classList.toggle("menu-visible");
    sidebar.classList.toggle("menu-opened");
});