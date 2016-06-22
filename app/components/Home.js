import React, { PropTypes } from 'react'

export default function Home(props) {
  return (
    <div />
  )
}

Home.propTypes = {
  onSubmitSearchString: PropTypes.func.isRequired,
  onUpdateSearchString: PropTypes.func.isRequired,
  searchString: PropTypes.string.isRequired,
}
