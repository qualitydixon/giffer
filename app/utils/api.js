import axios from 'axios'

const baseURL = 'http://api.giphy.com/v1/gifs/search?q='
const trailURL = '&api_key=dc6zaTOxFJmzC&limit=50&offset='
const randomURL = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC'

export function getGifs(searchString, offset) {
  console.log('Now Here!')
  return axios.get(baseURL + searchString + trailURL + offset)
          .then(gifs => gifs.data.data)
          .catch((error) => {
            console.log(error)
          })
}

export function getRandomGif() {
  return axios.get(randomURL)
          .then((gif) => gif.data.data)
}
