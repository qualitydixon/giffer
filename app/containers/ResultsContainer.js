import React, { PropTypes, Component } from 'react'
import Results from '../components/Results'
import { getGifs, getDetails } from '../utils/api'

export default class ResultsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      gifData: [],
    }
  }
  componentDidMount() {
    this.makeRequest(this.props.routeParams.searchString, 0)
    window.addEventListener('scroll', this.runOnScroll(this.props.routeParams.searchString))
  }
  componentWillReceiveProps(nextProps) {
    this.makeRequest(nextProps.routeParams.searchString, 0)
    this.setState({
      isLoading: true,
    })
  }
  runOnScroll(searchString) {
    console.log(searchString)
    // eslint wants const even though value is changing ?
    const scrollPos = document.body.scrollTop + window.innerHeight
    console.log(scrollPos)
    const bottom = document.body.scrollHeight
    if (scrollPos >= (bottom * 0.95)) {
      console.log('Getting close!')
      this.makeRequest(searchString, 51)
    }
  }
  makeRequest(searchString, offset) {
    getGifs(searchString, offset).then((data) => {
      this.setState({
        gifData: this.state.gifData.concat(data),
        isLoading: false,
      })
    })
  }
  makeDetailsRequest(movie) {
    getDetails(movie).then((data) => {
      this.setState({
        modalOpen: true,
        modalData: data,
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
          makeDetailsRequest={(movie) => this.makeDetailsRequest(movie)}
        />
      </div>
    )
  }
}

ResultsContainer.propTypes = {
  routeParams: PropTypes.object.isRequired,
}
