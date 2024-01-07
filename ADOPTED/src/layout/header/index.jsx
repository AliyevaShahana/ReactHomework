import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./index.scss"
const Header = () => {
  return (
    <div>
      <header>
        <div id="header-top">
          <div className="container">
            <div className="header-top">
              <div className="icons">
                <FaTwitter className="icon"/>
                <FaFacebookF className="icon" />
                <FaInstagram className="icon" />
                <FaLinkedinIn className="icon" />
              </div>
              <div className="buttons">
                <button className="sponsor">Sponsor</button>
                <button className="login">Login</button>
              </div>
            </div>
          </div>
        </div>
        <div id="header-bottom">
          <div className="container">
            <div className="header-bottom">
                <h4>ADOPTED</h4>
                <nav>
                    <ul>
                        <li><a href="" className="home">Home</a></li>
                        <li><a href="">Adoption</a></li>
                        <li><a href="">Success  Stories</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav>
            </div>
        
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
