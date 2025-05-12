import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Portofolio from '../components/portofolio'
import BlogCard from '../components/blog-card'
import Footer1 from '../components/footer1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>
          SummerSync Digital | Youth-Driven Social Media & Design Services
        </title>
        <meta
          name="description"
          content="Youth Driven  Affordable Social media management, graphic design, and web development services"
        />
        <meta
          property="og:title"
          content="SummerSync Digital | Youth-Driven Social Media &amp; Design Services"
        />
        <meta
          property="og:description"
          content="Youth Driven  Affordable Social media management, graphic design, and web development services"
        />
      </Helmet>
      <Navigation button="Get in touch"></Navigation>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width1 max-content-container">
            <div className="home-heading-container1">
              <h1 className="home-text10">
                Digital Solutions That Grow With Your Business
              </h1>
              <span className="home-text11">
                Youth-driven creativity meets professional digital services for
                businesses ready to thrive online
              </span>
              <Link
                to="/contact"
                className="home-primary1 button-primary button-lg button"
              >
                Get in touch with us
              </Link>
            </div>
            <div className="home-container11">
              <img
                alt="image"
                src="/Lumni Doodle/Editorial/lummi%20doodle%2001-1000w.png"
                className="home-image1"
              />
            </div>
          </div>
        </div>
        <div className="home-services section-container">
          <div className="home-max-width2 max-content-container">
            <div className="home-heading-container2">
              <div className="home-text-container1">
                <span className="home-text12">our services</span>
                <h2 className="Heading2">Transforming Your Digital Presence</h2>
              </div>
              <Link
                to="/contact"
                className="home-navlink1 button-primary button"
              >
                Get in touch
              </Link>
            </div>
            <div className="home-cards-container">
              <div className="home-services-card1 services-card">
                <div className="home-container12">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="home-icon10"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m17.674 11.408l-1.905 5.716a.6.6 0 0 1-.398.385L3.693 20.981a.6.6 0 0 1-.74-.765L6.745 8.842a.6.6 0 0 1 .34-.365l5.387-2.218a.6.6 0 0 1 .653.13l4.404 4.405a.6.6 0 0 1 .145.614M3.296 20.602l6.364-6.364"></path>
                      <path
                        d="m18.403 3.182l2.364 2.364a1.846 1.846 0 1 1-2.61 2.61l-2.365-2.364a1.846 1.846 0 0 1 2.61-2.61"
                        fill="currentColor"
                      ></path>
                      <path d="M11.781 12.116a1.5 1.5 0 1 0-2.121 2.121a1.5 1.5 0 0 0 2.121-2.121"></path>
                    </g>
                  </svg>
                </div>
                <span className="home-text14">Graphic Designs</span>
                <span className="home-text15">
                  Eye-catching visuals that elevate your brand identity and
                  captivate your audience.
                </span>
                <Link
                  to="/contact"
                  className="home-navlink2 button-primary button"
                >
                  Learn More
                </Link>
              </div>
              <div className="services-card home-services-card2">
                <div className="home-container13">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    className="home-icon15"
                  >
                    <path
                      d="M8.75 3.75a2.75 2.75 0 1 0-5.5 0a2.75 2.75 0 0 0 5.5 0m-4.5 0a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M2.5 7.5h4.183c-.164.31-.286.646-.358 1H2.5A.5.5 0 0 0 2 9v.5c0 1.26 1.099 2.614 3.096 2.93c-.322.22-.59.513-.781.854C2.205 12.713 1 11.087 1 9.5V9a1.5 1.5 0 0 1 1.5-1.5m5.379 0c.504-.61 1.267-1 2.121-1a2.744 2.744 0 0 1 2.646 2a2.753 2.753 0 0 1-3.893 3.202A2.75 2.75 0 0 1 7.88 7.5m.54 1a1.75 1.75 0 1 0 3.164 1.5a1.75 1.75 0 0 0-3.165-1.5m7.266 4.784a2.5 2.5 0 0 0-.781-.853C16.9 12.114 18 10.759 18 9.5V9a.5.5 0 0 0-.5-.5h-3.825a3.7 3.7 0 0 0-.357-1H17.5A1.5 1.5 0 0 1 19 9v.5c0 1.587-1.206 3.212-3.315 3.784m-1.198.087A1.5 1.5 0 0 0 13.5 13h-7A1.496 1.496 0 0 0 5 14.5v.5c0 1.971 1.86 4 5 4s5-2.029 5-4v-.5c0-.45-.198-.854-.513-1.13M6 14.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v.5c0 1.438-1.432 3-4 3s-4-1.562-4-3zM14 1a2.75 2.75 0 1 1 0 5.5A2.75 2.75 0 0 1 14 1m0 1a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 14 2"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <span className="home-text16">Social Media Management</span>
                <span className="home-text17">
                  Strategic content creation and community engagement that grows
                  your online presence.
                </span>
                <Link
                  to="/contact"
                  className="home-navlink3 button-primary button"
                >
                  Learn More
                </Link>
              </div>
              <div className="home-services-card3 services-card">
                <div className="home-container14">
                  <svg viewBox="0 0 48 48" className="home-icon17">
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-linejoin="round"
                    >
                      <path d="M19 32c-7.732 0-14-6.268-14-14S11.268 4 19 4s14 6.268 14 14"></path>
                      <path d="M44 18H18v26h26z"></path>
                    </g>
                  </svg>
                </div>
                <span className="home-text18">Branding</span>
                <span className="home-text19">
                  Cohesive identity development that makes your business
                  memorable and distinctive.
                </span>
                <Link
                  to="/contact"
                  className="home-navlink4 button-primary button"
                >
                  Learn More
                </Link>
              </div>
              <div className="home-services-card4 services-card">
                <div className="home-container15">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <g fill="none" fill-rule="evenodd">
                      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                      <path
                        d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm8 2h6v9h-6zm-2 0H5v3h6zm0 5H5v9h6zm2 9h6v-3h-6z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                </div>
                <span className="home-text20">UI/ UX</span>
                <span className="home-text21">
                  Intuitive, user-focused designs that enhance digital
                  experiences and satisfaction.
                </span>
                <Link
                  to="/contact"
                  className="home-navlink5 button-primary button"
                >
                  Learn More
                </Link>
              </div>
              <div className="services-card home-services-card5">
                <div className="home-container16">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <g fill="currentColor">
                      <path
                        d="M14 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm3 2h-2v6h2z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                      <path d="M6 7a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"></path>
                      <path
                        d="M4 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm16 2H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </div>
                <span className="home-text22">Website Development</span>
                <span className="home-text23">
                  Custom, responsive websites that showcase your business
                  professionally online.
                </span>
                <Link
                  to="/contact"
                  className="home-navlink6 button-primary button"
                >
                  Learn More
                </Link>
              </div>
              <div className="home-services-card6 services-card">
                <div className="home-container17">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                      d="M22 17.002a6 6 0 0 1-4.713 5.86l-.638-1.914A4 4 0 0 0 19.465 19H17a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.938a8.001 8.001 0 0 0-15.876 0H7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5C2 6.477 6.477 2 12 2s10 4.477 10 10z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <span className="home-text24">Virtual Assistance</span>
                <span className="home-text25">
                  Administrative support that saves you time while keeping your
                  operations seamless.
                </span>
                <Link
                  to="/contact"
                  className="home-navlink7 button-primary button"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Portofolio
          text1={
            <Fragment>
              <span className="home-text26">
                Real results for businesses just like yours
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text27">Logo Design</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-text28">SMM</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text29">Branding</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-text30">UI / UX</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="home-text31">Website</span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="home-text32">Graphic Design</span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="home-text33">Logo Design</span>
            </Fragment>
          }
          text22={
            <Fragment>
              <span className="home-text34">Logo Design</span>
            </Fragment>
          }
          text23={
            <Fragment>
              <span className="home-text35">Logo Design</span>
            </Fragment>
          }
          text24={
            <Fragment>
              <span className="home-text36">Logo Design</span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="home-text37">SMM</span>
            </Fragment>
          }
          text32={
            <Fragment>
              <span className="home-text38">SMM</span>
            </Fragment>
          }
          text33={
            <Fragment>
              <span className="home-text39">SMM</span>
            </Fragment>
          }
          text34={
            <Fragment>
              <span className="home-text40">SMM</span>
            </Fragment>
          }
          text41={
            <Fragment>
              <span className="home-text41">Branding</span>
            </Fragment>
          }
          text42={
            <Fragment>
              <span className="home-text42">Branding</span>
            </Fragment>
          }
          text43={
            <Fragment>
              <span className="home-text43">Branding</span>
            </Fragment>
          }
          text44={
            <Fragment>
              <span className="home-text44">Branding</span>
            </Fragment>
          }
          text51={
            <Fragment>
              <span className="home-text45">UI / UX</span>
            </Fragment>
          }
          text52={
            <Fragment>
              <span className="home-text46">UI / UX</span>
            </Fragment>
          }
          text53={
            <Fragment>
              <span className="home-text47">UI / UX</span>
            </Fragment>
          }
          text54={
            <Fragment>
              <span className="home-text48">UI / UX</span>
            </Fragment>
          }
          text65={
            <Fragment>
              <span className="home-text49">Website</span>
            </Fragment>
          }
          text66={
            <Fragment>
              <span className="home-text50">Website</span>
            </Fragment>
          }
          text67={
            <Fragment>
              <span className="home-text51">Website</span>
            </Fragment>
          }
          text68={
            <Fragment>
              <span className="home-text52">Website</span>
            </Fragment>
          }
          text69={
            <Fragment>
              <span className="home-text53">Website</span>
            </Fragment>
          }
          text71={
            <Fragment>
              <span className="home-text54">Graphic Design</span>
            </Fragment>
          }
          text72={
            <Fragment>
              <span className="home-text55">Graphic Design</span>
            </Fragment>
          }
          text73={
            <Fragment>
              <span className="home-text56">Graphic Design</span>
            </Fragment>
          }
          text74={
            <Fragment>
              <span className="home-text57">Graphic Design</span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="home-text58 Heading2">
                <span className="home-text59">Our Work</span>
                <span> Speaks Volumes</span>
              </span>
            </Fragment>
          }
          text211={
            <Fragment>
              <span className="home-text61">Logo Design</span>
            </Fragment>
          }
          text311={
            <Fragment>
              <span className="home-text62">SMM</span>
            </Fragment>
          }
          text411={
            <Fragment>
              <span className="home-text63">Branding</span>
            </Fragment>
          }
          text511={
            <Fragment>
              <span className="home-text64">UI / UX</span>
            </Fragment>
          }
          text711={
            <Fragment>
              <span className="home-text65">Graphic Design</span>
            </Fragment>
          }
          content11={
            <Fragment>
              <span className="home-text66">
                We are currently working on this section, please come back later
                to see our latest projects!
              </span>
            </Fragment>
          }
          content111={
            <Fragment>
              <span className="home-text67">
                We are currently working on this section, please come back later
                to see our latest projects!
              </span>
            </Fragment>
          }
          content112={
            <Fragment>
              <span className="home-text68">
                We are currently working on this section, please come back later
                to see our latest projects!
              </span>
            </Fragment>
          }
        ></Portofolio>
        <div className="home-about section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-text-container2">
              <span className="home-text69">about us</span>
              <h2 className="home-text70">Young Minds, Fresh Ideas</h2>
              <span className="home-text71">
                SummerSync Digital is a digital agency founded by creative
                teenagers offering affordable and high-quality digital solutions
                for businesses. They specialize in web design, graphic design,
                branding, UI/UX, and social media management to help businesses
                thrive online.
              </span>
              <div className="home-checklist">
                <div className="home-check-item1">
                  <svg viewBox="0 0 1024 1024" className="home-icon32">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text72">
                    Trend-Informed Content
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="home-check-item2">
                  <svg viewBox="0 0 1024 1024" className="home-icon34">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text73">
                    Responsive Communication
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="home-check-item3">
                  <svg viewBox="0 0 1024 1024" className="home-icon36">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text74">
                    Customized Solutions
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="home-check-item4">
                  <svg viewBox="0 0 1024 1024" className="home-icon38">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text75">
                    Transparent Reporting
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="home-check-item5">
                  <svg viewBox="0 0 1024 1024" className="home-icon40">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text76">Affordable Excellence</span>
                </div>
              </div>
            </div>
            <div className="home-image-container">
              <img
                alt="image"
                src="/Lumni Doodle/Editorial/lummi%20doodle%2004-1000w.png"
                className="home-image2"
              />
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width4 max-content-container">
            <span className="home-text77">Our process</span>
            <h2 className="home-text78">Seamless Solutions, Every Time</h2>
            <div className="home-step1">
              <span className="home-text79">01</span>
              <div className="home-container18">
                <span className="home-text80">Discovery</span>
                <span className="home-text81">
                  We learn about your business, goals, and audience to create a
                  tailored strategy
                </span>
              </div>
            </div>
            <div className="home-step2">
              <span className="home-text82">02</span>
              <div className="home-container19">
                <span className="home-text83">Creation</span>
                <span className="home-text84">
                  Our team develops custom content and solutions designed for
                  your specific needs
                </span>
              </div>
            </div>
            <div className="home-step3">
              <span className="home-text85">03</span>
              <div className="home-container20">
                <span className="home-text86">Growth</span>
                <span className="home-text87">
                  We implement, measure, and refine to ensure continuous
                  improvement
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-blog section-container">
          <div className="home-max-width5 max-content-container">
            <span className="home-text88">from blog</span>
            <h2 className="home-text89 Heading2">
              <span>Our latest articles and resources</span>
            </h2>
            <span className="home-text91">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation.
              </span>
            </span>
            <button className="home-primary2 button-secondary button-lg button">
              Explore the blog
            </button>
            <div className="home-blog-cards-container">
              <BlogCard rootClassName="blog-cardroot-class-name"></BlogCard>
              <BlogCard
                text1="Aug 14, 2022"
                button="advertising"
                imageSrc="/rectangle%2099%20%5B1%5D-1500w.png"
                rootClassName="blog-cardroot-class-name1"
              ></BlogCard>
              <BlogCard
                text1="Jul 12, 2022"
                button="Branding"
                imageSrc="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              ></BlogCard>
            </div>
          </div>
        </div>
        <div className="home-banner section-container">
          <div className="home-max-width6 max-content-container">
            <span className="home-text95">what are you waiting?</span>
            <h2 className="home-text96 Heading2">
              Ready to Sync Your Success?
            </h2>
            <span className="home-text97">
              Let&apos;s create your digital breakthrough today
            </span>
            <span className="home-text98">
              &quot;Fresh minds online, watch your business shine&quot;
            </span>
            <Link
              to="/contact"
              className="home-primary3 button-lg button-secondary-white button"
            >
              Contact us
            </Link>
          </div>
        </div>
      </main>
      <Footer1
        text={
          <Fragment>
            <span className="home-text99">
              <span>© 2025 SummerSync Digital All rights reserved.</span>
              <span className="home-text101"> </span>
              <span>
                | Owned by
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text103">johnlorden.online</span>
            </span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text104">
              &quot;Fresh minds online, watch your business shine&quot;
            </span>
          </Fragment>
        }
        text13={
          <Fragment>
            <span className="home-text105">summersyncdigital@gmail.com</span>
          </Fragment>
        }
        text14={
          <Fragment>
            <span className="home-text106">+63 (969) 269-0882</span>
          </Fragment>
        }
        rootClassName="footer1root-class-name"
      ></Footer1>
    </div>
  )
}

export default Home
