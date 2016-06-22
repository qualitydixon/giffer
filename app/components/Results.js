import React, { PropTypes } from 'react'

const { object, number, func, bool } = PropTypes

function ListItem(props) {
  const animationDelay = `${2 + (props.idx * 10) / 100}s`
  return (
    <li style={{ animationDelay }} className='card'>
      <img alt={'Gif'} src={props.gif.images.fixed_height.url} />
    </li>
  )
}

ListItem.propTypes = {
  gif: object.isRequired,
  idx: number.isRequired,
}

export default function Results(props) {
  return props.isLoading === true
    ? <div />
    : <div>
      <ul className='list'>
        {props.gifData.map((gif, idx) =>
          <ListItem
            key={gif.id} idx={idx} gif={gif}
          />
        )}
      </ul>
    </div>
}

Results.propTypes = {
  isLoading: bool.isRequired,
  makeDetailsRequest: func.isRequired,
  gifData: PropTypes.any.isRequired,
}

