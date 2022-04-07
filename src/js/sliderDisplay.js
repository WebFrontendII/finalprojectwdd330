const API_KEY = "28faa7ff"



function movieN() {
   let searchPhrase = document.getElementById("movieN").value
   fetch(`http://www.omdbapi.com/?s=${searchPhrase}&apikey=${API_KEY}`)
      .then((response) => response.json()).then((movies) => {
         window.localStorage.setItem('movies', JSON.stringify(movies.Search))
      }).then(() => { window.location.href = '../src/movie_listing/index.html' })
}
