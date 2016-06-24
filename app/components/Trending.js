import React, { PropTypes } from 'react'
import GifCard from './GifCard'

export default function Trending(props) {
  return (
    <div className='trending'>
      <hr />
      <h3>{'Trending'} <i className={'fa fa-line-chart'}></i></h3>
      <ul>
        {props.trendingData.map((gif, idx) =>
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
  )
}

Trending.propTypes = {
  trendingData: PropTypes.array.isRequired,
}
