import React, { PropTypes, Component } from 'react'
import Results from '../components/Results'
import { getGifs, getDetails } from '../utils/api'

export default class ResultsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      gifData: {},
    }
  }
  componentDidMount() {
    this.makeRequest(this.props.routeParams.searchString)
    window.addEventListener('scroll', this.runOnScroll)
  }
  componentWillReceiveProps(nextProps) {
    this.makeRequest(nextProps.routeParams.searchString)
    this.setState({
      isLoading: true,
    })
  }
  runOnScroll() {
    // eslint wants const even though value is changing ?
    const scrollPos = document.body.scrollTop + window.innerHeight
    const bottom = document.body.scrollHeight
    if (scrollPos >= (bottom * 0.75)) {
      console.log('Getting close!')
    }
  }
  makeRequest(searchString) {
    console.log('Here!')
    getGifs(searchString).then((data) => {
      this.setState({
        gifData: data,
        isLoading: false,
      })
      console.log(data)
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
  closeModal() {
    this.setState({
      modalOpen: false,
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
