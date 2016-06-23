import React, { PropTypes } from 'react'
import GifCard from './GifCard'

const { array, func, bool } = PropTypes

export default function Results(props) {
  return props.isLoading === true
    ? <div />
    : <div>
      <ul className='list'>
        {props.gifData.map((gif, idx) =>
          <GifCard
            key={gif.id} idx={idx} gif={gif}
          />
        )}
      </ul>
    </div>
}

Results.propTypes = {
  isLoading: bool.isRequired,
  makeDetailsRequest: func.isRequired,
  gifData: array.isRequired,
}

