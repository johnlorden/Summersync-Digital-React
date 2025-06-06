import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './portofolio-card.css'

const PortofolioCard = (props) => {
  return (
    <div className={`portofolio-card-speaker-card ${props.rootClassName} `}>
      <div className="portofolio-card-image-container">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="portofolio-card-image"
        />
        <div className="portofolio-card-see-project-container">
          <Link
            to="/contact"
            className="portofolio-card-navlink button-secondary-white button button-md"
          >
            Get in Touch
          </Link>
        </div>
      </div>
      <span className="portofolio-card-first-name">{props.projectTitle}</span>
    </div>
  )
}

PortofolioCard.defaultProps = {
  rootClassName: '',
  projectTitle: 'Office Life Campaign - Boost your creativity',
  imageAlt: 'image',
  imageSrc:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&ixlib=rb-1.2.1&w=300',
}

PortofolioCard.propTypes = {
  rootClassName: PropTypes.string,
  projectTitle: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default PortofolioCard
