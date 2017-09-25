import React, { Component } from 'react';

import './About.css';
import FlipCard from '../../components/FlipCard/FlipCard';
import WhatBtn from '../../components/WhatBtn/WhatBtn';

class AboutGrid extends Component {
  componentDidMount() {
    // Removing all the flex container if CSS-Grid is supported
    if (CSS.supports('display', 'grid')) {
      const allNogrids = document.querySelectorAll('.nogrid');
      const all = Array.prototype.slice.call(allNogrids);
      all.map(nogrid => {
        while (nogrid.firstChild) {
          nogrid.parentNode.insertBefore(nogrid.firstChild, nogrid);
        }
        nogrid.parentNode.removeChild(nogrid);
      });
    }
  }

  render() {
    return (
      <div className="container-about">
        <div className="about-thingsido">
          <div className="nogrid n-row1">
            <div className="about-title">
              <h1 className="about-heading">Things I Do</h1>
            </div>
            <div className="about-line">
              <div className="line" />
            </div>
          </div>
          <div className="nogrid n-row2">
            <div className="about-subtitle">Front End Development</div>
            <div className="about-what-btn">
              <WhatBtn flipContainerId="frontend" />
            </div>
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
            <FlipCard id="frontend">
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
                everything that you can see on a website. I use{' '}
                <strong>HTML </strong>, <strong>CSS </strong>, and
                <strong> Javascript </strong> frameworks to make a high quality
                responsive website or single-page apps.
                <br />
                <br />
                I write semantic HTML to ensure my HTML markup convey the
                underlying meaning of its content—not only its appearance. It
                is also ensured that the website will be{' '}
                <strong>responsive </strong> and
                <strong> accessible</strong> on all devices and all target
                audiences.
              </div>
            </FlipCard>
          </div>
          <div className="subtitle-webdesign">Web Design</div>
          <div className="whatbtn-webdesign">
            <WhatBtn flipContainerId="web-design" />
          </div>
          <div className="icons-webdesign">
            <div className="skill-icon">
              <i className="mdi mdi-language-javascript" />
            </div>
            <div className="skill-icon">
              <i className="mdi mdi-react" />
            </div>
            <div className="skill-icon">
              <i className="mdi mdi-sass" />
            </div>
          </div>
          <div className="text-webdesign">
            <FlipCard id="web-design">
              <div className="flipcard-front">
                Web Design is about planning and iterating UI or UX of a
                website. Structure and layout are designed first before the
                actual development on the front end begin. Knowledge on both
                design and development are needed to ensure a beautiful and
                realistic design of a website.
                <br />
                <br />
                I did most of my web designing works using{' '}
                <strong>Sketch</strong>. When more advanced graphics are needed{' '}
                <strong>Illustrator</strong> or <strong>Photoshop</strong> can
                be used for the needs.
              </div>
              <div className="flipcard-back">
                Web Design is about planning and iterating UI or UX of a
                website. Structure and layout are designed first before the
                actual development on the front end begin. Knowledge on both
                design and development are needed to ensure a beautiful and
                realistic design of a website.
                <br />
                <br />
                I did most of my web designing works using{' '}
                <strong>Sketch</strong>. When more advanced graphics are needed{' '}
                <strong>Illustrator</strong> or <strong>Photoshop</strong> can
                be used for the needs.
              </div>
            </FlipCard>
          </div>
        </div>
        <div className="about-me">
          <div className="nogrid n-aboutme">
            <div className="title-aboutme">
              <h1 className="about-heading">Me</h1>
            </div>
            <div className="line-aboutme">
              <div className="line" />
            </div>
          </div>
          <div className="pic-aboutme">
            <img src="http://via.placeholder.com/170x250" alt="Me" />
          </div>
          <div className="text-aboutme">
            <p>
              My name is <strong>Deni </strong>{' '}
              <strong className="green">Cho</strong>. I live in Indonesia, and
              currently a university student in Universitas Atma Jaya Yogyakarta
              learning Informatics Engineering.
              <br />
              <br />
              I have been passionate about computer since I was a child, mostly
              playing games. I really want to be a game developer since I was in
              high school, hence I learned programming.
              <br />
              <br />
              I started learning programming with C# and Java, and also used it
              to make some small paid projects. Being a game developer in
              Indonesia is very hard, so I am learning web development instead,
              and it became interesting really quick.
              <br />
              <br />
              I have been learning web development and design for roughly 8
              months now. I am an ambitious learner and have a huge passion in
              web development. I love learning everything and currently
              accepting freelance work to hone my skills for even more.
            </p>
          </div>
        </div>
        <div className="tr-footer" />
      </div>
    );
  }
}

export default AboutGrid;
