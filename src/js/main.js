// import API_KEY from "./API_KEY"

// console.log(API_KEY)

const API_KEY = "28faa7ff"

const searchMovies = async (searchPhrase) => {
   fetch(`http://www.omdbapi.com/?s=${searchPhrase}&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
         return data.searchPhrase
      })
}


const onSearch = async () => {
   let searchPhrase = document.getElementById("search").value
   fetch(`http://www.omdbapi.com/?s=${searchPhrase}&apikey=${API_KEY}`)
      .then((response) => response.json()).then((movies) => {
         window.localStorage.setItem('movies', JSON.stringify(movies.Search))
      }).then(() => { window.location.href = '../src/movie_listing/index.html' })
}

