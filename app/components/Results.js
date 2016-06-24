import React, { PropTypes } from 'react'
import GifCard from './GifCard'

const { array, bool } = PropTypes

export default function Results(props) {
  return props.isLoading === true
    ? <div />
    : <div>
      <ul className='list'>
        {props.gifData.map((gif, idx) =>
          <GifCard
            stillURL={gif.images.fixed_height_still.url}
            gifURL={gif.images.fixed_height.url}
            shareURL={gif.bitly_gif_url}
            pageURL={gif.url}
            key={gif.id}
            idx={idx}
            gif={gif}
          />
        )}
      </ul>
    </div>
}

Results.propTypes = {
  isLoading: bool.isRequired,
  gifData: array.isRequired,
}

