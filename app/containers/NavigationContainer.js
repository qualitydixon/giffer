import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import { Link } from 'react-router'

export default class NavigationContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navCollapse: false,
      searchString: '',
    }
  }
  handleUpdateSearchString(e) {
    this.setState({
      searchString: e.target.value,
    })
  }
  handleSubmitSearchString(e) {
    e.preventDefault()
    this.setState({
      searchString: '',
      navCollapse: true,
    })
    //this.context.router.push(`/results/${this.state.searchString}`)
  }
  render() {
    return (
      <Navigation
        onSubmitSearchString={(e) => this.handleSubmitSearchString(e)}
        onUpdateSearchString={(e) => this.handleUpdateSearchString(e)}
        searchString={this.state.searchString}
        navCollapse={this.state.navCollapse}
      />
    )
  }
}
