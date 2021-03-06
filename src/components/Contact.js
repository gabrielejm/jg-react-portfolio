import React, { Component } from "react";
import Resume from "../Assets/Images/gallery/Resume.pdf";
import "../css/Contact.css";

import ContactForm from "./form";

class Contact extends Component {
  render() {
    return (
      <div
        id="contact"
        className="contact-page-area section-padding go-contact-area"
      >
        <div className="container">
          <div id="contactCustom" className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="contact-page-item">
                <h2>Contact</h2>
                <p>
                  If you're interested in getting to know me, please contact me
                  by phone or email; or check out my{" "}
                  <a target="_blank" href="https://github.com/gabrielejm">
                    Github
                  </a>{" "}
                  or{" "}
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/justin-gabriele-21331a1a7/"
                  >
                    LinkedIn
                  </a>
                  .<br></br>
                  View my{" "}
                  <a target="_blank" href={Resume}>
                    Resume
                  </a>
                  !
                </p>
                <div className="adress">
                  <h3>Address</h3>
                  <span>
                    2300 Lowndes Grove Drive, Apt. 202, Raleigh, NC, 27616
                  </span>
                </div>
                <div className="phone">
                  <h3>Phone</h3>
                  <span>919-599-7656</span>
                </div>
                <div className="email">
                  <h3>Email</h3>
                  <span>gabrielejustin@yahoo.com</span>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="contact-area contact-area-2 contact-area-3">
                <h2>Quick Contact Form</h2>
                <div className="contact-form">
                  <ContactForm />
                </div>
              </div>
            </div> */}
          </div>
          {/* <div className="row">
            <div className="col col-xs-12">
              <div className="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57763.58882182253!2d55.38442113562169!3d25.195692423227655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z4Kam4KeB4Kas4Ka-4KaHIC0g4Kam4KeB4Kas4Ka-4KaHIOCmhuCmruCmv-CmsOCmvuCmpCAtIOCmuOCmguCmr-CngeCmleCnjeCmpCDgpobgprDgpqwg4KaG4Kau4Ka_4Kaw4Ka-4Kak!5e0!3m2!1sbn!2sbd!4v1540725271741" />
              </div>
            </div>
          </div> */}
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

export default Contact;
