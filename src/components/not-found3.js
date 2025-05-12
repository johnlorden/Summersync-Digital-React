import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './not-found3.css'

const NotFound3 = (props) => {
  return (
    <div className="not-found3-container thq-section-padding">
      <div className="not-found3-max-width">
        <h1 className="not-found3-text1 thq-heading-1">404</h1>
        <h2 className="not-found3-text2 thq-heading-2">Page not found</h2>
        <span className="not-found3-text3 thq-body-small">
          {props.content1 ?? (
            <Fragment>
              <span className="not-found3-text4">
                Oops! It looks like the page you&apos;re looking for
                doesn&apos;t exist.
              </span>
            </Fragment>
          )}
        </span>
        <button className="thq-button-filled">
          <span className="thq-body-small">
            {props.action1 ?? (
              <Fragment>
                <span className="not-found3-text5">
                  Click here to return to the homepage
                </span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

NotFound3.defaultProps = {
  content1: undefined,
  action1: undefined,
}

NotFound3.propTypes = {
  content1: PropTypes.element,
  action1: PropTypes.element,
}

export default NotFound3
