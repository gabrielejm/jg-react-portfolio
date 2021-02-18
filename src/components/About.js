import React, { Component } from "react";
import aboutImg from "../Assets/Images/about.png";
import { Link } from "react-router-dom";
import Resume from "../Assets/Images/gallery/Resume.pdf";

class About extends Component {
  render() {
    return (
      <div id="about" className="about-area">
        <div className="borderd"></div>
        <div className="container">
          <div className="about-item">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-img">
                  <img src={aboutImg} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <h2>About Me</h2>
                  <p>
                    Hey! My name is Justin Gabriele. I am an adaptive front-end
                    web developer wtih a passion for creating accessible and
                    lucrative web applications.
                  </p>
                  <p className="mt-20">
                    I'm eager to translate my skills in customer satisfaction,
                    team collaboration, and problem solving into a career in web
                    development. I relentlessly pursue my goals and have a
                    strong belief in training both the body and the mind.
                  </p>
                  <a
                    download
                    target="_blank"
                    href={Resume}
                    className="template-btn"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="white_svg svg_white">
          <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
            <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
          </svg>
        </div>
      </div>
    );
  }
}

export default About;
