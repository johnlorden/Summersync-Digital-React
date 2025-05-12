import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats1.css'

const Stats1 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="stats1-max-width thq-section-max-width">
        <div className="stats1-container2 thq-flex-column">
          <span className="thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="stats1-text31">
                  SummerSync Digital offers affordable and high-quality digital
                  solutions to elevate your online presence.
                </span>
              </Fragment>
            )}
          </span>
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="stats1-text24">
                  Transform Your Digital Presence
                </span>
              </Fragment>
            )}
          </h2>
          <p className="thq-body-large">
            {props.content2 ?? (
              <Fragment>
                <span className="stats1-text26">
                  Our team of creative teenagers ensures trend-informed content
                  and customized strategies for every client.
                </span>
              </Fragment>
            )}
          </p>
          <div className="stats1-container3">
            <div className="stats1-container4">
              <h2 className="thq-heading-2">
                {props.stat1 ?? (
                  <Fragment>
                    <span className="stats1-text29">Web Design</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat1Description ?? (
                  <Fragment>
                    <span className="stats1-text25">
                      Creating visually appealing and user-friendly websites
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats1-container5">
              <h2 className="thq-heading-2">
                {props.stat2 ?? (
                  <Fragment>
                    <span className="stats1-text21">Graphic Design</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat2Description ?? (
                  <Fragment>
                    <span className="stats1-text27">
                      Designing custom graphics for various digital platforms
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="stats1-container6">
            <div className="stats1-container7">
              <h2 className="thq-heading-2">
                {props.stat3 ?? (
                  <Fragment>
                    <span className="stats1-text28">Branding</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat3Description ?? (
                  <Fragment>
                    <span className="stats1-text30">
                      Developing unique brand identities to stand out in the
                      market
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats1-container8">
              <h2 className="thq-heading-2">
                {props.stat4 ?? (
                  <Fragment>
                    <span className="stats1-text22">
                      Social Media Management
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat4Description ?? (
                  <Fragment>
                    <span className="stats1-text23">
                      Managing social media accounts to engage with the audience
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="stats1-container9">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="thq-img-ratio-1-1 stats1-image"
          />
        </div>
      </div>
    </div>
  )
}

Stats1.defaultProps = {
  stat2: undefined,
  stat4: undefined,
  stat4Description: undefined,
  heading1: undefined,
  stat1Description: undefined,
  content2: undefined,
  stat2Description: undefined,
  image1Alt: 'Digital Solutions',
  stat3: undefined,
  stat1: undefined,
  stat3Description: undefined,
  content1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1613463455809-28608760827d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDgxMjkxN3w&ixlib=rb-4.0.3&q=80&w=1080',
}

Stats1.propTypes = {
  stat2: PropTypes.element,
  stat4: PropTypes.element,
  stat4Description: PropTypes.element,
  heading1: PropTypes.element,
  stat1Description: PropTypes.element,
  content2: PropTypes.element,
  stat2Description: PropTypes.element,
  image1Alt: PropTypes.string,
  stat3: PropTypes.element,
  stat1: PropTypes.element,
  stat3Description: PropTypes.element,
  content1: PropTypes.element,
  image1Src: PropTypes.string,
}

export default Stats1
