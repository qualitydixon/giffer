import axios from 'axios'

const baseURL = 'https://api.giphy.com/v1/gifs/search?q='
const trailURL = '&api_key=dc6zaTOxFJmzC&limit=50&offset='
const randomURL = 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC'
const trendURL = 'https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC'

export function getGifs(searchString, offset) {
  return axios.get(baseURL + searchString + trailURL + offset)
          .then(gifs => gifs.data.data)
}

export function getRandomGif() {
  return axios.get(randomURL)
          .then((gif) => gif.data.data)
}

export function getTrendingGifs() {
  return axios.get(trendURL)
          .then((gifs) => gifs.data.data)
}
