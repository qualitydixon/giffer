import React, { PropTypes, Component } from 'react'
import { shareToTwitter, shareToFacebook } from '../utils/helpers'

export default class GifCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHovered: false,
    }
  }
  mouseOver() {
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
    let isVisible = this.state.isHovered ? 'fadeIn' : 'fadeOut'
    let displayURL = this.state.isHovered ? this.props.gifURL : this.props.stillURL
    let enlarge = this.state.isHovered ? 'enlarge' : ''
    return (
      <li
        onMouseOver={() => this.mouseOver()}
        onMouseOut={() => this.mouseOut()}
        style={{ animationDelay }}
        className={`card ${enlarge}`}
      >
        <img
          alt={this.props.gifURL}
          src={displayURL}
        />
        <a href={shareToTwitter(this.props.shareURL)} target='_blank'>
          <i className={`fa fa-twitter icon twitter ${isVisible}`}></i>
        </a>
        <a href={shareToFacebook(this.props.shareURL)} target='_blank'>
          <i className={`fa fa-facebook icon facebook ${isVisible}`}></i>
        </a>
      </li>
    )
  }
}

GifCard.propTypes = {
  idx: PropTypes.number.isRequired,
  stillURL: PropTypes.string.isRequired,
  gifURL: PropTypes.string.isRequired,
  shareURL: PropTypes.string.isRequired,
}
