import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links-navlink1 Navigation-Link">
        {props.link1}
      </Link>
      <Link to="/about" className="navigation-links-navlink2 Navigation-Link">
        {props.link2}
      </Link>
      <span className="navigation-links-text Navigation-Link">
        {props.link3}
      </span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  link3: 'Portofolio',
  rootClassName: '',
  link2: 'About',
  link1: 'Home',
}

NavigationLinks.propTypes = {
  link3: PropTypes.string,
  rootClassName: PropTypes.string,
  link2: PropTypes.string,
  link1: PropTypes.string,
}

export default NavigationLinks
