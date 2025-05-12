import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import PortofolioCard from './portofolio-card'
import WebCard from './web-card'
import './portofolio.css'

const Portofolio = (props) => {
  const [service, setService] = useState('LGD')
  return (
    <div className="portofolio-portofolio section-container">
      <div className="portofolio-max-width1 max-content-container">
        <div className="portofolio-text-container">
          <h2 className="portofolio-text10 Heading2">
            {props.heading ?? (
              <Fragment>
                <h2 className="portofolio-text63 Heading2">
                  <span>Explore our portfolio</span>
                </h2>
              </Fragment>
            )}
          </h2>
          <span className="portofolio-text11">
            {props.text1 ?? (
              <Fragment>
                <span className="portofolio-text55">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation.
                  </span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        {service === 'LGD' && (
          <div className="portofolio-logo-design-head">
            <span className="tab-selected tab-selector-btn">
              {props.text2 ?? (
                <Fragment>
                  <span className="portofolio-text76">Logo Design</span>
                </Fragment>
              )}
            </span>
            <span
              onClick={() => setService('SMM')}
              className="tab-selector-btn"
            >
              {props.text3 ?? (
                <Fragment>
                  <span className="portofolio-text65">SMM</span>
                </Fragment>
              )}
            </span>
            <span onClick={() => setService('GD')} className="tab-selector-btn">
              {props.text7 ?? (
                <Fragment>
                  <span className="portofolio-text77">Graphic Design</span>
                </Fragment>
              )}
            </span>
            <span
              onClick={() => setService('BRND')}
              className="tab-selector-btn"
            >
              {props.text4 ?? (
                <Fragment>
                  <span className="portofolio-text68">Branding</span>
                </Fragment>
              )}
            </span>
            <span
              onClick={() => setService('UIUX')}
              className="tab-selector-btn"
            >
              {props.text5 ?? (
                <Fragment>
                  <span className="portofolio-text54">UI / UX</span>
                </Fragment>
              )}
            </span>
            <span
              onClick={() => setService('PKG')}
              className="tab-selector-btn"
            >
              {props.text6 ?? (
                <Fragment>
                  <span className="portofolio-text82">Website</span>
                </Fragment>
              )}
            </span>
          </div>
        )}
        {service === 'SMM' && (
          <div className="portofolio-smm-head">
            <span
              onClick={() => setService('LGD')}
              className="tab-selector-btn"
            >
              {props.text24 ?? (
                <Fragment>
                  <span className="portofolio-text80">Logo Design</span>
                </Fragment>
              )}
            </span>
            <span className="tab-selected tab-selector-btn">
              {props.text34 ?? (
                <Fragment>
                  <span className="portofolio-text86">SMM</span>
                </Fragment>
              )}
            </span>
            <span
              onClick={() => {
                setService('GD')
                setService('SMM')
              }}
              className="tab-selector-btn"
            >
              {props.text74 ?? (
                <Fragment>
                  <span className="portofolio-text94">Graphic Design</span>
                </Fragment>
              )}
            </span>
            <span
              onClick={() => setService('BRND')}
              className="tab-selector-btn"
            >
              {props.text44 ?? (
                <Fragment>
                  <span className="portofolio-text88">Branding</span>
                </Fragment>
              )}
            </span>
            <span
              onClick={() => setService('UIUX')}
              className="tab-selector-btn"
            >
              {props.text54 ?? (
                <Fragment>
                  <span className="portofolio-text93">UI / UX</span>
                </Fragment>
              )}
            </span>
            <span
              onClick={() => setService('PKG')}
              className="tab-selector-btn"
            >
              {props.text65 ?? (
                <Fragment>
                  <span className="portofolio-text92">Website</span>
                </Fragment>
              )}
            </span>
          </div>
        )}
        {service === 'GD' && (
          <div className="portofolio-graphic-design-head">
            <span
              onClick={() => setService('LGD')}
              className="tab-selector-btn"
            >
              {props.text23 ?? (
                <Fragment>
                  <span className="portofolio-text72">Logo Design</span>
                </Fragment>
              )}
            </span>
            <span
              onClick={() => setService('SMM')}
              className="tab-selector-btn"
            >
              {props.text33 ?? (
                <Fragment>
                  <span className="portofolio-text97">SMM</span>
                </Fragment>
              )}
            </span>
            <span className="tab-selected tab-selector-btn">
              {props.text73 ?? (
                <Fragment>
                  <span className="portofolio-text98">Graphic Design</span>
                </Fragment>
              )}
            </span>
            <span
              onClick={() => setService('BRND')}
              className="tab-selector-btn"
            >
              {props.text43 ?? (
                <Fragment>
                  <span className="portofolio-text79">Branding</span>
                </Fragment>
              )}
            </span>
            <span
              onClick={() => setService('UIUX')}
              className="tab-selector-btn"
            >
              {props.text53 ?? (
                <Fragment>
                  <span className="portofolio-text85">UI / UX</span>
                </Fragment>
              )}
            </span>
            <span
              onClick={() => setService('PKG')}
              className="tab-selector-btn"
            >
              {props.text66 ?? (
                <Fragment>
                  <span className="portofolio-text71">Website</span>
                </Fragment>
              )}
            </span>
          </div>
        )}
        {service === 'BRND' && (
          <div className="portofolio-branding-head">
            <span
              onClick={() => setService('LGD')}
              className="tab-selector-btn"
            >
              {props.text22 ?? (
                <Fragment>
                  <span className="portofolio-text78">Logo Design</span>
                </Fragment>
              )}
            </span>
            <span
              onClick={() => setService('SMM')}
              className="tab-selector-btn"
            >
              {props.text32 ?? (
                <Fragment>
                  <span className="portofolio-text96">SMM</span>
                </Fragment>
              )}
            </span>
            <span onClick={() => setService('GD')} className="tab-selector-btn">
              {props.text72 ?? (
                <Fragment>
                  <span className="portofolio-text61">Graphic Design</span>
                </Fragment>
              )}
            </span>
            <span className="tab-selected tab-selector-btn">
              {props.text42 ?? (
                <Fragment>
                  <span className="portofolio-text62">Branding</span>
                </Fragment>
              )}
            </span>
            <span
              onClick={() => setService('UIUX')}
              className="tab-selector-btn"
            >
              {props.text52 ?? (
                <Fragment>
                  <span className="portofolio-text84">UI / UX</span>
                </Fragment>
              )}
            </span>
            <span
              onClick={() => setService('PKG')}
              className="tab-selector-btn"
            >
              {props.text67 ?? (
                <Fragment>
                  <span className="portofolio-text59">Website</span>
                </Fragment>
              )}
            </span>
          </div>
        )}
        {service === 'UIUX' && (
          <div className="portofolio-uiux-head">
            <span
              onClick={() => setService('LGD')}
              className="tab-selector-btn"
            >
              {props.text21 ?? (
                <Fragment>
                  <span className="portofolio-text90">Logo Design</span>
                </Fragment>
              )}
            </span>
            <span
              onClick={() => setService('SMM')}
              className="tab-selector-btn"
            >
              {props.text31 ?? (
                <Fragment>
                  <span className="portofolio-text89">SMM</span>
                </Fragment>
              )}
            </span>
            <span onClick={() => setService('GD')} className="tab-selector-btn">
              {props.text71 ?? (
                <Fragment>
                  <span className="portofolio-text60">Graphic Design</span>
                </Fragment>
              )}
            </span>
            <span
              onClick={() => setService('BRND')}
              className="tab-selector-btn"
            >
              {props.text41 ?? (
                <Fragment>
                  <span className="portofolio-text69">Branding</span>
                </Fragment>
              )}
            </span>
            <span className="tab-selected tab-selector-btn">
              {props.text51 ?? (
                <Fragment>
                  <span className="portofolio-text70">UI / UX</span>
                </Fragment>
              )}
            </span>
            <span
              onClick={() => setService('PKG')}
              className="tab-selector-btn"
            >
              {props.text68 ?? (
                <Fragment>
                  <span className="portofolio-text95">Website</span>
                </Fragment>
              )}
            </span>
          </div>
        )}
        {service === 'PKG' && (
          <div className="portofolio-packaging-head">
            <span
              onClick={() => setService('LGD')}
              className="tab-selector-btn"
            >
              {props.text211 ?? (
                <Fragment>
                  <span className="portofolio-text91">Logo Design</span>
                </Fragment>
              )}
            </span>
            <span
              onClick={() => setService('SMM')}
              className="tab-selector-btn"
            >
              {props.text311 ?? (
                <Fragment>
                  <span className="portofolio-text87">SMM</span>
                </Fragment>
              )}
            </span>
            <span onClick={() => setService('GD')} className="tab-selector-btn">
              {props.text711 ?? (
                <Fragment>
                  <span className="portofolio-text74">Graphic Design</span>
                </Fragment>
              )}
            </span>
            <span
              onClick={() => setService('BRND')}
              className="tab-selector-btn"
            >
              {props.text411 ?? (
                <Fragment>
                  <span className="portofolio-text75">Branding</span>
                </Fragment>
              )}
            </span>
            <span
              onClick={() => setService('UIUX')}
              className="tab-selector-btn"
            >
              {props.text511 ?? (
                <Fragment>
                  <span className="portofolio-text81">UI / UX</span>
                </Fragment>
              )}
            </span>
            <span className="tab-selected tab-selector-btn">
              {props.text69 ?? (
                <Fragment>
                  <span className="portofolio-text83">Website</span>
                </Fragment>
              )}
            </span>
          </div>
        )}
        {service === 'LGD' && (
          <div className="portofolio-logo-design">
            <PortofolioCard
              imageSrc="/Logo/assnsccr-logo-400h.jpg"
              projectTitle="Aseano Soccer Program - Logo Design"
              rootClassName="portofolio-cardroot-class-name12"
            ></PortofolioCard>
            <PortofolioCard
              imageSrc="/Logo/ckklogo-400h.png"
              projectTitle="Cakeki\xA0 - Logo Design\xA0"
              rootClassName="portofolio-cardroot-class-name13"
            ></PortofolioCard>
            <PortofolioCard
              imageSrc="/Logo/codeit-logo-400h.jpg"
              projectTitle="CodeIt Information Technology Solutions - Logo Design"
              rootClassName="portofolio-cardroot-class-name14"
            ></PortofolioCard>
            <PortofolioCard
              imageSrc="/Logo/homous%20logo-400h.png"
              projectTitle="Homous (Anything, Anywhere) - Logo Design"
              rootClassName="portofolio-cardroot-class-name15"
            ></PortofolioCard>
            <PortofolioCard
              imageSrc="/Logo/scimatech%20logo-400h.png"
              projectTitle="Science Mathematics Technology Club - Logo Design"
              rootClassName="portofolio-cardroot-class-name16"
            ></PortofolioCard>
            <PortofolioCard
              imageSrc="/Logo/svsfi-cc-400h.jpg"
              projectTitle="SVSFI Content Creatives - Logo Design"
              rootClassName="portofolio-cardroot-class-name17"
            ></PortofolioCard>
            <PortofolioCard
              imageSrc="/Logo/main%20logoflc-400h.png"
              projectTitle="Financio KRI Lending Corporation - Logo Design\xA0"
              rootClassName="portofolio-cardroot-class-name18"
            ></PortofolioCard>
            <PortofolioCard
              imageSrc="/Logo/ico-jl-b-hdlogo-400h.png"
              projectTitle="It's me John Lorden Brand - Logo Design"
              rootClassName="portofolio-cardroot-class-name19"
            ></PortofolioCard>
          </div>
        )}
        {service === 'GD' && (
          <div className="portofolio-graphic-design thq-section-padding">
            <div className="portofolio-max-width2">
              <h2 className="portofolio-text48 thq-heading-2">Coming Soon</h2>
              <span className="portofolio-text49 thq-body-small">
                {props.content112 ?? (
                  <Fragment>
                    <span className="portofolio-text73">
                      We are currently working on this section, please come back
                      later to see our latest projects!
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        )}
        {service === 'BRND' && (
          <div className="portofolio-branding thq-section-padding">
            <div className="portofolio-max-width3">
              <h2 className="portofolio-text50 thq-heading-2">Coming Soon</h2>
              <span className="portofolio-text51 thq-body-small">
                {props.content11 ?? (
                  <Fragment>
                    <span className="portofolio-text66">
                      We are currently working on this section, please come back
                      later to see our latest projects!
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        )}
        {service === 'UIUX' && (
          <div className="portofolio-uiux thq-section-padding">
            <div className="portofolio-max-width4">
              <h2 className="portofolio-text52 thq-heading-2">Coming Soon</h2>
              <span className="portofolio-text53 thq-body-small">
                {props.content111 ?? (
                  <Fragment>
                    <span className="portofolio-text67">
                      We are currently working on this section, please come back
                      later to see our latest projects!
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        )}
        {service === 'SMM' && (
          <div className="portofolio-social-media">
            <PortofolioCard
              imageSrc="/SocMed/1-400h.png"
              projectTitle="Aseano Soccer Program - Logo Design"
              rootClassName="portofolio-cardroot-class-name20"
            ></PortofolioCard>
            <PortofolioCard
              imageSrc="/SocMed/2024-wrapped-cash-400h.jpg"
              projectTitle="Cakeki\xA0 - Logo Design\xA0"
              rootClassName="portofolio-cardroot-class-name21"
            ></PortofolioCard>
            <PortofolioCard
              imageSrc="/SocMed/asd-ve-400h.jpg"
              projectTitle="CodeIt Information Technology Solutions - Logo Design"
              rootClassName="portofolio-cardroot-class-name22"
            ></PortofolioCard>
            <PortofolioCard
              imageSrc="/SocMed/aseanosoccerpost-400h.jpg"
              projectTitle="Homous (Anything, Anywhere) - Logo Design"
              rootClassName="portofolio-cardroot-class-name23"
            ></PortofolioCard>
            <PortofolioCard
              imageSrc="/SocMed/cheesydonuts-post1-400h.jpg"
              projectTitle="Science Mathematics Technology Club - Logo Design"
              rootClassName="portofolio-cardroot-class-name24"
            ></PortofolioCard>
            <PortofolioCard
              imageSrc="/SocMed/codeit-post-400h.jpg"
              projectTitle="SVSFI Content Creatives - Logo Design"
              rootClassName="portofolio-cardroot-class-name25"
            ></PortofolioCard>
            <PortofolioCard
              imageSrc="/SocMed/svsfi-content-creatives-400h.png"
              projectTitle="Financio KRI Lending Corporation - Logo Design\xA0"
              rootClassName="portofolio-cardroot-class-name26"
            ></PortofolioCard>
          </div>
        )}
        {service === 'PKG' && (
          <div className="portofolio-tab-selector-cards-container">
            <WebCard
              text="www.brandjester.fun"
              button="Web Design"
              button1="Landing page"
              imageSrc2="/Webs/imagewebservice-1500w.png"
            ></WebCard>
            <WebCard
              text="www.casaacunastaycation.com"
              button="Web Design"
              button1="Landing page"
              imageSrc2="/Webs/slide%2016_9%20-%201webservice-1500w.png"
            ></WebCard>
            <WebCard
              text="www.shiratakikonjacuae.com"
              button="Web Design"
              button1="Landing page"
              imageSrc2="/Webs/slide%2016_9%20-%202webservice-1500w.png"
            ></WebCard>
            <WebCard
              text="www.aseanosoccer.com"
              button="Web Design"
              button1="Landing page"
              imageSrc2="/Webs/slide%2016_9%20-%203webservice-1500w.png"
            ></WebCard>
            <WebCard
              text="www.cheesydonuts.ph"
              button="Web Design"
              button1="Landing page"
              imageSrc2="/Webs/slide%2016_9%20-%204webservice-1500w.png"
            ></WebCard>
          </div>
        )}
      </div>
    </div>
  )
}

Portofolio.defaultProps = {
  text5: undefined,
  text1: undefined,
  text67: undefined,
  text71: undefined,
  text72: undefined,
  text42: undefined,
  heading: undefined,
  text3: undefined,
  content11: undefined,
  content111: undefined,
  text4: undefined,
  text41: undefined,
  text51: undefined,
  text66: undefined,
  text23: undefined,
  content112: undefined,
  text711: undefined,
  text411: undefined,
  text2: undefined,
  text7: undefined,
  text22: undefined,
  text43: undefined,
  text24: undefined,
  text511: undefined,
  text6: undefined,
  text69: undefined,
  text52: undefined,
  text53: undefined,
  text34: undefined,
  text311: undefined,
  text44: undefined,
  text31: undefined,
  text21: undefined,
  text211: undefined,
  text65: undefined,
  text54: undefined,
  text74: undefined,
  text68: undefined,
  text32: undefined,
  text33: undefined,
  text73: undefined,
}

Portofolio.propTypes = {
  text5: PropTypes.element,
  text1: PropTypes.element,
  text67: PropTypes.element,
  text71: PropTypes.element,
  text72: PropTypes.element,
  text42: PropTypes.element,
  heading: PropTypes.element,
  text3: PropTypes.element,
  content11: PropTypes.element,
  content111: PropTypes.element,
  text4: PropTypes.element,
  text41: PropTypes.element,
  text51: PropTypes.element,
  text66: PropTypes.element,
  text23: PropTypes.element,
  content112: PropTypes.element,
  text711: PropTypes.element,
  text411: PropTypes.element,
  text2: PropTypes.element,
  text7: PropTypes.element,
  text22: PropTypes.element,
  text43: PropTypes.element,
  text24: PropTypes.element,
  text511: PropTypes.element,
  text6: PropTypes.element,
  text69: PropTypes.element,
  text52: PropTypes.element,
  text53: PropTypes.element,
  text34: PropTypes.element,
  text311: PropTypes.element,
  text44: PropTypes.element,
  text31: PropTypes.element,
  text21: PropTypes.element,
  text211: PropTypes.element,
  text65: PropTypes.element,
  text54: PropTypes.element,
  text74: PropTypes.element,
  text68: PropTypes.element,
  text32: PropTypes.element,
  text33: PropTypes.element,
  text73: PropTypes.element,
}

export default Portofolio
