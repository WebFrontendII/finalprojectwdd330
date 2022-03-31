function createMovieCards() {
   const movies = JSON.parse(window.localStorage.getItem('movies'))
   if (movies.length > 0) {
      console.log(document.getElementById('grid-movies'))
      movies.map(movie => document.getElementById('grid-movies').append(renderMovieCard(movie)))
   }
}

const renderMovieCard = (movie) => {
   let movieContainer = document.createElement("div")
   movieContainer.classList.add("movie")
   let movieImage = document.createElement("img")
   movieImage.classList.add("movie-img")
   movieImage.setAttribute('src', movie.Poster)
   return movieContainer.appendChild(movieImage)
}

createMovieCards()
