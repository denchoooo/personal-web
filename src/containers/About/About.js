import React, { Component } from 'react';
import './AboutGrid.css';

import FlipCard from '../../components/FlipCard/FlipCard';
import WhatBtn from '../../components/WhatBtn/WhatBtn';

class AboutGrid extends Component {
  render() {
    return (
      <div className="container-about">
        <div className="about-item">
          <div className="about-title">
            <h1 className="about-heading">Things I Do</h1>
          </div>
          <div className="about-subtitle">Front End Development</div>
          <div className="about-what-btn">
            <WhatBtn flipContainerId="things-i-do" />
          </div>
          <div className="about-line">
            <div className="line" />
          </div>
          <div className="about-icons">
            <div className="skill-icon">
              <i className="mdi mdi-language-javascript" />
            </div>
            <div className="skill-icon">
              <i className="mdi mdi-react" />
            </div>
            <div className="skill-icon">
              <i className="mdi mdi-sass" />
            </div>
            <div className="skill-icon">
              <i className="mdi mdi-language-css3" />
            </div>
            <div className="skill-icon">
              <i className="mdi mdi-language-html5" />
            </div>
          </div>
          <div className="about-text">
            <FlipCard id="things-i-do">
              <div className="flipcard-front">
                I use <strong>React</strong> as my Javascript framework using
                the approach of component-based architecture. When complex state
                management are in need, <strong>Redux</strong> is my current way
                to go. I can say that I am confident in my React and Redux
                skill, but that doesn’t make me stop learning about React,
                Redux, or other modern Javascript technologies everyday.
                <br />
                <br />
                On the styling side, I can work with or without CSS frameworks.
                I am also currently trying to put <strong>Sass </strong>
                into my web development toolbox. On top of that, I am also
                learning web graphic and other interactive experiences using{' '}
                <strong>p5.js </strong>
                and <strong>Matter.js </strong>to make things more fun!
              </div>
              <div className="flipcard-back">
                Front End Development is building the visual things or mostly
                everything that you can see on a website. I use HTML, CSS, and
                Javascript frameworks to make a high quality responsive website
                or single-page apps.
                <br />
                <br />
                I write semantic HTML to ensure my HTML markup convey the
                underlying meaning of its content—not only its appearance. It
                is also ensured that the website will be responsive and
                accessible on all devices and all target audiences.
              </div>
            </FlipCard>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutGrid;
