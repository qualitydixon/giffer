import React, { PropTypes } from 'react'

export default function Navigation(props) {
  let className = `navContainer ${props.navCollapse ? 'return' : 'slide'}`
  return (
    <div className={className}>
      <div className='navSearch'>
        <form onSubmit={props.onSubmitSearchString}>
          <div className='form-group' id='inputBox'>
            <input
              className='form-control'
              placeholder='Search Giphy'
              type='text'
              onChange={props.onUpdateSearchString}
              value={props.searchString}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

Navigation.propTypes = {
  onSubmitSearchString: PropTypes.func.isRequired,
  onUpdateSearchString: PropTypes.func.isRequired,
  searchString: PropTypes.string.isRequired,
  navCollapse: PropTypes.bool.isRequired,
}
