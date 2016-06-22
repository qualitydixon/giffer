import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default function Navigation(props) {
  let className = `navContainer ${props.navCollapse ? 'navCollapse' : ''}`
  return (
    <div className={className}>
      <div className='title'>
        <h2>{'GIFFER'}</h2>
      </div>
      <div className='navSearch'>
        <form onSubmit={props.onSubmitSearchString}>
          <div className='form-group' id='inputBox'>
            <input
              className='form-control'
              placeholder='cats'
              type='text'
              onChange={props.onUpdateSearchString}
              value={props.searchString}
            />
          </div>
        </form>
      </div>
      <ul>
        <li className='link'><Link style={{ color: 'white' }} to='/'>{'Home'}</Link></li>
        <li><a target='_blank' href='https://github.com/qualitydixon'>
          <i className='fa fa-github icon'></i></a></li>
        <li><a target='_blank' href='https://twitter.com/dixonbydesign'>
          <i className='fa fa-twitter icon'></i></a></li>
      </ul>
    </div>
  )
}

Navigation.propTypes = {
  onSubmitSearchString: PropTypes.func.isRequired,
  onUpdateSearchString: PropTypes.func.isRequired,
  searchString: PropTypes.string.isRequired,
  navCollapse: PropTypes.bool.isRequired,
}
