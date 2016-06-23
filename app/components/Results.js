import React, { PropTypes, Component } from 'react'
import { shareToTwitter, shareToFacebook } from '../utils/helpers'

const { object, number, func, bool } = PropTypes

class ListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHovered: false,
    }
  }
  mouseOver() {
    console.log('hovered!')
    this.setState({
      isHovered: true,
    })
  }
  mouseOut() {
    this.setState({
      isHovered: false,
    })
  }
  render() {
    const animationDelay = `${2 + (this.props.idx * 10) / 100}s`
    const isVisible = this.state.isHovered ? 'fadeIn' : 'fadeOut'
    return (
      <li
        onMouseOver={() => this.mouseOver()}
        onMouseOut={() => this.mouseOut()}
        style={{ animationDelay }}
        className='card'
      >
        <img
          alt={this.props.gif.url}
          src={this.props.gif.images.fixed_height.url}
        />
        <a href={shareToTwitter(this.props.gif.bitly_gif_url)} target='_blank'>
          <i className={`fa fa-twitter icon twitter ${isVisible}`}></i>
        </a>
        <a href={shareToFacebook(this.props.gif.bitly_gif_url)} target='_blank'>
          <i className={`fa fa-facebook icon facebook ${isVisible}`}></i>
        </a>
      </li>
    )
  }
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
  gifData: PropTypes.array.isRequired,
}

