import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer1.css'

const Footer1 = (props) => {
  return (
    <div className={`footer1-footer section-container ${props.rootClassName} `}>
      <span className="footer1-text10">
        {props.text1 ?? (
          <Fragment>
            <span className="footer1-text34">
              &quot;Fresh minds online, watch your business shine&quot;
            </span>
          </Fragment>
        )}
      </span>
      <div className="max-content-container">
        <div className="footer1-top-part">
          <div className="footer1-links-container">
            <div className="footer1-product-container">
              <span className="footer1-text11">Product</span>
              <Link to="/about" className="footer1-navlink1">
                About
              </Link>
              <span className="footer1-text12">Portofolio</span>
              <Link to="/pricing" className="footer1-navlink2">
                Pricing
              </Link>
              <Link to="/contact" className="footer1-navlink3">
                Contact
              </Link>
              <span className="footer1-text13">Blog</span>
            </div>
            <div className="footer1-navigate-container">
              <span className="footer1-text14">More</span>
              <span className="footer1-text15">Copyrights</span>
              <span className="footer1-text16">Sitemap</span>
              <span className="footer1-text17">Privacy Policy</span>
            </div>
            <div className="footer1-contact-container">
              <span className="footer1-text18">Contact Us</span>
              <span className="footer1-text19">
                <span>
                  Paniqui, Tarlac,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Philippines 2307</span>
              </span>
              <span className="footer1-text23">
                {props.text13 ?? (
                  <Fragment>
                    <span className="footer1-text27">
                      summersyncdigital@gmail.com
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="footer1-text24">
                {props.text14 ?? (
                  <Fragment>
                    <span className="footer1-text33">+63 (969) 269-0882</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <form
            name="newsletter-email"
            method="POST"
            target="blank"
            enctype="application/x-www-form-urlencoded"
            className="footer1-form"
          >
            <span className="footer1-text25">Subscribe to our newsletter</span>
            <input
              type="text"
              required
              placeholder="Enter your e-mail address"
              className="footer1-textinput1 input"
            />
            <input
              type="submit"
              name="submit"
              value="Subscribe"
              required
              className="footer1-textinput2 button-primary button"
            />
          </form>
        </div>
      </div>
      <div className="footer1-separator"></div>
      <footer className="footer1-max-width2 max-content-container">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="footer1-image"
        />
        <span className="footer1-text26">
          {props.text ?? (
            <Fragment>
              <span className="footer1-text28">
                <span>© 2025 SummerSync Digital All rights reserved.</span>
                <span className="footer1-text30"> </span>
                <span>
                  | Owned by
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="footer1-text32">johnlorden.online</span>
              </span>
            </Fragment>
          )}
        </span>
      </footer>
    </div>
  )
}

Footer1.defaultProps = {
  imageAlt: 'image',
  text13: undefined,
  text: undefined,
  text14: undefined,
  text1: undefined,
  imageSrc: '/summersync%20secondary-200h.png',
  rootClassName: '',
}

Footer1.propTypes = {
  imageAlt: PropTypes.string,
  text13: PropTypes.element,
  text: PropTypes.element,
  text14: PropTypes.element,
  text1: PropTypes.element,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Footer1
