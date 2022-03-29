// import API_KEY from "./API_KEY"

// console.log(API_KEY)

const API_KEY = "28faa7ff"

const searchMovies = async (searchPhrase) => {
   fetch(`http://www.omdbapi.com/?s=${searchPhrase}&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
         console.log(data)
      })
}

searchMovies()