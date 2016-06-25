import React, { Component } from 'react'
import GifCard from './GifCard'
import { getRandomGif } from '../utils/api'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      currentGif: {},
    }
  }
  componentDidMount() {
    /* Get first random gif */
    this.makeRequest()

    /* Get a new random gif every 10 seconds */
    this.interval = setInterval(() => this.makeRequest(), 10000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  makeRequest() {
    getRandomGif().then((data) => {
      this.setState({
        currentGif: data,
        isLoading: false,
      })
    })
  }
  render() {
    let randURL = this.state.currentGif.fixed_height_downsampled_url
    return this.state.isLoading === true
    ? <div />
    : <div className='home'>
      <GifCard
        stillURL={randURL}
        gifURL={randURL}
        shareURL={randURL}
        pageURL={this.state.currentGif.url}
        idx={0}
      />
    </div>
  }
}

