import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import MainContainer from '../containers/MainContainer'
import TrendingContainer from '../containers/TrendingContainer'
import ResultsContainer from '../containers/ResultsContainer'
import Home from '../components/Home'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={Home} />
      <Route path='/results/:searchString' component={ResultsContainer} />
      <Route path='/trending' component={TrendingContainer} />
    </Route>
  </Router>
)

module.exports = routes
