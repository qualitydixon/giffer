import React, { PropTypes, Component } from 'react'
import { shareToTwitter, shareToFacebook } from '../utils/helpers'

export default class GifCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHovered: false,
      displayURL: this.props.url,
    }
  }
  mouseOver() {
    this.setState({
      isHovered: true,
      displayURL: this.props.gif.images.fixed_height.url,
    })
  }
  mouseOut() {
    this.setState({
      isHovered: false,
      displayURL: this.props.gif.images.fixed_height_still.url,
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
          src={this.state.displayURL}
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

GifCard.propTypes = {
  gif: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
}
