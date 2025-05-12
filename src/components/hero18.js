import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero18.css'

const Hero18 = (props) => {
  return (
    <div className="hero18-header5">
      <div className="hero18-container1">
        <div className="hero18-background-overlay thq-section-padding">
          <img
            alt={props.heroImgBackgroundAlt}
            src={props.heroImgBackgroundSrc}
            className="hero18-image"
          />
          <div className="hero18-content1">
            <div className="hero18-max-width1 thq-section-max-width">
              <div className="hero18-column thq-card">
                <div className="hero18-content2">
                  <h1 className="hero18-text1 thq-heading-1">
                    {props.heading1 ?? (
                      <Fragment>
                        <span className="hero18-text5">
                          Unlock Your Brand&apos;s Potential with Our Creative
                          Services
                        </span>
                      </Fragment>
                    )}
                  </h1>
                  <p className="hero18-text2 thq-body-large">
                    {props.content1 ?? (
                      <Fragment>
                        <span className="hero18-text4">
                          We are a full-service digital creative agency
                          dedicated to crafting unique and engaging designs that
                          elevate your brand. From branding to web design,
                          social media management, and UI/UX, we&apos;ve got you
                          covered.
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <div className="hero18-actions">
                    <button className="thq-button-filled thq-button-animated hero18-button">
                      <span className="thq-body-small">
                        {props.action1 ?? (
                          <Fragment>
                            <span className="hero18-text6">
                              Explore Our Services
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero18-sticky-container thq-section-padding">
          <div className="hero18-max-width2 thq-section-max-width">
            <div className="hero18-content3">
              <div className="hero18-row-container1 thq-animated-group-container-horizontal">
                <div className="thq-animated-group-horizontal">
                  <img
                    alt={props.product1ImgAlt}
                    src={props.product1ImgSrc}
                    className="hero18-product1-img thq-img-scale thq-img-ratio-1-1"
                  />
                  <img
                    alt={props.product2ImgAlt}
                    src={props.product2ImgSrc}
                    className="hero18-product2-img thq-img-scale thq-img-ratio-1-1"
                  />
                  <img
                    alt={props.product3ImgAlt}
                    src={props.product3ImgSrc}
                    className="hero18-product3-img thq-img-scale thq-img-ratio-1-1"
                  />
                  <img
                    alt={props.product4ImgAlt}
                    src={props.product4ImgSrc}
                    className="hero18-product4-img thq-img-scale thq-img-ratio-1-1"
                  />
                  <img
                    alt={props.product5ImgAlt}
                    src={props.product5ImgSrc}
                    className="hero18-product5-img thq-img-scale thq-img-ratio-1-1"
                  />
                  <img
                    alt={props.product6ImgAlt}
                    src={props.product6ImgSrc}
                    className="hero18-product6-img thq-img-scale thq-img-ratio-1-1"
                  />
                </div>
                <div className="thq-animated-group-horizontal">
                  <img
                    alt={props.product1ImgAlt}
                    src={props.product1ImgSrc}
                    className="hero18-product-img1 thq-img-scale thq-img-ratio-1-1"
                  />
                  <img
                    alt={props.product2ImgAlt}
                    src={props.product2ImgSrc}
                    className="hero18-product-img2 thq-img-scale thq-img-ratio-1-1"
                  />
                  <img
                    alt={props.product3ImgAlt}
                    src={props.product3ImgSrc}
                    className="hero18-product-img3 thq-img-scale thq-img-ratio-1-1"
                  />
                  <img
                    alt={props.product4ImgAlt}
                    src={props.product4ImgSrc}
                    className="hero18-product-img4 thq-img-scale thq-img-ratio-1-1"
                  />
                  <img
                    alt={props.product5ImgAlt}
                    src={props.product5ImgSrc}
                    className="hero18-product-img5 thq-img-scale thq-img-ratio-1-1"
                  />
                  <img
                    alt={props.product6ImgAlt}
                    src={props.product6ImgSrc}
                    className="hero18-product-img6 thq-img-scale thq-img-ratio-1-1"
                  />
                </div>
              </div>
              <div className="hero18-row-container2 thq-animated-group-container-horizontal">
                <div className="thq-animated-group-horizontal-reverse">
                  <img
                    alt="Hero Image"
                    src="https://images.unsplash.com/photo-1561212044-bac5ef688a07?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1000"
                    className="hero18-product-img7 thq-img-scale thq-img-ratio-1-1"
                  />
                  <img
                    alt="Hero Image"
                    src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1000"
                    className="hero18-product-img8 thq-img-scale thq-img-ratio-1-1"
                  />
                  <img
                    alt="Hero Image"
                    src="https://images.unsplash.com/photo-1506259091721-347e791bab0f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1000"
                    className="hero18-product-img9 thq-img-scale thq-img-ratio-1-1"
                  />
                  <img
                    alt="Hero Image"
                    src="https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1000"
                    className="hero18-product-img10 thq-img-scale thq-img-ratio-1-1"
                  />
                  <img
                    alt="Hero Image"
                    src="https://images.unsplash.com/photo-1524169358666-79f22534bc6e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI3fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1000"
                    className="hero18-product-img11 thq-img-scale thq-img-ratio-1-1"
                  />
                  <img
                    alt="Hero Image"
                    src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1000"
                    className="hero18-product-img12 thq-img-scale thq-img-ratio-1-1"
                  />
                </div>
                <div className="thq-animated-group-horizontal-reverse">
                  <img
                    alt="Hero Image"
                    src="https://images.unsplash.com/photo-1561212044-bac5ef688a07?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1000"
                    className="hero18-placeholder-image1 thq-img-scale thq-img-ratio-1-1"
                  />
                  <img
                    alt="Hero Image"
                    src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1000"
                    className="hero18-placeholder-image2 thq-img-scale thq-img-ratio-1-1"
                  />
                  <img
                    alt="Hero Image"
                    src="https://images.unsplash.com/photo-1506259091721-347e791bab0f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1000"
                    className="hero18-placeholder-image3 thq-img-scale thq-img-ratio-1-1"
                  />
                  <img
                    alt="Hero Image"
                    src="https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1000"
                    className="hero18-placeholder-image4 thq-img-scale thq-img-ratio-1-1"
                  />
                  <img
                    alt="Hero Image"
                    src="https://images.unsplash.com/photo-1524169358666-79f22534bc6e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI3fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1000"
                    className="hero18-placeholder-image5 thq-img-scale thq-img-ratio-1-1"
                  />
                  <img
                    alt="Hero Image"
                    src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1000"
                    className="hero18-placeholder-image6 thq-img-scale thq-img-ratio-1-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="hero18-container3">
          <React.Fragment>
            <React.Fragment>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n  @keyframes scroll-x {\n    from {\n      transform: translateX(0);\n    }\n    to {\n      transform: translateX(calc(-100% - 16px));\n    }\n  }\n\n  @keyframes scroll-y {\n    from {\n      transform: translateY(0);\n    }\n    to {\n      transform: translateY(calc(-100% - 16px));\n    }\n  }\n',
                }}
              />
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
    </div>
  )
}

Hero18.defaultProps = {
  content1: undefined,
  product5ImgAlt: 'product 5',
  product3ImgAlt: 'product 3',
  product3ImgSrc:
    'https://images.unsplash.com/photo-1468421870903-4df1664ac249?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDYxMjQ4MHw&ixlib=rb-4.0.3&q=80&w=1000',
  heroImgBackgroundSrc:
    'https://images.unsplash.com/photo-1498612753354-772a30629934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDYxMjQ4MHw&ixlib=rb-4.0.3&q=80&w=1080',
  product4ImgSrc:
    'https://images.unsplash.com/photo-1609428079875-ae186c562aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDYxMjQ3OXw&ixlib=rb-4.0.3&q=80&w=1000',
  product6ImgSrc:
    'https://images.unsplash.com/photo-1504270997636-07ddfbd48945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDYxMjQ3OXw&ixlib=rb-4.0.3&q=80&w=1000',
  heroImgBackgroundAlt: 'Creative Agency Hero Image',
  heading1: undefined,
  product4ImgAlt: 'product 4',
  action1: undefined,
  product1ImgSrc:
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDYxMjQ3OXw&ixlib=rb-4.0.3&q=80&w=1000',
  product5ImgSrc:
    'https://images.unsplash.com/photo-1523289217630-0dd16184af8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDYxMjQ3OHw&ixlib=rb-4.0.3&q=80&w=1000',
  product2ImgAlt: 'product 2',
  product2ImgSrc:
    'https://images.unsplash.com/photo-1654015064357-0437ef521b0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDYxMjQ4MHw&ixlib=rb-4.0.3&q=80&w=1000',
  product1ImgAlt: 'product 1',
  product6ImgAlt: 'product 6',
}

Hero18.propTypes = {
  content1: PropTypes.element,
  product5ImgAlt: PropTypes.string,
  product3ImgAlt: PropTypes.string,
  product3ImgSrc: PropTypes.string,
  heroImgBackgroundSrc: PropTypes.string,
  product4ImgSrc: PropTypes.string,
  product6ImgSrc: PropTypes.string,
  heroImgBackgroundAlt: PropTypes.string,
  heading1: PropTypes.element,
  product4ImgAlt: PropTypes.string,
  action1: PropTypes.element,
  product1ImgSrc: PropTypes.string,
  product5ImgSrc: PropTypes.string,
  product2ImgAlt: PropTypes.string,
  product2ImgSrc: PropTypes.string,
  product1ImgAlt: PropTypes.string,
  product6ImgAlt: PropTypes.string,
}

export default Hero18
