import axios from 'axios'

const baseURL = 'http://api.giphy.com/v1/gifs/search?q='
const detailURL = 'https://www.omdbapi.com/?i='
const trailURL = '&api_key=dc6zaTOxFJmzC'

function getGifs(searchString) {
  console.log('Now Here!')
  return axios.get(baseURL + searchString + trailURL)
          .then(gifs => gifs.data.data)
          .catch((error) => {
            console.log(error)
          })
}

function getDetails(id) {
  return axios.get(detailURL + id + trailURL)
          .then((movie) => movie.data)
}
module.exports = {
  getGifs,
  getDetails,
}
