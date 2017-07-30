import React, { Component } from 'react';
import './Navbar.css';

import NavItem from './NavItem';
import Logo from '../Logo/Logo';
import SocialIcon from '../SocialIcon/SocialIcon';

class Navbar extends Component {
  handleScroll = () => {
    const topLogoPixel = 70;
    const navmenu = document.getElementById('navbar');
    const navline = document.getElementById('navbar-line');

    let lastTopPixel = window.scrollY;

    if (window.innerWidth > 960) {
      return;
    }

    if (lastTopPixel > topLogoPixel) {
      navmenu.classList.add('navmenu-sticky');
      navline.classList.add('navline-sticky');
    } else {
      navmenu.classList.remove('navmenu-sticky');
      navline.classList.remove('navline-sticky');
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div className="top-container">
        <div className="top-main">
          <div className="navbar-logo">
            <Logo size="small" />
          </div>
          <div id="navbar" className="navbar">
            <div className="navbar-left">
              <header>
                <div className="navmenu">
                  <nav>
                    <ul className="navitem-container">
                      <NavItem exact text="Home" linkTo="/" />
                      <NavItem text="About" linkTo="/about" />
                      <NavItem text="Works" linkTo="/works" />
                      <NavItem text="Contact" linkTo="/contact" />
                      <NavItem text="Blog" linkTo="/blog" />
                    </ul>
                  </nav>
                </div>
              </header>
            </div>
            <div className="navbar-right">
              <div className="socials-container-navbar">
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
        </div>
        <div id="navbar-line" className="line navbar-line" />
      </div>
    );
  }
}

export default Navbar;
