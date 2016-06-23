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
    setInterval(this.makeRequest.bind(this), 10000)
  }
  makeRequest() {
    console.log('check!')
    getRandomGif().then((data) => {
      console.log(data)
      this.setState({
        currentGif: data,
        isLoading: false,
      })
    })
  }
  render() {
    return this.state.isLoading === true
    ? <div />
    : <div className='home'>
      <GifCard
        stillURL={this.state.currentGif.image_url}
        gifURL={this.state.currentGif.image_url}
        shareURL={this.state.currentGif.image_url}
        gif={this.state.currentGif}
        idx={0}
      />
    </div>
  }
}

