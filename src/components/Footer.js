import React, { Component } from "react";
import Logo from "../Assets/Images/logo.png";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer-area text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-image">
                <Link to="/">{/* <img src={Logo} alt=""/> */}</Link>
              </div>
            </div>
            <div className="col-12">
              <div className="footer-menu">
                <ul className="d-flex ">
                  {/* <li>
                    <Link to="/">
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-dribbble"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li> */}
                  <li>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/justin-gabriele-21331a1a7/"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                    {/* <Link to="/">
                    </Link> */}
                  </li>
                  <li>
                    <a target="_blank" href="https://github.com/gabrielejm">
                      <i className="fa fa-github"></i>
                    </a>
                    {/* <Link to="/">
                    </Link> */}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12">
              <div className="footer-sub">
                <p>
                  <i className="fa fa-copyright"></i>Copyright{" "}
                  <span> J. Gabriele</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
