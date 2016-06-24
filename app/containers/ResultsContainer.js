import React, { PropTypes, Component } from 'react'
import Results from '../components/Results'
import Trending from '../components/Trending'
import { getGifs } from '../utils/api'

export default class ResultsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      gifData: [],
      trendingData: [],
    }
  }
  componentDidMount() {
    this.makeRequest(this.props.routeParams.searchString, 0)
  }
  componentWillReceiveProps(nextProps) {
    this.makeRequest(nextProps.routeParams.searchString, 0)
    this.setState({
      isLoading: true,
    })
  }
  makeRequest(searchString, offset) {
    getGifs(searchString, offset)
      .then((data) => {
        this.setState({
          gifData: data,
          isLoading: false,
        })
      })
  }
  render() {
    return (
      <div>
        <Results
          isLoading={this.state.isLoading}
          searchString={this.props.routeParams.searchString}
          gifData={this.state.gifData}
        />
      </div>
    )
  }
}

ResultsContainer.propTypes = {
  routeParams: PropTypes.object.isRequired,
}
