import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './navbar4.css'

const Navbar4 = (props) => {
  return (
    <header className="navbar4-container">
      <header data-thq="thq-navbar" className="navbar4-navbar-interactive">
        <img
          alt={props.logoAlt}
          src={props.logoSrc}
          className="navbar4-image1"
        />
        <div data-thq="thq-navbar-nav" className="navbar4-desktop-menu">
          <nav className="navbar4-links1">
            <a href={props.link1Url} className="thq-body-small thq-link">
              {props.link1 ?? (
                <Fragment>
                  <span className="navbar4-text5">Home</span>
                </Fragment>
              )}
            </a>
            <a href={props.link2Url} className="thq-body-small thq-link">
              {props.link2 ?? (
                <Fragment>
                  <span className="navbar4-text8">Services</span>
                </Fragment>
              )}
            </a>
            <a href={props.link3Url} className="thq-body-small thq-link">
              {props.link3 ?? (
                <Fragment>
                  <span className="navbar4-text9">Portfolio</span>
                </Fragment>
              )}
            </a>
            <a href={props.link4Url} className="thq-body-small thq-link">
              {props.link4 ?? (
                <Fragment>
                  <span className="navbar4-text6">About Us</span>
                </Fragment>
              )}
            </a>
            <a href={props.link5Url} className="thq-body-small thq-link">
              {props.link5 ?? (
                <Fragment>
                  <span className="navbar4-text4">Contact</span>
                </Fragment>
              )}
            </a>
          </nav>
          <div className="navbar4-buttons1">
            <button className="navbar4-action11 thq-button-filled thq-button-animated">
              <span>
                {props.action1 ?? (
                  <Fragment>
                    <span className="navbar4-text3">Get Started</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="navbar4-action21 thq-button-outline thq-button-animated">
              <span>
                {props.action2 ?? (
                  <Fragment>
                    <span className="navbar4-text7">Learn More</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar4-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar4-icon1">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar4-mobile-menu">
          <div className="navbar4-nav">
            <div className="navbar4-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar4-logo"
              />
              <div data-thq="thq-close-menu" className="navbar4-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar4-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar4-links2">
              <a href={props.link1Url} className="thq-body-small thq-link">
                {props.link1 ?? (
                  <Fragment>
                    <span className="navbar4-text5">Home</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link2Url} className="thq-body-small thq-link">
                {props.link2 ?? (
                  <Fragment>
                    <span className="navbar4-text8">Services</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link3Url} className="thq-body-small thq-link">
                {props.link3 ?? (
                  <Fragment>
                    <span className="navbar4-text9">Portfolio</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link4Url} className="thq-body-small thq-link">
                {props.link4 ?? (
                  <Fragment>
                    <span className="navbar4-text6">About Us</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link5Url} className="thq-body-small thq-link">
                {props.link5 ?? (
                  <Fragment>
                    <span className="navbar4-text4">Contact</span>
                  </Fragment>
                )}
              </a>
            </nav>
          </div>
          <div className="navbar4-buttons2">
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar4.defaultProps = {
  action1: undefined,
  link5: undefined,
  link2Url: 'https://www.teleporthq.io',
  link1: undefined,
  logoAlt: 'Agency Logo',
  link5Url: 'https://www.teleporthq.io',
  link4: undefined,
  link3Url: 'https://www.teleporthq.io',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  action2: undefined,
  link1Url: 'https://www.teleporthq.io',
  link2: undefined,
  link4Url: 'https://www.teleporthq.io',
  link3: undefined,
}

Navbar4.propTypes = {
  action1: PropTypes.element,
  link5: PropTypes.element,
  link2Url: PropTypes.string,
  link1: PropTypes.element,
  logoAlt: PropTypes.string,
  link5Url: PropTypes.string,
  link4: PropTypes.element,
  link3Url: PropTypes.string,
  logoSrc: PropTypes.string,
  action2: PropTypes.element,
  link1Url: PropTypes.string,
  link2: PropTypes.element,
  link4Url: PropTypes.string,
  link3: PropTypes.element,
}

export default Navbar4
