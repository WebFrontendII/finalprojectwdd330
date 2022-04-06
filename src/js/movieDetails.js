function displayMovie()
{
    let movie = JSON.parse(localStorage.getItem("current-movie"))
    console.log(movie)
    document.getElementById('movie-display').append(renderMovie(movie))
}

 const renderMovie = (movie) => {
     let movieContainer = document.createElement("div")
     movieContainer.classList.add("movie")
     let movieImage = document.createElement("img")
     movieImage.classList.add("movie-img")
     movieImage.setAttribute('src', movie.Poster)
     let movieTitle = document.createElement("h1")
     movieTitle.classList.add("movie-title")
     movieTitle.innerHTML = movie.Title
     let movieYear = document.createElement("h3")
     movieYear.classList.add("movie-year")
     movieYear.innerHTML = movie.Year
     movieContainer.appendChild(movieTitle)
     movieContainer.appendChild(movieYear)
     movieContainer.appendChild(movieImage)
     
 
     return movieContainer
 }

 displayMovie()