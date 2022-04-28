import React from "react";

import { GoBook } from "react-icons/go";
import { Line } from "rc-progress";

const Resume = () => {
  return (
    <div>
      <div className="mi-skills-area mi-section mi-padding-top">
        <div className="container">
          <div className="mi-sectiontitle">
            <h2>My Skills</h2>
            <span>My Skills</span>
          </div>
          <div className="mi-skills">
            <div className="row mt-30-reverse">
              <div className="col-lg-6 col-12 mt-30">
                <div className="mi-progress">
                  <h6 className="mi-progress-title">HTML</h6>
                  <div className="mi-progress-inner">
                    <div className="mi-progress-percentage">95%</div>
                    <div className="mi-progress-container">
                      <Line
                        percent="95"
                        strokeWidth="1"
                        strokeColor="#007bff"
                      />
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
              <div className="col-lg-6 col-12 mt-30">
                <div className="mi-progress">
                  <h6 className="mi-progress-title">CSS</h6>
                  <div className="mi-progress-inner">
                    <div className="mi-progress-percentage">90%</div>
                    <div className="mi-progress-container">
                      <Line
                        percent="90"
                        strokeWidth="1"
                        strokeColor="#007bff"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 mt-30">
                <div className="mi-progress">
                  <h6 className="mi-progress-title">Javascript</h6>
                  <div className="mi-progress-inner">
                    <div className="mi-progress-percentage">70%</div>
                    <div className="mi-progress-container">
                      <Line
                        percent="70"
                        strokeWidth="1"
                        strokeColor="#007bff"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 mt-30">
                <div className="mi-progress">
                  <h6 className="mi-progress-title">ReactJS</h6>
                  <div className="mi-progress-inner">
                    <div className="mi-progress-percentage">60%</div>
                    <div className="mi-progress-container">
                      <Line
                        percent="70"
                        strokeWidth="1"
                        strokeColor="#007bff"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-12 mt-30">
                <div className="mi-progress">
                  <h6 className="mi-progress-title">MongoDB</h6>
                  <div className="mi-progress-inner">
                    <div className="mi-progress-percentage">65%</div>
                    <div className="mi-progress-container">
                      <Line
                        percent="65"
                        strokeWidth="1"
                        strokeColor="#007bff"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 mt-30">
                <div className="mi-progress">
                  <h6 className="mi-progress-title">Express.js</h6>
                  <div className="mi-progress-inner">
                    <div className="mi-progress-percentage">70%</div>
                    <div className="mi-progress-container">
                      <Line
                        percent="70"
                        strokeWidth="1"
                        strokeColor="#007bff"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 mt-30">
                <div className="mi-progress">
                  <h6 className="mi-progress-title">Github</h6>
                  <div className="mi-progress-inner">
                    <div className="mi-progress-percentage">70%</div>
                    <div className="mi-progress-container">
                      <Line
                        percent="85"
                        strokeWidth="1"
                        strokeColor="#007bff"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 mt-30">
                <div className="mi-progress">
                  <h6 className="mi-progress-title">Heroku</h6>
                  <div className="mi-progress-inner">
                    <div className="mi-progress-percentage">50%</div>
                    <div className="mi-progress-container">
                      <Line
                        percent="85"
                        strokeWidth="1"
                        strokeColor="#007bff"
                      />
                    </div>
                  </div>
                </div>
              </div>
       
            </div>
          </div>
        </div>
      </div>
      <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <div className="mi-sectiontitle">
            <h2>Resume</h2>
            <span>Resume</span>
          </div>
          <div className="mt-30" />
          <div className="mi-smalltitle">
            <span className="mi-smalltitle-icon">
              <GoBook style={{ fontSize: "40px" }} />
            </span>
            <h4 style={{ marginBottom: "0px" }}>Educational Qualifications</h4>
          </div>
          <div className="mi-resume-wrapper">
            <div className="mi-resume mt-30">
              <div className="mi-resume-summary">
                <h6 className="mi-resume-year">2022 - Present</h6>
              </div>
              <div className="mi-resume-details">
                <h5>Masai School</h5>
                <h6 className="mi-resume-company">
                  MERN stack web Development
                </h6>
                <p>
                  Masai is an outcome driven career school and mission is to skill India's
                  untrapped & underutilized talent and to train students for some of the
                  most in-demand jobs in the world.  
                </p>
              </div>
            </div>
            <div className="mi-resume mt-30">
              <div className="mi-resume-summary">
                <h6 className="mi-resume-year">2017 - 2020</h6>
              </div>
              <div className="mi-resume-details">
                <h5>Fakir Mohan Autonomous College</h5>
                <h6 className="mi-resume-company">
                Bachelor of Science (BSc in Physics)
                </h6>

                <p>
                  Fakir Mohan Autonomous College is a profit, Government university located
                  near the Santikanan in Gopalgoan, Balasore, Odisha.It Came into Existance on 6th july 1944 under the Government
                  University Act 1992. The university was established in 2001 by
                  Fakir Mohan Senapati.
                </p>
              </div>
            </div>
            <div className="mi-resume mt-30">
              <div className="mi-resume-summary">
                <h6 className="mi-resume-year">2014 - 2016</h6>
              </div>
              <div className="mi-resume-details">
                <h5>Sharpmind Residential college</h5>
                <h6 className="mi-resume-company">
                 Higher Secondary School- Science
                </h6>
                <p>
                  Sharpmind Residential College is an well known Secondary School
                  situated at Azimabad, Balasore, Odisha. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
