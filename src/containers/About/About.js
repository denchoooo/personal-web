import React, { Component } from 'react';

import './About.css';
import FlipCard from '../../components/FlipCard/FlipCard';
import WhatBtn from '../../components/WhatBtn/WhatBtn';

import sketchLogo from '../../resources/svgs/sketch.svg';
import psLogo from '../../resources/svgs/ps.svg';

class AboutGrid extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyNav);

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

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyNav);
  }

  handleKeyNav = e => {
    const { history } = this.props;

    if (e.keyCode === 39) {
      history.push('/works');
    }

    if (e.keyCode === 37) {
      history.push('/home');
    }
  };

  render() {
    return (
      <div className="container-about animated slideInUp">
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
            <div className="skill-icon" data-tooltip="Javascript">
              <i className="mdi mdi-language-javascript" />
            </div>
            <div className="skill-icon" data-tooltip="ReactJS">
              <i className="mdi mdi-react" />
            </div>
            <div className="skill-icon" data-tooltip="Sass">
              <i className="mdi mdi-sass" />
            </div>
            <div className="skill-icon" data-tooltip="CSS3">
              <i className="mdi mdi-language-css3" />
            </div>
            <div className="skill-icon" data-tooltip="HTML5">
              <i className="mdi mdi-language-html5" />
            </div>
          </div>
          <div className="about-text">
            <FlipCard id="frontend">
              <div className="flipcard-front">
                I'm comfortable with my <strong>HTML5</strong> and{' '}
                <strong>CSS3</strong> skills, and even more comfortable with
                Javascript. My daily works are mostly around{' '}
                <strong>Javascript</strong> rather than CSS. But, learning is
                always in my daily agenda. <br /> <br /> To do a more complex
                web application, I use <strong>React</strong> as my Javascript
                framework using the approach of component-based architecture.
                When complex state management are in need,{' '}
                <strong>Redux</strong> is my current way to go. I can say that I
                am very confident in my React and Redux skill, but that doesn’t
                make me stop learning about React, Redux, or other modern
                Javascript technologies everyday.
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
                everything that you can see on a website. An application needs a
                way to show data, and that's what a front-end developer do. I
                use my knowledge in web development to make a high quality
                website that load quickly and looks good on pretty much any
                device.
              </div>
            </FlipCard>
          </div>
          <div className="subtitle-webdesign">Web Design</div>
          <div className="whatbtn-webdesign">
            <WhatBtn flipContainerId="web-design" />
          </div>
          <div className="icons-webdesign">
            <div className="skill-icon" data-tooltip="Sketch">
              <img className="sketch-svg" src={sketchLogo} alt="Sketch" />
            </div>
            <div className="skill-icon" data-tooltip="Photoshop">
              <img className="ps-svg" src={psLogo} alt="Photoshop" />
            </div>
          </div>
          <div className="text-webdesign">
            <FlipCard id="web-design">
              <div className="flipcard-front">
                Web Designing is a mixture of science and art. I am confident
                that I have a keen eye on design. I design the most of the
                structures and layouts first before the actual development on
                the front end begin, with the process of iterations comes later
                in development.
                <br />
                <br />
                I did most of my web designing works using{' '}
                <strong>Sketch</strong>. When more advanced graphics are needed{' '}
                <strong>Illustrator</strong> or <strong>Photoshop</strong> can
                be used for the needs.
              </div>
              <div className="flipcard-back">
                Web Design is about planning and iterating UI or UX of a
                website, or how it <strong>looks</strong> and how it{' '}
                <strong>feels</strong>. Knowledge on both design and development
                are needed to ensure a beautiful and realistic design of a
                website.
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
              accepting more work to hone my skills for even more.
            </p>
          </div>
        </div>
        <div className="tr-footer" />
      </div>
    );
  }
}

export default AboutGrid;
