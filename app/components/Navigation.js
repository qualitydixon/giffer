import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default function Navigation(props) {
  let className = `${props.navCollapse ? 'slideReturn' : 'slide'}`
  return (
    <div className='navContainer'>
      <div />
      <div className={className}>
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
      <Link to='/trending' onClick={props.onRouteLink}>
        <i className={'fa fa-line-chart trendIcon'}></i>
      </Link>
    </div>
  )
}

Navigation.propTypes = {
  onSubmitSearchString: PropTypes.func.isRequired,
  onUpdateSearchString: PropTypes.func.isRequired,
  onRouteLink: PropTypes.func.isRequired,
  searchString: PropTypes.string.isRequired,
  navCollapse: PropTypes.bool.isRequired,
}
