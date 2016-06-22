import React, { PropTypes, Component } from 'react'
import Results from '../components/Results'
import { getGifs, getDetails } from '../utils/api'

export default class ResultsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      gifData: {},
      modalOpen: false,
      modalData: {},
    }
  }
  componentDidMount() {
    this.makeRequest(this.props.routeParams.searchString)
  }
  componentWillReceiveProps(nextProps) {
    this.makeRequest(nextProps.routeParams.searchString)
    this.setState({
      isLoading: true,
    })
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
          modalOpen={this.state.modalOpen}
          closeModal={() => this.closeModal()}
          modalData={this.state.modalData}
        />
      </div>
    )
  }
}

ResultsContainer.propTypes = {
  routeParams: PropTypes.object.isRequired,
}
