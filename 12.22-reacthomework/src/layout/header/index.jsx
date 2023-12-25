import React from "react";
import "./index.scss";
import { GoClock } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
const Header = () => {
  return (
    <header>
      <section id="header-top">
        <div className="container">
          <div className="top">
            <div className="clock">
              <div className="clock-div">
                <GoClock />
                <h5>MON - SAT: 6.00 AM - 10.00 PM</h5>
              </div>
              <h5>SUN: CLOSED</h5>
            </div>
            <div className="icons">
              <FaFacebookF className="solid"/>
              <FaTwitter className="solid" />
              <FaLinkedinIn className="solid" />
              <FaGooglePlusG className="solid" />
            </div>
          </div>
        </div>
      </section>

      <section id="header-bottom">
        <div className="container">
          <div className="bottom">
            <h1>
              Consulting <span>.</span>
            </h1>
            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
