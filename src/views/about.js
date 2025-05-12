import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer1 from '../components/footer1'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container10">
      <Helmet>
        <title>
          About - SummerSync Digital | Youth-Driven Social Media & Design
          Services
        </title>
        <meta
          name="description"
          content="Youth Driven  Affordable Social media management, graphic design, and web development services"
        />
        <meta
          property="og:title"
          content="About - SummerSync Digital | Youth-Driven Social Media &amp; Design Services"
        />
        <meta
          property="og:description"
          content="Youth Driven  Affordable Social media management, graphic design, and web development services"
        />
      </Helmet>
      <div className="about-container11"></div>
      <Navigation></Navigation>
      <div className="about-hero section-container">
        <div className="about-max-width1 max-content-container">
          <div className="about-heading-container">
            <h1 className="about-text100">
              Digital Solutions That Grow With Your Business
            </h1>
            <span className="about-text101">
              Youth-driven creativity meets professional digital services for
              businesses ready to thrive online
            </span>
            <button className="about-primary1 button-primary button-lg button">
              Get in touch with us
            </button>
          </div>
          <img
            alt="image"
            src="/Lumni Doodle/Editorial/lummi%20doodle%2012-500w.png"
            className="about-image1"
          />
        </div>
      </div>
      <div className="about-about1 section-container">
        <div className="about-max-width2 max-content-container">
          <div className="about-text-container1">
            <span className="about-text102">about us</span>
            <h2 className="about-text103">Our Story</h2>
            <span className="about-text104">
              <span>
                SummerSync Digital was born during a summer break when a group
                of creative, tech-savvy teenagers decided to transform their
                collective digital skills into something more. What started as
                friends collaborating on small projects has evolved into a
                dedicated digital services agency with a mission to help local
                businesses thrive online.
              </span>
              <br></br>
              <br></br>
              <span>
                Founded on the belief that youth perspective brings unique value
                to digital marketing, our team combines fresh creativity with
                professional execution. Our name—SummerSync—reflects both our
                origins and our commitment to synchronizing businesses with
                modern digital trends.
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="about-about2 section-container">
        <div className="about-max-width3 max-content-container">
          <div className="about-image-container1">
            <img
              alt="image"
              src="/Lumni Doodle/Editorial/lummi%20doodle%2002-1000w.png"
              className="about-image2"
            />
          </div>
          <div className="about-text-container2">
            <span className="about-text109">about us</span>
            <h2 className="about-text110">Our Approach</h2>
            <span className="about-text111">
              At SummerSync Digital, we believe that effective digital presence
              requires more than just technical knowledge—it demands an
              authentic understanding of current trends and audience behaviors.
            </span>
          </div>
        </div>
      </div>
      <div className="about-about3 section-container">
        <div className="about-max-width4 max-content-container">
          <div className="about-text-container3">
            <span className="about-text112">about us</span>
            <h2 className="about-text113">Who we are</h2>
            <span className="about-text114">
              <span>
                We are a team of young digital natives with complementary skills
                in graphic design, social media management, web development, and
                virtual assistance. Despite our youth, we bring both formal
                training and practical experience to every project.
              </span>
              <br></br>
              <br></br>
              <span>
                Our team&apos;s strength lies in our diversity of talents. Some
                of us excel in visual design, others in written communication,
                while others bring technical expertise or client management
                skills. Together, we create a well-rounded agency capable of
                handling comprehensive digital needs.
              </span>
            </span>
          </div>
          <div className="about-image-container2">
            <img
              alt="image"
              src="/Lumni Doodle/Editorial/lummi%20doodle%2011-1000w.png"
              className="about-image3"
            />
          </div>
        </div>
      </div>
      <div className="thq-section-padding">
        <div className="about-max-width5 thq-section-max-width">
          <div className="about-section-title1">
            <div className="about-content10">
              <h2 className="about-text119">Meet Our Team</h2>
            </div>
            <span className="about-text120 thq-body-small">
              Our team of creative teenagers is passionate about delivering
              top-notch digital solutions to help small businesses succeed
              online.
            </span>
          </div>
          <div className="about-content11">
            <div className="about-content12">
              <div className="about-row1">
                <div className="about-card1">
                  <img
                    alt="Image of Alice Smith"
                    src="/lorden-adminmanager-600w.jpg"
                    className="about-placeholder-image1 thq-img-ratio-1-1"
                  />
                  <div className="about-content13">
                    <div className="about-title1">
                      <span className="about-text121 thq-body-small">
                        John Lorden
                      </span>
                      <span className="about-text122 thq-body-small">
                        Founder &amp; Project Manager
                      </span>
                    </div>
                  </div>
                </div>
                <div className="about-card2">
                  <img
                    alt="Image of Bob Johnson"
                    src="/summersync%20icon-1-600w.jpg"
                    className="about-placeholder-image2 thq-img-ratio-1-1"
                  />
                  <div className="about-content14">
                    <div className="about-title2">
                      <span className="about-text123 thq-body-small">
                        Yeshia Mae P.
                      </span>
                      <span className="about-text124 thq-body-small">
                        Co-Founder, Designer &amp; VA
                      </span>
                    </div>
                  </div>
                </div>
                <div className="about-card3">
                  <img
                    alt="Image of Alex Chen"
                    src="/summersync%20icon-600w.jpg"
                    className="about-placeholder-image3 thq-img-ratio-1-1"
                  />
                  <div className="about-content15">
                    <div className="about-title3">
                      <span className="about-text125 thq-body-small">
                        Corrine B.
                      </span>
                      <span className="about-text126 thq-body-small">
                        Content Specialist &amp; VA
                      </span>
                    </div>
                  </div>
                </div>
                <div className="about-card4">
                  <img
                    alt="Image of Grace Wang"
                    src="/summersync%20icon-1-600w.jpg"
                    className="about-placeholder-image4 thq-img-ratio-1-1"
                  />
                  <div className="about-content16">
                    <div className="about-title4">
                      <span className="about-text127 thq-body-small">
                        Lovely A.
                      </span>
                      <span className="about-text128 thq-body-small">
                        Customer Support Specialist
                      </span>
                    </div>
                  </div>
                </div>
                <div className="about-card5">
                  <img
                    alt="Image of David Lee"
                    src="/summersync%20icon-2-600w.jpg"
                    className="about-placeholder-image5 thq-img-ratio-1-1"
                  />
                  <div className="about-content17">
                    <div className="about-title5">
                      <span className="about-text129 thq-body-small">
                        Raf Elijah F.
                      </span>
                      <span className="about-text130 thq-body-small">VA</span>
                    </div>
                  </div>
                </div>
                <div className="about-card6">
                  <img
                    alt="Image of Eva Brown"
                    src="/summersync%20icon-3-600w.jpg"
                    className="about-placeholder-image6 thq-img-ratio-1-1"
                  />
                  <div className="about-content18">
                    <div className="about-title6">
                      <span className="about-text131 thq-body-small">
                        Aishe Angelique F.
                      </span>
                      <span className="about-text132 thq-body-small">VA</span>
                    </div>
                  </div>
                </div>
                <div className="about-card7">
                  <img
                    alt="Image of Alex Chen"
                    src="/summersync%20icon-2-600w.jpg"
                    className="about-placeholder-image7 thq-img-ratio-1-1"
                  />
                  <div className="about-content19">
                    <div className="about-title7">
                      <span className="about-text133 thq-body-small">
                        Ayesa Mae B.
                      </span>
                      <span className="about-text134 thq-body-small">VA</span>
                    </div>
                  </div>
                </div>
                <div className="about-card8">
                  <img
                    alt="Image of Alex Chen"
                    src="/summersync%20icon-3-600w.jpg"
                    className="about-placeholder-image8 thq-img-ratio-1-1"
                  />
                  <div className="about-content20">
                    <div className="about-title8">
                      <span className="about-text135 thq-body-small">
                        Prince A.
                      </span>
                      <span className="about-text136 thq-body-small">VA</span>
                    </div>
                  </div>
                </div>
                <div className="about-card9">
                  <img
                    alt="Image of Alex Chen"
                    src="/summersync%20icon-2-600w.jpg"
                    className="about-placeholder-image9 thq-img-ratio-1-1"
                  />
                  <div className="about-content21">
                    <div className="about-title9">
                      <span className="about-text137 thq-body-small">
                        Jhaylord S.
                      </span>
                      <span className="about-text138 thq-body-small">VA</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-row2"></div>
            </div>
            <div className="about-content22">
              <div className="about-content23">
                <h2 className="about-text139">Grow With Us, Create With Us</h2>
                <span className="about-text140 thq-body-small">
                  Talented young digital creators wanted for a collaborative
                  journey in professional growth
                </span>
              </div>
              <button className="about-primary2 button-primary button-lg button">
                Check for Open Positions
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="about-pricing23 thq-section-padding">
        <div className="about-max-width6 thq-section-max-width">
          <div className="about-section-title2">
            <span className="about-text141 thq-body-small">
              Choose the perfect package for your business
            </span>
            <div className="about-content24">
              <h2 className="about-text142">
                {' '}
                Solutions Designed For Your Growth
              </h2>
              <p className="about-text143 thq-body-large">
                Affordable digital packages tailored to your business needs
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className="about-container12">
            <div className="about-column1 thq-card">
              <div className="about-price1">
                <div className="about-price2">
                  <p className="about-text144">Startup Essentials</p>
                  <div className="about-container13">
                    <h3 className="about-text145 thq-heading-3">₱7,000</h3>
                    <h3 className="about-text146 thq-heading-3">/month</h3>
                  </div>
                </div>
                <div className="about-container14">
                  <span className="about-text147">Social Media Management</span>
                  <div className="about-container15">
                    <svg viewBox="0 0 48 48" className="about-icon10">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text148">
                      16 social media posts per month (4 per week) (Instagram
                      &amp; Facebook)
                    </span>
                  </div>
                  <div className="about-container16">
                    <svg viewBox="0 0 48 48" className="about-icon12">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text149">
                      Basic community engagement (Replying to Comments)
                    </span>
                  </div>
                  <div className="about-container17">
                    <svg viewBox="0 0 48 48" className="about-icon14">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text150">
                      Content calendar planning
                    </span>
                  </div>
                </div>
                <div className="about-container18">
                  <span className="about-text151">Graphic Design</span>
                  <div className="about-container19">
                    <svg viewBox="0 0 48 48" className="about-icon16">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text152">
                      16 custom graphics for social media posts
                    </span>
                  </div>
                  <div className="about-container20">
                    <svg viewBox="0 0 48 48" className="about-icon18">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text153">
                      1 promotional banner/ad design
                    </span>
                  </div>
                </div>
                <div className="about-container21">
                  <span className="about-text154">Virtual Assistance</span>
                  <div className="about-container22">
                    <svg viewBox="0 0 48 48" className="about-icon20">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text155">
                      3 hours of administrative support monthly
                    </span>
                  </div>
                </div>
                <div className="about-container23">
                  <span className="about-text156">Website</span>
                  <div className="about-container24">
                    <svg viewBox="0 0 48 48" className="about-icon22">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text157">
                      Single-page website setup and hosting
                    </span>
                  </div>
                  <div className="about-container25">
                    <svg viewBox="0 0 48 48" className="about-icon24">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text158">
                      Monthly content updates (up to 3 changes)
                    </span>
                  </div>
                </div>
              </div>
              <button className="about-primary3 button-primary button-lg button">
                Get in touch with us
              </button>
              <p className="about-text159 thq-body-large">
                <span className="about-text160">
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
            <div className="about-column2 thq-card">
              <div className="about-price3">
                <div className="about-price4">
                  <p className="about-text162">Growth Accelerator</p>
                  <div className="about-container26">
                    <h3 className="about-text163 thq-heading-3">₱9,000</h3>
                    <h3 className="about-text164 thq-heading-3">/month</h3>
                  </div>
                </div>
                <div className="about-container27">
                  <span className="about-text165">Social Media Management</span>
                  <div className="about-container28">
                    <svg viewBox="0 0 48 48" className="about-icon26">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text166">
                      <span>24 social media posts per month (6 per week) </span>
                      <br></br>
                      <span>(Instagram &amp; Facebook)</span>
                    </span>
                  </div>
                  <div className="about-container29">
                    <svg viewBox="0 0 48 48" className="about-icon28">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text170">
                      Daily community engagement (1hr per Day)
                    </span>
                  </div>
                  <div className="about-container30">
                    <svg viewBox="0 0 48 48" className="about-icon30">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text171">
                      Monthly Performance Report
                    </span>
                  </div>
                  <div className="about-container31">
                    <svg viewBox="0 0 48 48" className="about-icon32">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text172">
                      Content calendar planning
                    </span>
                  </div>
                </div>
                <div className="about-container32">
                  <span className="about-text173">Graphic Design</span>
                  <div className="about-container33">
                    <svg viewBox="0 0 48 48" className="about-icon34">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text174">
                      20 custom graphics for social media
                    </span>
                  </div>
                  <div className="about-container34">
                    <svg viewBox="0 0 48 48" className="about-icon36">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text175">
                      2 promotional designs monthly
                    </span>
                  </div>
                  <div className="about-container35">
                    <svg viewBox="0 0 48 48" className="about-icon38">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text176">
                      Basic branding kit (logo refinement, color palette,
                      typography)
                    </span>
                  </div>
                </div>
                <div className="about-container36">
                  <span className="about-text177">Virtual Assistance</span>
                  <div className="about-container37">
                    <svg viewBox="0 0 48 48" className="about-icon40">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text178">
                      8 hours of administrative support monthly
                    </span>
                  </div>
                  <div className="about-container38">
                    <svg viewBox="0 0 48 48" className="about-icon42">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text179">
                      Email management assistance
                    </span>
                  </div>
                </div>
                <div className="about-container39">
                  <span className="about-text180">Website</span>
                  <div className="about-container40">
                    <svg viewBox="0 0 48 48" className="about-icon44">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text181">
                      5-page responsive website
                    </span>
                  </div>
                  <div className="about-container41">
                    <svg viewBox="0 0 48 48" className="about-icon46">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text182">
                      Monthly content updates (up to 6 changes)
                    </span>
                  </div>
                  <div className="about-container42">
                    <svg viewBox="0 0 48 48" className="about-icon48">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text183">Basic SEO setup</span>
                  </div>
                </div>
              </div>
              <button className="about-primary4 button-primary button-lg button">
                Get in touch with us
              </button>
              <p className="about-text184 thq-body-large">
                <span className="about-text185">
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
          <div className="about-column3 thq-card">
            <div className="about-price5">
              <div className="about-price6">
                <p className="about-text187">Professional Presence</p>
                <div className="about-container43">
                  <h3 className="about-text188 thq-heading-3">₱13,000</h3>
                  <h3 className="about-text189 thq-heading-3">/month</h3>
                </div>
              </div>
              <div className="about-container44">
                <div className="about-container45">
                  <span className="about-text190">Social Media Management</span>
                  <div className="about-container46">
                    <svg viewBox="0 0 48 48" className="about-icon50">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text191">
                      30 social media posts per month (7-8 per week)
                    </span>
                  </div>
                  <div className="about-container47">
                    <svg viewBox="0 0 48 48" className="about-icon52">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text192">
                      Content across 3 platforms
                    </span>
                  </div>
                  <div className="about-container48">
                    <svg viewBox="0 0 48 48" className="about-icon54">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text193">
                      Daily engagement and community building
                    </span>
                  </div>
                </div>
                <div className="about-container49">
                  <span className="about-text194">Graphic Design</span>
                  <div className="about-container50">
                    <svg viewBox="0 0 48 48" className="about-icon56">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text195">
                      30 custom graphics for social media
                    </span>
                  </div>
                  <div className="about-container51">
                    <svg viewBox="0 0 48 48" className="about-icon58">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text196">
                      4 promotional designs monthly
                    </span>
                  </div>
                  <div className="about-container52">
                    <svg viewBox="0 0 48 48" className="about-icon60">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text197">
                      Monthly themed campaign concepts
                    </span>
                  </div>
                </div>
                <div className="about-container53">
                  <span className="about-text198">Virtual Assistance</span>
                  <div className="about-container54">
                    <svg viewBox="0 0 48 48" className="about-icon62">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text199">
                      15 hours of administrative support
                    </span>
                  </div>
                  <div className="about-container55">
                    <svg viewBox="0 0 48 48" className="about-icon64">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text200">
                      Customer inquiry management
                    </span>
                  </div>
                  <div className="about-container56">
                    <svg viewBox="0 0 48 48" className="about-icon66">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text201">
                      Email management assistance
                    </span>
                  </div>
                </div>
                <div className="about-container57">
                  <span className="about-text202">Website</span>
                  <div className="about-container58">
                    <svg viewBox="0 0 48 48" className="about-icon68">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text203">
                      10-page responsive website with contact forms
                    </span>
                  </div>
                  <div className="about-container59">
                    <svg viewBox="0 0 48 48" className="about-icon70">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text204">
                      Bi-weekly content updates
                    </span>
                  </div>
                  <div className="about-container60">
                    <svg viewBox="0 0 48 48" className="about-icon72">
                      <path
                        d="M43 11L16.875 37L5 25.182"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="about-text205">
                      Basic SEO implementation
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button className="about-primary5 button-primary button-lg button">
              Get in touch with us
            </button>
            <p className="about-text206 thq-body-large">
              <span className="about-text207">Perfect for</span>
              <span>
                : Growing businesses ready to establish a consistent
                professional online presence
              </span>
            </p>
          </div>
        </div>
        <p className="about-text209 thq-body-large">
          All packages include monthly consultation calls and regular progress
          updates
        </p>
      </div>
      <Footer1
        text={
          <Fragment>
            <span className="about-text210">
              <span>© 2025 SummerSync Digital All rights reserved.</span>
              <span className="about-text212"> </span>
              <span>
                | Owned by
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="about-text214">johnlorden.online</span>
            </span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="about-text215">
              &quot;Fresh minds online, watch your business shine&quot;
            </span>
          </Fragment>
        }
        text13={
          <Fragment>
            <span className="about-text216">hello@summersync.digital</span>
          </Fragment>
        }
        text14={
          <Fragment>
            <span className="about-text217">+63 (969) 269-0882</span>
          </Fragment>
        }
        rootClassName="footer1root-class-name1"
      ></Footer1>
    </div>
  )
}

export default About
