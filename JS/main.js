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
const moviesContainer  = document.querySelector(".movies-container");

async function getMovies(type) {
  let apiRespone = await fetch(
    `https://api.themoviedb.org/3/${type}?api_key=f31de6b44ad5fe28935eff41302201c7`
  );
  let data = await apiRespone.json();
  displayMovies(data.results);
}

function displayMovies(key) {
  let movies = ``;
  for (let i = 0; i < key.length; i++) {
    movies += `
        <div class="movie">
        <div class="img">
             <img class="w-100" src="https://image.tmdb.org/t/p/w500${key[i].poster_path}"/>
        </div>     
            <div class=overlay">
                <h3>${key[i].title}</h3>
                <p class"description>${key[i].overview}</p>
                <p class"date">${key[i].release_date}</p>
                <p class"rate">${key[i].vote_average}</p>
             </div>
        </div>
        `;
  }
  moviesContainer.innerHTML = movies;
}

// getMovies("trending/all/day");
// getMovies("movie/popular");    
// getMovies("movie/top_rated");
// getMovies("movie/upcoming"); 
getMovies("movie/now_playing"); 




    searchURL = "https://api.themoviedb.org/3/search/movie?query=mad&api_key=f31de6b44ad5fe28935eff41302201c7&language=en-US&include_adult=false";
   