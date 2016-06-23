import React, { PropTypes, Component } from 'react'
import { shareToTwitter, shareToFacebook } from '../utils/helpers'

export default class GifCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHovered: false,
      displayURL: this.props.stillURL,
    }
  }
  mouseOver() {
    this.setState({
      isHovered: true,
      displayURL: this.props.gifURL,
    })
  }
  mouseOut() {
    this.setState({
      isHovered: false,
      displayURL: this.props.stillURL,
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
        <a href={shareToTwitter(this.props.shareURL)} target='_blank'>
          <i className={`fa fa-twitter icon twitter ${isVisible}`}></i>
        </a>
        <a href={shareToFacebook(this.props.gif.shareURL)} target='_blank'>
          <i className={`fa fa-facebook icon facebook ${isVisible}`}></i>
        </a>
      </li>
    )
  }
}

GifCard.propTypes = {
  gif: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
  stillURL: PropTypes.string.isRequired,
  gifURL: PropTypes.string.isRequired,
  shareURL: PropTypes.string.isRequired,
}
