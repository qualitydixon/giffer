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
    return this.state.isLoading === true
    ? <div />
    : <div>
      <GifCard
        url={this.state.currentGif.image_url}
        gif={this.state.currentGif}
        idx={0}
      />
    </div>
  }
}

