


const searchMovies = async (searchPhrase) => {
   fetch(`http://www.omdbapi.com/?s=${searchPhrase}&apikey=28faa7ff`)
      .then(response => response.json())
      .then(data => {
         console.log(data)
         console.log(process.env)
      })
}

searchMovies()