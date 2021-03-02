import React, { Component } from "react";
import Gallery_3 from "../Assets/Images/gallery/img-3.jpg";
import Gallery_4 from "../Assets/Images/gallery/img-4.jpg";
import Pokebattle from "../Assets/Images/gallery/pokemonbattlepic.PNG";
import Dayplanner from "../Assets/Images/gallery/dayplannerpic.PNG";
import Readmegenerator from "../Assets/Images/gallery/readmegeneratorpic.PNG";
import Weatherdash from "../Assets/Images/gallery/weatherdashpic.PNG";
import EscapeGame from "../Assets/Images/gallery/EscapeGameResized.PNG";

import { Link } from "react-router-dom";

// const Portfolio = () => {
//   return <></>;
// };

class Porfolio extends Component {
  // linkStyle = {
  //   textAlign: "center",
  //   textDecoration: "underline",
  // };

  // descriptionStyle = {
  //   textAlign: "center",
  // };

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
                <div class="project">
                  <a
                    target="_blank"
                    href="https://github.com/gabrielejm/Pokmon-Battle-Royale"
                  >
                    <p>Pokemon Battle Royale</p>
                  </a>
                  <p>
                    A Pokemon battling game; search for your preferred Pokemon
                    using the PokeAPI and battle against the AI's randomly
                    selected Pokemon. The Pokemon's stats are compared to
                    determine a winner. The last trainer standing wins!
                  </p>
                  <a
                    target="_blank"
                    href="https://gabrielejm.github.io/Pokmon-Battle-Royale/"
                  >
                    <img
                      src={Pokebattle}
                      className="img img-responsive"
                      alt="pokemonbattle"
                    />
                  </a>
                </div>
                <div class="project">
                  <a
                    target="_blank"
                    href="https://github.com/gabrielejm/Day-Planner"
                  >
                    <p>Day Planner</p>
                  </a>
                  <p>
                    A day planner app useful for planning a 9-5 workday using
                    1-hour timeblocks. The timeblocks will change color based on
                    past, present, and future time (grey for past, red for
                    present, green for future). The user can save input text
                    relating to their day's activites and return later to view
                    it.
                  </p>
                  <a
                    target="_blank"
                    href="https://gabrielejm.github.io/Day-Planner/"
                  >
                    <img
                      src={Dayplanner}
                      alt=""
                      className="img img-responsive"
                    />
                  </a>
                </div>
                <div class="project">
                  <a
                    target="_blank"
                    href="https://github.com/gabrielejm/README-Generator"
                  >
                    <p>Readme Generator</p>
                  </a>
                  <p>
                    This app will make generating a Readme for your project
                    easy! The user is prompted some questions using Inquirer,
                    then the app generates a Readme using the user's input.
                  </p>
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1fhS9kzTlrW7omEPK3V1S7cSq7k7BLgAv/view"
                  >
                    <img
                      src={Readmegenerator}
                      alt=""
                      className="img img-responsive"
                    />
                  </a>
                </div>
                <div class="project">
                  <a
                    target="_blank"
                    href="https://github.com/gabrielejm/Weather-Dashboard"
                  >
                    <p>Weather Dashboard</p>
                  </a>
                  <p>
                    A weather dashboard app that, when the user searches for a
                    city, will give the user a weather forecast for the current
                    day as well as a 5-day forecast for the searched city. When
                    a city is searched for, it is added to the search history
                    and will remain if the user refreshes or returns to the
                    page.
                  </p>
                  <a
                    target="_blank"
                    href="https://gabrielejm.github.io/Weather-Dashboard/"
                  >
                    <img
                      src={Weatherdash}
                      alt=""
                      className="img img-responsive"
                    />
                  </a>
                </div>
                <div class="project">
                  <a
                    target="_blank"
                    href="https://github.com/gabrielejm/EscapeGame"
                  >
                    <p>Escape Game</p>
                  </a>
                  <p>
                    A timed Vampire-themed Escape Game in which the user will
                    search for clues and solve puzzles in order to escape before
                    the timer runs out. The user must solve the puzzles in a
                    specific order and will obtain clues by clicking around and
                    exploring. This is a group project utilizing the agile
                    development methodology. Currently a work in progress; it is
                    missing some features but is entirely playable from
                    beginning to end.
                  </p>
                  <a
                    target="_blank"
                    href="https://escape-game2021.herokuapp.com/"
                  >
                    <img
                      src={EscapeGame}
                      alt=""
                      className="img img-responsive"
                    />
                  </a>
                </div>
                {/* <div class="project">
                  <p>Pokemon Battle Royale</p>
                  <p>Pokemon battling game</p>
                  <img src={Gallery_4} alt="" className="img img-responsive" />
                  <div className="icon">
                    <Link to="/" className="view-icon">
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div> */}
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
