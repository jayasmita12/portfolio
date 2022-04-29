import React from "react";

import AboutImage from "../images/Jayasmita-Photograph.jpg";
// import { IoIosColorPalette } from "react-icons/io";
import { FiCode, FiShoppingBag } from "react-icons/fi";
import { AiOutlineMobile } from "react-icons/ai";
// import { FaWordpress } from "react-icons/fa";
// import { IoMdAnalytics } from "react-icons/io";

const About = () => {
  return (
    <>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <div className="mi-sectiontitle">
            <h2>About Me</h2>
            <span>About Me</span>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="mi-about-image"
                data-fancybox
                data-src="assets/images/about-image-lg.jpg"
              >
                <img src={AboutImage} alt="about" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  I am{" "}
                  <span className="color-theme">Jayasmita Sahu</span>
                </h3>
                <p>
                  An explorer. Love to learn new technologies. Interested in
                  problem solving, building new things and making my life easier
                  with bits of code and automation. Always excited to learn from
                  failures, I believe myself to be competent and adaptable to
                  new situations.
                </p>
                <ul>
                  <li>
                    <b>Full Name</b> Jayasmita Sahu
                  </li>
                  <li>
                    <b>Age</b> 23 Years
                  </li>
                  <li>
                    <b>Nationality</b> Indian
                  </li>
                  <li>
                    <b>Languages</b> English, Hindi, Odia
                  </li>
                  <li>
                    <b>Address</b>Nuasahi, Balasore, Odisha
                  </li>
                </ul>
                <a
                  href="../pdf/Jayasmita-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mi-button"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mi-service-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <div className="mi-sectiontitle">
            <h2>Services</h2>
            <span>Services</span>
          </div>
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {/* <div className="col-lg-4 col-md-6 col-12 mt-30">
                <div className="mi-service">
                  <span className="mi-service-icon">
                    <IoIosColorPalette />
                  </span>
                  <h5>Web Design</h5>
                  <p>
                    I like to keep it simple. My goals are to focus on
                    typography, content and conveying the message that you want
                    to send.
                  </p>
                </div>
              </div> */}
              <div className="col-lg-4 col-md-6 col-12 mt-30">
                <div className="mi-service">
                  <span className="mi-service-icon">
                    <FiCode />
                  </span>
                  <h5>Web Development</h5>
                  <p>
                    I'm a developer, so I know how to create your website to run
                    across devices using the latest technologies available.
                  </p>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-6 col-12 mt-30">
                <div className="mi-service">
                  <span className="mi-service-icon">
                    <FaWordpress />
                  </span>
                  <h5>Content Management</h5>
                  <p>
                    Custom WordPress theme and plugin development. Easily update
                    content without knowing how to code.
                  </p>
                </div>
              </div> */}
              <div className="col-lg-4 col-md-6 col-12 mt-30">
                <div className="mi-service">
                  <span className="mi-service-icon">
                    <AiOutlineMobile />
                  </span>
                  <h5>Mobile-friendly</h5>
                  <p>
                    A responsive design makes your website accessible to all
                    users, regardless of their device.
                  </p>
                </div>
              </div>

              {/* <div className="col-lg-4 col-md-6 col-12 mt-30">
                <div className="mi-service">
                  <span className="mi-service-icon">
                    <IoMdAnalytics />
                  </span>
                  <h5>Analytics</h5>
                  <p>
                    Get insights into who is browsing your site so that you can
                    make smarter business decisions.
                  </p>
                </div>
              </div> */}
              <div className="col-lg-4 col-md-6 col-12 mt-30">
                <div className="mi-service">
                  <span className="mi-service-icon">
                    <FiShoppingBag />
                  </span>
                  <h5>eCommerce</h5>
                  <p>
                    Integration of eCommerce platforms, payment gateways, and
                    more using woocommerce.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
