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
    this.makeRequest()
    this.interval = setInterval(() => this.makeRequest(), 10000)
  }
  componentWillUnmount () {
    clearInterval(this.interval)
  }
  makeRequest() {
    console.log('check!')
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
        idx={0}
      />
    </div>
  }
}

