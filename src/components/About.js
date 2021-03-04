import React, { Component } from "react";
import aboutImg from "../Assets/Images/about.png";
import { Link } from "react-router-dom";
import Resume from "../Assets/Images/gallery/Resume.pdf";
import PortfolioPic from "../Assets/Images/gallery/portfolioPic.jpeg";

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
                  <img src={PortfolioPic} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <h2>About Me</h2>
                  <p>
                    Hi, my name is Justin Gabriele! I'm a Front-End Web
                    Developer.
                  </p>
                  <p className="mt-20">
                    A passion for creating accessible, productive web
                    applications and a background in customer service drives me
                    to continuously challenge myself and strive to meet customer
                    demands.
                  </p>
                  <a target="_blank" href={Resume} className="template-btn">
                    View Resume
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
