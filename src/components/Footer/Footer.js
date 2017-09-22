import React from 'react';
import SocialIcon from '../SocialIcon/SocialIcon';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="line footer-line" />
      <div className="footer">
        <div className="socials-container-footer">
          <SocialIcon
            to="https://github.com/denichodev"
            className="fa fa-github"
          />
          <SocialIcon
            to="https://github.com/denichodev"
            className="fa fa-linkedin"
          />
          <SocialIcon
            to="https://twitter.com/denichodev"
            className="fa fa-twitter"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
