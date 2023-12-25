import React from "react";
import { FaHeart } from "react-icons/fa";
import "./index.scss"
import { GoClock } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="left">
            <p>
              Copyright ©2023 All rights reserved | This template is made with
              <FaHeart className="icon" /> by <span>Colorlib</span>
            </p>
          </div>
          <div className="rigth">
          <div className="icons">
              <FaFacebookF className="solid"/>
              <FaTwitter className="solid" />
              <FaLinkedinIn className="solid" />
              <FaGooglePlusG className="solid" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
