import React, { PropTypes } from 'react'

export default function Home(props) {
  return (
    <div className='homeContainer'>
      <div className='home'>
        <h1> {'Search your favorite gifs!'} </h1>
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
          <div className='form-group btnCon' id='getWeatherBtn'>
            <button onClick={props.onSubmitSearchString} className='btn btn-lg btn-success getBtn'> {'Get Movies'} </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Home.propTypes = {
  onSubmitSearchString: PropTypes.func.isRequired,
  onUpdateSearchString: PropTypes.func.isRequired,
  searchString: PropTypes.string.isRequired,
}
