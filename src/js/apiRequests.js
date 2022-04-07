
export const searchMovies = async (searchPhrase) => {
   fetch('https://www.omdbapi.com/?i=tt3896198&apikey=28faa7ff').then(res => {
      console.log(res.body)
   })
}