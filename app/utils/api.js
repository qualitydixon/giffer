import axios from 'axios'

const baseURL = 'http://api.giphy.com/v1/gifs/search?q='
const trailURL = '&api_key=dc6zaTOxFJmzC&limit=30&offset='

function getGifs(searchString, offset) {
  console.log('Now Here!')
  return axios.get(baseURL + searchString + trailURL + offset)
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
