import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './team2.css'

const Team2 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="team2-max-width thq-section-max-width">
        <div className="team2-section-title">
          <span className="thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="team2-text35">
                  Our team of creative teenagers is passionate about delivering
                  top-notch digital solutions to help businesses succeed online.
                </span>
              </Fragment>
            )}
          </span>
          <div className="team2-content10">
            <h2 className="team2-text11 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="team2-text52">Meet Our Team</span>
                </Fragment>
              )}
            </h2>
            <p className="team2-text12 thq-body-large">
              {props.content2 ?? (
                <Fragment>
                  <span className="team2-text56">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="team2-content11">
          <div className="team2-content12">
            <div className="team2-row1">
              <div className="team2-card1">
                <img
                  alt={props.member1Alt}
                  src={props.member1Src}
                  className="thq-img-ratio-1-1 team2-placeholder-image1"
                />
                <div className="team2-content13">
                  <div className="team2-title1">
                    <span className="team2-text13 thq-body-small">
                      {props.member1 ?? (
                        <Fragment>
                          <span className="team2-text50">Alice Smith</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="team2-text14 thq-body-small">
                      {props.member1Job ?? (
                        <Fragment>
                          <span className="team2-text45">
                            Co-Founder &amp; Web Designer
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span className="team2-text15 thq-body-small">
                    {props.member1Content ?? (
                      <Fragment>
                        <span className="team2-text40">
                          Alice is a talented web designer with a keen eye for
                          detail. She co-founded SummerSync Digital to bring
                          innovative design solutions to our clients.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team2-social-icons1">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
              <div className="team2-card2">
                <img
                  alt={props.member2Alt}
                  src={props.member2Src}
                  className="thq-img-ratio-1-1 team2-placeholder-image2"
                />
                <div className="team2-content14">
                  <div className="team2-title2">
                    <span className="team2-text16 thq-body-small">
                      {props.member2 ?? (
                        <Fragment>
                          <span className="team2-text42">Bob Johnson</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="team2-text17 thq-body-small">
                      {props.member2Job ?? (
                        <Fragment>
                          <span className="team2-text55">Graphic Designer</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span className="team2-text18 thq-body-small">
                    {props.member2Content ?? (
                      <Fragment>
                        <span className="team2-text44">
                          Bob is our creative graphic designer who turns ideas
                          into visually appealing designs that resonate with our
                          clients&apos; brands.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team2-social-icons2">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
              <div className="team2-card3">
                <img
                  alt={props.member3Alt}
                  src={props.member3Src}
                  className="thq-img-ratio-1-1 team2-placeholder-image3"
                />
                <div className="team2-content15">
                  <div className="team2-title3">
                    <span className="team2-text19 thq-body-small">
                      {props.member3 ?? (
                        <Fragment>
                          <span className="team2-text49">Eva Brown</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="team2-text20 thq-body-small">
                      {props.member3Job ?? (
                        <Fragment>
                          <span className="team2-text54">
                            Branding Specialist
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span className="team2-text21 thq-body-small">
                    {props.member3Content ?? (
                      <Fragment>
                        <span className="team2-text37">
                          Eva specializes in branding strategies that help
                          businesses stand out in the digital landscape. Her
                          expertise ensures our clients&apos; brands make a
                          lasting impact.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team2-social-icons3">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="team2-row2">
              <div className="team2-card4">
                <img
                  alt={props.member4Alt}
                  src={props.member4Src}
                  className="thq-img-ratio-1-1 team2-placeholder-image4"
                />
                <div className="team2-content16">
                  <div className="team2-title4">
                    <span className="team2-text22 thq-body-small">
                      {props.member4 ?? (
                        <Fragment>
                          <span className="team2-text48">David Lee</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="team2-text23 thq-body-small">
                      {props.member4Job ?? (
                        <Fragment>
                          <span className="team2-text47">UI/UX Designer</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span className="team2-text24 thq-body-small">
                    {props.member4Content ?? (
                      <Fragment>
                        <span className="team2-text34">
                          David is our UI/UX expert who focuses on creating
                          seamless and intuitive user experiences. His designs
                          enhance the functionality and aesthetics of our
                          projects.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team2-social-icons4">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
              <div className="team2-card5">
                <img
                  alt={props.member5Alt}
                  src={props.member5Src}
                  className="thq-img-ratio-1-1 team2-placeholder-image5"
                />
                <div className="team2-content17">
                  <div className="team2-title5">
                    <span className="team2-text25 thq-body-small">
                      {props.member5 ?? (
                        <Fragment>
                          <span className="team2-text36">Grace Wang</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="team2-text26 thq-body-small">
                      {props.member5Job ?? (
                        <Fragment>
                          <span className="team2-text53">
                            Social Media Manager
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span className="team2-text27 thq-body-small">
                    {props.member5Content ?? (
                      <Fragment>
                        <span className="team2-text38">
                          Grace manages our clients&apos; social media presence
                          with strategic planning and engaging content. She
                          helps businesses connect with their target audience
                          effectively.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team2-social-icons5">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
              <div className="team2-card6">
                <img
                  alt={props.member6Alt}
                  src={props.member6Src}
                  className="thq-img-ratio-1-1 team2-placeholder-image6"
                />
                <div className="team2-content18">
                  <div className="team2-title6">
                    <span className="team2-text28 thq-body-small">
                      {props.member6 ?? (
                        <Fragment>
                          <span className="team2-text57">Alex Chen</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="team2-text29 thq-body-small">
                      {props.member6Job ?? (
                        <Fragment>
                          <span className="team2-text51">
                            Creative Director
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span className="team2-text30 thq-body-small">
                    {props.member6Content ?? (
                      <Fragment>
                        <span className="team2-text39">
                          Alex leads our team with a vision for innovation and
                          creativity. His direction ensures that every project
                          we undertake exceeds expectations.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team2-social-icons6">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="team2-content19">
            <div className="team2-content20">
              <h2 className="team2-text31 thq-heading-2">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="team2-text41">We’re hiring!</span>
                  </Fragment>
                )}
              </h2>
              <span className="team2-text32 thq-body-small">
                {props.content3 ?? (
                  <Fragment>
                    <span className="team2-text46">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <button className="team2-button thq-button-filled">
              <span className="thq-body-small">
                {props.actionContent ?? (
                  <Fragment>
                    <span className="team2-text43">Open positions</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Team2.defaultProps = {
  member4Content: undefined,
  content1: undefined,
  member5: undefined,
  member5Src:
    'https://images.unsplash.com/photo-1630713813733-7bdf88acf034?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDc3MDkzNHw&ixlib=rb-4.0.3&q=80&w=600',
  member3Content: undefined,
  member5Content: undefined,
  member6Content: undefined,
  member3Alt: 'Image of Eva Brown',
  member2Alt: 'Image of Bob Johnson',
  member1Content: undefined,
  heading2: undefined,
  member2: undefined,
  actionContent: undefined,
  member2Content: undefined,
  member1Src:
    'https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDc3MDkzM3w&ixlib=rb-4.0.3&q=80&w=600',
  member1Job: undefined,
  content3: undefined,
  member4Job: undefined,
  member2Src:
    'https://images.unsplash.com/photo-1628260412297-a3377e45006f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDc3MDkzNXw&ixlib=rb-4.0.3&q=80&w=600',
  member4: undefined,
  member3: undefined,
  member1: undefined,
  member6Job: undefined,
  member6Alt: 'Image of Alex Chen',
  member4Src:
    'https://images.unsplash.com/photo-1543357480-c60d40007a3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDc3MDkzNXw&ixlib=rb-4.0.3&q=80&w=600',
  heading1: undefined,
  member5Job: undefined,
  member3Job: undefined,
  member4Alt: 'Image of David Lee',
  member6Src:
    'https://images.unsplash.com/photo-1541823709867-1b206113eafd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDc3MDkzNHw&ixlib=rb-4.0.3&q=80&w=600',
  member5Alt: 'Image of Grace Wang',
  member2Job: undefined,
  member3Src:
    'https://images.unsplash.com/photo-1524123143649-3b6ed278f40c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDc3MDkzNHw&ixlib=rb-4.0.3&q=80&w=600',
  member1Alt: 'Image of Alice Smith',
  content2: undefined,
  member6: undefined,
}

Team2.propTypes = {
  member4Content: PropTypes.element,
  content1: PropTypes.element,
  member5: PropTypes.element,
  member5Src: PropTypes.string,
  member3Content: PropTypes.element,
  member5Content: PropTypes.element,
  member6Content: PropTypes.element,
  member3Alt: PropTypes.string,
  member2Alt: PropTypes.string,
  member1Content: PropTypes.element,
  heading2: PropTypes.element,
  member2: PropTypes.element,
  actionContent: PropTypes.element,
  member2Content: PropTypes.element,
  member1Src: PropTypes.string,
  member1Job: PropTypes.element,
  content3: PropTypes.element,
  member4Job: PropTypes.element,
  member2Src: PropTypes.string,
  member4: PropTypes.element,
  member3: PropTypes.element,
  member1: PropTypes.element,
  member6Job: PropTypes.element,
  member6Alt: PropTypes.string,
  member4Src: PropTypes.string,
  heading1: PropTypes.element,
  member5Job: PropTypes.element,
  member3Job: PropTypes.element,
  member4Alt: PropTypes.string,
  member6Src: PropTypes.string,
  member5Alt: PropTypes.string,
  member2Job: PropTypes.element,
  member3Src: PropTypes.string,
  member1Alt: PropTypes.string,
  content2: PropTypes.element,
  member6: PropTypes.element,
}

export default Team2
