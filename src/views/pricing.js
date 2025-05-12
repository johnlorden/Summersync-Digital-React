import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer1 from '../components/footer1'
import './pricing.css'

const Pricing = (props) => {
  return (
    <div className="pricing-container10">
      <Helmet>
        <title>
          Pricing - SummerSync Digital | Youth-Driven Social Media & Design
          Services
        </title>
        <meta
          name="description"
          content="Youth Driven  Affordable Social media management, graphic design, and web development services"
        />
        <meta
          property="og:title"
          content="Pricing - SummerSync Digital | Youth-Driven Social Media &amp; Design Services"
        />
        <meta
          property="og:description"
          content="Youth Driven  Affordable Social media management, graphic design, and web development services"
        />
      </Helmet>
      <div className="pricing-container11"></div>
      <Navigation></Navigation>
      <div className="pricing-hero section-container">
        <div className="pricing-max-width1 max-content-container">
          <div className="pricing-heading-container">
            <h1 className="pricing-text10">
              Digital Solutions That Grow With Your Business
            </h1>
            <span className="pricing-text11">
              Youth-driven creativity meets professional digital services for
              businesses ready to thrive online
            </span>
            <button className="pricing-primary1 button-primary button-lg button">
              Get in touch with us
            </button>
          </div>
          <img
            alt="image"
            src="/Lumni Doodle/Editorial/lummi%20doodle%2010-300h.png"
            className="pricing-image"
          />
        </div>
      </div>
      <div className="pricing-pricing23 thq-section-padding">
        <div className="pricing-max-width2 thq-section-max-width">
          <div className="pricing-section-title">
            <span className="pricing-text12 thq-body-small">
              Choose the perfect package for your business
            </span>
            <div className="pricing-content">
              <h2 className="pricing-text13">
                {' '}
                Solutions Designed For Your Growth
              </h2>
              <p className="pricing-text14 thq-body-large">
                Affordable digital packages tailored to your business needs
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="pricing-container12">
            <div className="pricing-column1 thq-card">
              <div className="pricing-price1">
                <div className="pricing-price2">
                  <p className="pricing-text15">Startup Essentials</p>
                  <div className="pricing-container13">
                    <h3 className="pricing-text16 thq-heading-3">₱7,000</h3>
                    <h3 className="pricing-text17 thq-heading-3">/month</h3>
                  </div>
                </div>
                <div className="pricing-container14">
                  <span className="pricing-text18">
                    Social Media Management
                  </span>
                  <div className="pricing-container15">
                    <svg viewBox="0 0 48 48" className="pricing-icon10">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text19">
                      16 social media posts per month (4 per week) (Instagram
                      &amp; Facebook)
                    </span>
                  </div>
                  <div className="pricing-container16">
                    <svg viewBox="0 0 48 48" className="pricing-icon12">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text20">
                      Basic community engagement (Replying to Comments)
                    </span>
                  </div>
                  <div className="pricing-container17">
                    <svg viewBox="0 0 48 48" className="pricing-icon14">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text21">
                      Content calendar planning
                    </span>
                  </div>
                </div>
                <div className="pricing-container18">
                  <span className="pricing-text22">Graphic Design</span>
                  <div className="pricing-container19">
                    <svg viewBox="0 0 48 48" className="pricing-icon16">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text23">
                      16 custom graphics for social media posts
                    </span>
                  </div>
                  <div className="pricing-container20">
                    <svg viewBox="0 0 48 48" className="pricing-icon18">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text24">
                      1 promotional banner/ad design
                    </span>
                  </div>
                </div>
                <div className="pricing-container21">
                  <span className="pricing-text25">Virtual Assistance</span>
                  <div className="pricing-container22">
                    <svg viewBox="0 0 48 48" className="pricing-icon20">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text26">
                      Light administrative support monthly
                    </span>
                  </div>
                </div>
                <div className="pricing-container23">
                  <span className="pricing-text27">Website</span>
                  <div className="pricing-container24">
                    <svg viewBox="0 0 48 48" className="pricing-icon22">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text28">
                      Single-page static website setup and hosting
                    </span>
                  </div>
                  <div className="pricing-container25">
                    <svg viewBox="0 0 48 48" className="pricing-icon24">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text29">
                      Monthly content updates (up to 3 changes)
                    </span>
                  </div>
                  <div className="pricing-container26">
                    <svg viewBox="0 0 48 48" className="pricing-icon26">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text30">Basic SEO setup</span>
                  </div>
                </div>
              </div>
              <button className="pricing-primary2 button-primary button-lg button">
                Get in touch with us
              </button>
              <p className="pricing-text31 thq-body-large">
                <span className="pricing-text32">
                  Perfect for:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  New businesses just establishing their online presence
                </span>
              </p>
            </div>
            <div className="pricing-column2 thq-card">
              <div className="pricing-price3">
                <div className="pricing-price4">
                  <p className="pricing-text34">Growth Accelerator</p>
                  <div className="pricing-container27">
                    <h3 className="pricing-text35 thq-heading-3">₱9,000</h3>
                    <h3 className="pricing-text36 thq-heading-3">/month</h3>
                  </div>
                </div>
                <div className="pricing-container28">
                  <span className="pricing-text37">
                    Social Media Management
                  </span>
                  <div className="pricing-container29">
                    <svg viewBox="0 0 48 48" className="pricing-icon28">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text38">
                      <span>24 social media posts per month (6 per week) </span>
                      <br></br>
                      <span>(Instagram &amp; Facebook)</span>
                    </span>
                  </div>
                  <div className="pricing-container30">
                    <svg viewBox="0 0 48 48" className="pricing-icon30">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text42">
                      Daily community engagement (1hr per Day)
                    </span>
                  </div>
                  <div className="pricing-container31">
                    <svg viewBox="0 0 48 48" className="pricing-icon32">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text43">
                      Monthly Performance Report
                    </span>
                  </div>
                  <div className="pricing-container32">
                    <svg viewBox="0 0 48 48" className="pricing-icon34">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text44">
                      Content calendar planning
                    </span>
                  </div>
                </div>
                <div className="pricing-container33">
                  <span className="pricing-text45">Graphic Design</span>
                  <div className="pricing-container34">
                    <svg viewBox="0 0 48 48" className="pricing-icon36">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text46">
                      20 custom graphics for social media
                    </span>
                  </div>
                  <div className="pricing-container35">
                    <svg viewBox="0 0 48 48" className="pricing-icon38">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text47">
                      2 promotional designs monthly
                    </span>
                  </div>
                  <div className="pricing-container36">
                    <svg viewBox="0 0 48 48" className="pricing-icon40">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text48">
                      Basic branding kit (logo refinement, color palette,
                      typography)
                    </span>
                  </div>
                </div>
                <div className="pricing-container37">
                  <span className="pricing-text49">Virtual Assistance</span>
                  <div className="pricing-container38">
                    <svg viewBox="0 0 48 48" className="pricing-icon42">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text50">
                      Light administrative support monthly
                    </span>
                  </div>
                  <div className="pricing-container39">
                    <svg viewBox="0 0 48 48" className="pricing-icon44">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text51">
                      Email management assistance
                    </span>
                  </div>
                </div>
                <div className="pricing-container40">
                  <span className="pricing-text52">Website</span>
                  <div className="pricing-container41">
                    <svg viewBox="0 0 48 48" className="pricing-icon46">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text53">
                      4-page responsive static website
                    </span>
                  </div>
                  <div className="pricing-container42">
                    <svg viewBox="0 0 48 48" className="pricing-icon48">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text54">
                      Monthly content updates (up to 6 changes)
                    </span>
                  </div>
                  <div className="pricing-container43">
                    <svg viewBox="0 0 48 48" className="pricing-icon50">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text55">Basic SEO setup</span>
                  </div>
                </div>
              </div>
              <button className="pricing-primary3 button-primary button-lg button">
                Get in touch with us
              </button>
              <p className="pricing-text56 thq-body-large">
                <span className="pricing-text57">
                  Perfect for:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  Established businesses looking to enhance their digital
                  footprint
                </span>
              </p>
            </div>
          </div>
          <div className="pricing-column3 thq-card">
            <div className="pricing-price5">
              <div className="pricing-price6">
                <p className="pricing-text59">Professional Presence</p>
                <div className="pricing-container44">
                  <h3 className="pricing-text60 thq-heading-3">₱13,000</h3>
                  <h3 className="pricing-text61 thq-heading-3">/month</h3>
                </div>
              </div>
              <div className="pricing-container45">
                <div className="pricing-container46">
                  <span className="pricing-text62">
                    Social Media Management
                  </span>
                  <div className="pricing-container47">
                    <svg viewBox="0 0 48 48" className="pricing-icon52">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text63">
                      30 social media posts per month (7-8 per week)
                    </span>
                  </div>
                  <div className="pricing-container48">
                    <svg viewBox="0 0 48 48" className="pricing-icon54">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text64">
                      Content across 3 platforms
                    </span>
                  </div>
                  <div className="pricing-container49">
                    <svg viewBox="0 0 48 48" className="pricing-icon56">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text65">
                      Daily engagement and community building
                    </span>
                  </div>
                </div>
                <div className="pricing-container50">
                  <span className="pricing-text66">Graphic Design</span>
                  <div className="pricing-container51">
                    <svg viewBox="0 0 48 48" className="pricing-icon58">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text67">
                      30 custom graphics for social media
                    </span>
                  </div>
                  <div className="pricing-container52">
                    <svg viewBox="0 0 48 48" className="pricing-icon60">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text68">
                      4 promotional designs monthly
                    </span>
                  </div>
                  <div className="pricing-container53">
                    <svg viewBox="0 0 48 48" className="pricing-icon62">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text69">
                      Monthly themed campaign concepts
                    </span>
                  </div>
                </div>
                <div className="pricing-container54">
                  <span className="pricing-text70">Virtual Assistance</span>
                  <div className="pricing-container55">
                    <svg viewBox="0 0 48 48" className="pricing-icon64">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text71">
                      Light administrative support
                    </span>
                  </div>
                  <div className="pricing-container56">
                    <svg viewBox="0 0 48 48" className="pricing-icon66">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text72">
                      Customer inquiry management
                    </span>
                  </div>
                  <div className="pricing-container57">
                    <svg viewBox="0 0 48 48" className="pricing-icon68">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text73">
                      Email management assistance
                    </span>
                  </div>
                </div>
                <div className="pricing-container58">
                  <span className="pricing-text74">Website</span>
                  <div className="pricing-container59">
                    <svg viewBox="0 0 48 48" className="pricing-icon70">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text75">
                      10-page responsive static website with contact forms
                    </span>
                  </div>
                  <div className="pricing-container60">
                    <svg viewBox="0 0 48 48" className="pricing-icon72">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text76">
                      Bi-weekly content updates
                    </span>
                  </div>
                  <div className="pricing-container61">
                    <svg viewBox="0 0 48 48" className="pricing-icon74">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="pricing-text77">
                      Basic SEO implementation
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button className="pricing-primary4 button-primary button-lg button">
              Get in touch with us
            </button>
            <p className="pricing-text78 thq-body-large">
              <span className="pricing-text79">Perfect for</span>
              <span>
                : Growing businesses ready to establish a consistent
                professional online presence
              </span>
            </p>
          </div>
          <div className="pricing-column4 thq-card">
            <div className="pricing-price7">
              <div className="pricing-price8">
                <p className="pricing-text81">Custom Package</p>
                <div className="pricing-container62">
                  <h3 className="pricing-text82 thq-heading-3">₱Custom</h3>
                  <h3 className="pricing-text83 thq-heading-3">/month</h3>
                </div>
              </div>
            </div>
            <span className="pricing-text84">
              Got different needs or a different budget? Reach out to us today,
              and let&apos;s work together to create a custom package that fits
              your business perfectly!
            </span>
            <button className="pricing-primary5 button-primary button-lg button">
              Get in touch with us
            </button>
          </div>
        </div>
        <p className="pricing-text85 thq-body-large">
          All packages include monthly consultation calls and regular progress
          updates
        </p>
      </div>
      <Footer1
        text={
          <Fragment>
            <span className="pricing-text86">
              <span>© 2025 SummerSync Digital All rights reserved.</span>
              <span className="pricing-text88"> </span>
              <span>
                | Owned by
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="pricing-text90">johnlorden.online</span>
            </span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="pricing-text91">
              &quot;Fresh minds online, watch your business shine&quot;
            </span>
          </Fragment>
        }
        text13={
          <Fragment>
            <span className="pricing-text92">hello@summersync.digital</span>
          </Fragment>
        }
        text14={
          <Fragment>
            <span className="pricing-text93">+63 (969) 269-0882</span>
          </Fragment>
        }
        rootClassName="footer1root-class-name2"
      ></Footer1>
    </div>
  )
}

export default Pricing
