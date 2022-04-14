// Sidebar

const menu = document.querySelector(".menu-icon");
const nav = document.querySelector("nav");
const sidebar = document.querySelector(".sidebar-content");

menu.addEventListener("click", function () {
  menu.classList.toggle("open");
  nav.classList.toggle("menu-visible");
  sidebar.classList.toggle("menu-opened");
});

// Fetching API

async function API() {
  const API = await fetch(
    "https://api.themoviedb.org/3/trending/all/day?api_key=f31de6b44ad5fe28935eff41302201c7"
  );
  console.log(API.response);
}
