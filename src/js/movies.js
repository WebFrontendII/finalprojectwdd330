function createMovieCards() {
   let movies = JSON.parse(window.localStorage.getItem('movies'))
   if (movies.length > 0) {
      movies.pop()
      movies.map(movie => document.getElementById('grid-movies').append(renderMovieCard(movie)))
   }
}

function moviePage(movie) {
   localStorage.setItem("current-movie", JSON.stringify(movie))
   window.location.href = 'movie.html';
}

const renderMovieCard = (movie) => {
   let movieContainer = document.createElement("div")
   movieContainer.classList.add("movie")
   let movieImage = document.createElement("img")
   movieImage.classList.add("movie-img")
   movieImage.setAttribute('src', movie.Poster)
   movieImage.addEventListener('click', () => { moviePage(movie) })
   let movieTitle = document.createElement("h2")
   movieTitle.classList.add("movie-title")
   movieTitle.innerHTML = movie.Title
   movieContainer.appendChild(movieImage)
   movieContainer.appendChild(movieTitle)

   return movieContainer
}

createMovieCards()

