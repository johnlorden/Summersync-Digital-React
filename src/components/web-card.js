import React from 'react'

import PropTypes from 'prop-types'

import './web-card.css'

const WebCard = (props) => {
  return (
    <a
      href={props.text}
      target="_blank"
      rel="noreferrer noopener"
      className="web-card-link"
    >
      <div className="web-card-web-card">
        <div className="web-card-container">
          <button className="web-card-button1 button-secondary button">
            {props.button1}
          </button>
          <button className="web-card-button2 button-secondary button">
            {props.button11}
          </button>
        </div>
        <img
          alt={props.imageAlt}
          src={props.imageSrc2}
          loading="lazy"
          className="web-card-image"
        />
        <span className="web-card-text">{props.text}</span>
      </div>
    </a>
  )
}

WebCard.defaultProps = {
  button11: 'Web Design',
  rootClassName: '',
  imageAlt: 'image',
  button1: 'Web Design',
  text: 'www.example.com',
  imageSrc2: '/rectangle 99.png',
}

WebCard.propTypes = {
  button11: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  button1: PropTypes.string,
  text: PropTypes.string,
  imageSrc2: PropTypes.string,
}

export default WebCard
