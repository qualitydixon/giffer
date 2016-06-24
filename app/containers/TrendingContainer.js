import React, { Component } from 'react'
import Trending from '../components/Trending'
import { getTrendingGifs } from '../utils/api'

export default class TrendingContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      trendingData: [],
    }
  }
  componentDidMount() {
    this.makeRequest()
  }
  makeRequest() {
    getTrendingGifs()
      .then((data) => {
        this.setState({
          trendingData: data,
          isLoading: false,
        })
      })
  }
  render() {
    return this.state.isLoading === true
      ? <div />
      : <Trending trendingData={this.state.trendingData} />
  }
}
