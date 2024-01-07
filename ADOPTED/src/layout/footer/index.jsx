import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import "./index.scss";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="top">
            <div className="about">
              <p>ABOUT</p>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus et dolor blanditiis consequuntur ex voluptates
                perspiciatis omnis unde minima expedita.
              </span>
              <h6>
                <a href="">Learn More</a>
              </h6>
            </div>
            <div className="contact">
              <p>CONTACT & ADDRESS</p>
              <ul>
                <li>
                  <span>A:</span>
                  <h6>34 Street Name, City Name Here, United States</h6>
                </li>
                <li>
                  <span>T:</span>
                  <h6>+1 242 4942 290</h6>
                </li>
                <li>
                  <span>E:</span>
                  <h6>info@yourdomain.com</h6>
                </li>
              </ul>
            </div>
            <div className="quick">
              <p>QUICK LINKS</p>
              <ul>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Success Stories</a>
                </li>
                <li>
                  <a href="">Waiting Children</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms of Use</a>
                </li>
                <li>
                  <a href="">Disclaimers</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            <div className="social">
              <p>SOCIAL</p>
              <div className="icons">
                <div className="icon">
                  <a href="">
                    <FaTwitter className="twit" />
                  </a>
                </div>
                <div className="icon">
                  <a href="">
                    <FaFacebookF className="twit" />
                  </a>
                </div>
                <div className="icon">
                  <a href="">
                    <FaInstagram className="twit" />
                  </a>
                </div>
                <div className="icon">
                  <a href="">
                    <FaLinkedinIn className="twit" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <h6>
              Copyright ©2024 All rights reserved | This template is made with{" "}
              <CiHeart className="icon"/> by <a href="">Colorlib</a>
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
