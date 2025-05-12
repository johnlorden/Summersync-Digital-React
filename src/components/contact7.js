import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact7.css'

const Contact7 = (props) => {
  return (
    <div className="contact7-container1 thq-section-padding">
      <div className="contact7-max-width thq-section-max-width">
        <div className="contact7-content1 thq-flex-row">
          <div className="contact7-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact7-text18">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact7-text19">
                    123 Main Street, Boston, MA 02108
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact7-content3 thq-flex-row">
          <div className="contact7-container2">
            <img
              alt={props.location1ImgAlt}
              src={props.location1ImgSrc}
              className="contact7-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact7-text12 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact7-text17">Massachusetts Office</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact7-text16">
                    Visit our Massachusetts office for a consultation or to
                    discuss your project in person.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact7-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact7-container4">
            <img
              alt={props.location2ImgAlt}
              src={props.location2ImgSrc}
              className="contact7-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact7-text14 thq-heading-3">
              {props.location2 ?? (
                <Fragment>
                  <span className="contact7-text20">Online</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location2Description ?? (
                <Fragment>
                  <span className="contact7-text21">
                    Schedule an online meeting with our team to explore your
                    design needs and goals.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact7-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact7.defaultProps = {
  location2ImgSrc:
    'https://images.unsplash.com/photo-1698199071311-bd5fe0e37449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDYzNDczN3w&ixlib=rb-4.0.3&q=80&w=1080',
  location1Description: undefined,
  location2ImgAlt: 'Online Meeting Image',
  location1: undefined,
  heading1: undefined,
  location1ImgSrc:
    'https://images.unsplash.com/photo-1464699908537-0954e50791ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDYzNDczNnw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  location2: undefined,
  location1ImgAlt: 'Massachusetts Office Image',
  location2Description: undefined,
}

Contact7.propTypes = {
  location2ImgSrc: PropTypes.string,
  location1Description: PropTypes.element,
  location2ImgAlt: PropTypes.string,
  location1: PropTypes.element,
  heading1: PropTypes.element,
  location1ImgSrc: PropTypes.string,
  content1: PropTypes.element,
  location2: PropTypes.element,
  location1ImgAlt: PropTypes.string,
  location2Description: PropTypes.element,
}

export default Contact7
