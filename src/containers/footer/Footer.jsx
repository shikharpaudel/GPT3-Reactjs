import React from "react";
import logo from "../../assets/logo.svg";
import './Footer.css';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into the future before others
        </h1>
      </div>
      <div className="gpt3__footer-button">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logo} alt="logo" />
          <p>Powered By AntiBug, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>OverOns</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>KTM 27, Bagmati Nepal</p>
          <p>1085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>&copy; 2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

