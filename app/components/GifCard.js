import React, { PropTypes, Component } from 'react'
import { shareToTwitter, shareToFacebook } from '../utils/helpers'

const GifBtn = ({ link, animation, iconType }) =>
  <a href={link} target='_blank'>
    <i className={`icon fa fa-${iconType} ${iconType} ${animation}`}></i>
  </a>

GifBtn.propTypes = {
  link: PropTypes.any,
  iconType: PropTypes.string.isRequired,
  animation: PropTypes.string.isRequired,
}

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
    const animation = this.state.isHovered ? 'fadeIn' : 'fadeOut'
    const displayURL = this.state.isHovered ? this.props.gifURL : this.props.stillURL
    const enlarge = this.state.isHovered ? 'enlarge' : ''
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
        <GifBtn animation={animation} iconType={'external-link'} link={this.props.pageURL} />
        <GifBtn animation={animation} iconType={'twitter'} link={shareToTwitter(this.props.shareURL)} />
        <GifBtn animation={animation} iconType={'facebook'} link={shareToFacebook(this.props.shareURL)} />
      </li>
    )
  }
}

GifCard.propTypes = {
  idx: PropTypes.number.isRequired,
  stillURL: PropTypes.string.isRequired,
  gifURL: PropTypes.string.isRequired,
  shareURL: PropTypes.string.isRequired,
  pageURL: PropTypes.string.isRequired,
}
