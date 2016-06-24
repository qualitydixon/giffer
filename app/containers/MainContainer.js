import React, { PropTypes } from 'react'
import NavigationContainer from './NavigationContainer'
require('../stylesheets/main.less')

export default function MainContainer(props) {
  return (
    <div>
      <NavigationContainer />
      {props.children}
    </div>
  )
}

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
}
