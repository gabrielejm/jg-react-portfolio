import React, { Component } from "react";
import Gallery_3 from "../Assets/Images/gallery/img-3.jpg";
import Gallery_4 from "../Assets/Images/gallery/img-4.jpg";
import Pokebattle from "../Assets/Images/gallery/pokemonbattlepic.PNG";
import Dayplanner from "../Assets/Images/gallery/dayplannerpic.PNG";
import Readmegenerator from "../Assets/Images/gallery/readmegeneratorpic.PNG";
import Weatherdash from "../Assets/Images/gallery/weatherdashpic.PNG";

import { Link } from "react-router-dom";

class Porfolio extends Component {
  linkStyle = {
    textAlign: "center",
    textDecoration: "underline",
  };

  descriptionStyle = {
    textAlign: "center",
  };

  state = {
    onWebDesign: false,
    onPrintDesign: false,
    onWebApp: false,
    onPhotography: false,
    isOpen: false,
  };

  render() {
    const allElement = event => {
      event.preventDefault();
      this.setState({
        onWebApp: true,
        onPrintDesign: true,
        onWebDesign: true,
        onPhotography: true,
      });
    };

    const webDesign = event => {
      event.preventDefault();
      this.setState({
        onWebDesign: true,
        onPrintDesign: false,
        onWebApp: false,
        onPhotography: false,
        isOpen: true,
      });
    };

    const printDesign = event => {
      event.preventDefault();
      this.setState({
        onPrintDesign: true,
        onWebDesign: false,
        onWebApp: false,
        onPhotography: false,
        isOpen: true,
      });
    };

    const webApp = event => {
      event.preventDefault();
      this.setState({
        onWebApp: true,
        onPrintDesign: false,
        onWebDesign: false,
        onPhotography: false,
        isOpen: true,
      });
    };

    const Photography = event => {
      event.preventDefault();
      this.setState({
        onPhotography: true,
        onWebApp: false,
        onPrintDesign: false,
        onWebDesign: false,
        isOpen: true,
      });
    };

    return (
      <section id="protfolio" className="gallery-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12 sortable-gallery">
              <div className="gallery-filters">
                <div className="section-title">
                  <span>Portfolio</span>
                  <h2>My Projects</h2>
                </div>
              </div>
              <div className="gallery-container gallery-fancybox masonry-gallery payra-masonary">
                <div
                // className={
                //   this.state.onPrintDesign
                //     ? "grid active"
                //     : "grid" && this.state.onWebApp
                //     ? "grid active"
                //     : "grid" && this.state.isOpen
                //     ? "grid"
                //     : "grid open"
                // }
                >
                  <p style={this.linkStyle}>Pokemon Battle Royale</p>

                  <img
                    src={Pokebattle}
                    className="img img-responsive"
                    alt="pokemonbattle"
                  />
                  <div className="icon">
                    <a
                      target="_blank"
                      href="https://gabrielejm.github.io/Pokmon-Battle-Royale/"
                    >
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
                <div
                  className={
                    this.state.onWebDesign
                      ? "grid active"
                      : "grid" && this.state.onPrintDesign
                      ? "grid active"
                      : "grid" && this.state.onWebApp
                      ? "grid active"
                      : "grid" && this.state.onPhotography
                      ? "grid active"
                      : "grid" && this.state.isOpen
                      ? "grid"
                      : "grid open"
                  }
                >
                  <img src={Dayplanner} alt="" className="img img-responsive" />
                  <div className="icon">
                    <a
                      target="_blank"
                      href="https://gabrielejm.github.io/Day-Planner/"
                    >
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
                <div
                  className={
                    this.state.onWebDesign
                      ? "grid active"
                      : "grid" && this.state.onWebApp
                      ? "grid active"
                      : "grid" && this.state.isOpen
                      ? "grid"
                      : "grid open"
                  }
                >
                  <img
                    src={Readmegenerator}
                    alt=""
                    className="img img-responsive"
                  />
                  <div className="icon">
                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/1fhS9kzTlrW7omEPK3V1S7cSq7k7BLgAv/view"
                    >
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
                <div
                  className={
                    this.state.onPrintDesign
                      ? "grid active"
                      : "grid" && this.state.onPhotography
                      ? "grid active"
                      : "grid" && this.state.isOpen
                      ? "grid"
                      : "grid open"
                  }
                >
                  <p style={this.linkStyle}>Weather Dashboard</p>
                  <img
                    src={Weatherdash}
                    alt=""
                    className="img img-responsive"
                  />
                  <div className="icon">
                    <a
                      target="_blank"
                      href="https://gabrielejm.github.io/Weather-Dashboard/"
                    >
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
                <div
                  className={
                    this.state.onPrintDesign
                      ? "grid active"
                      : "grid" && this.state.onPhotography
                      ? "grid active"
                      : "grid" && this.state.isOpen
                      ? "grid"
                      : "grid open"
                  }
                >
                  <img src={Gallery_3} alt="" className="img img-responsive" />
                  <div className="icon">
                    <Link to="/" className="view-icon">
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
                <div
                  className={
                    this.state.onPrintDesign
                      ? "grid active"
                      : "grid" && this.state.onWebApp
                      ? "grid active"
                      : "grid" && this.state.onPhotography
                      ? "grid active"
                      : "grid" && this.state.isOpen
                      ? "grid"
                      : "grid open"
                  }
                >
                  <img src={Gallery_4} alt="" className="img img-responsive" />
                  <div className="icon">
                    <Link to="/" className="view-icon">
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </Link>
                  </div>
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
      </section>
    );
  }
}

export default Porfolio;
