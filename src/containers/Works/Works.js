import React, { Component } from 'react';

import '../NewBlog/NewBlog.css';
import '../NewBlog/Markdown.css';
import './Works.css';

import worksSynchrome from '../../resources/images/works-synchrome.png';
import worksPersonal from '../../resources/images/works-personal.jpg';

import worksGithub from '../../resources/images/sp-github.jpg';
import worksQuote from '../../resources/images/sp-quote.jpg';
import worksWiki from '../../resources/images/sp-wiki.jpg';

class Works extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyNav);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyNav);
  }

  handleKeyNav = e => {
    const { history } = this.props;

    if (e.keyCode === 39) {
      history.push('/contact');
    }

    if (e.keyCode === 37) {
      history.push('/about');
    }
  };

  linkToFilter = target => {
    const { history } = this.props;

    history.push(`/blog${target}`);
  };

  render() {
    return (
      <div className="works-outer animated fadeIn">
        <div className="page-title smooth-transition">Works</div>
        <div className="works-subtitle-box smooth-transition">
          <div className="works-sub smooth-transition">Larger Works</div>
          <div className="works-line" />
        </div>
        <div className="works-grid smooth-transition">
          <div className="works-inner">
            <div
              className="works-box smooth-transition"
              onClick={() => {
                this.linkToFilter('/synchrome');
              }}
            >
              <img className="works-pic" src={worksSynchrome} alt="Synchrome" />
              <div className="works-desc">
                <div className="works-title">
                  Synchrome
                  <i className="mdi mdi-react works-icon" />
                  <i className="mdi mdi-language-javascript works-icon" />
                  <i className="mdi mdi-language-css3 works-icon" />
                  <i className="mdi mdi-language-html5 works-icon" />
                </div>
                <div className="works-text">
                  Synchrome is a web-based administration app that manages
                  employees, used in one of the government in Indonesia. It is
                  created with advanced ReactJS and Redux.
                </div>
              </div>
            </div>
            <div
              className="works-box smooth-transition"
              onClick={() => {
                this.linkToFilter('/personal-website');
              }}
            >
              <img
                className="works-pic"
                src={worksPersonal}
                alt="Personal Website"
              />
              <div className="works-desc">
                <div className="works-title">
                  Personal Website
                  <i className="mdi mdi-react works-icon" />
                  <i className="mdi mdi-language-javascript works-icon" />
                  <i className="mdi mdi-language-css3 works-icon" />
                  <i className="mdi mdi-language-html5 works-icon" />
                </div>
                <div className="works-text">
                  Yes, I consider my personal website as one of my larger
                  projects, it gaves me a lot to learn, and still one of my
                  proudest project. I design and code it myself, using React,
                  CSS Grid and Flexbox, with very minimal additional CSS
                  Frameworks like Animate. Click me to read more about my
                  personal website.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="works-subtitle-box smooth-transition">
          <div className="works-sub smooth-transition">Smaller Works</div>
          <div className="works-line" />
        </div>
        <div className="works-grid smooth-transition">
          <div className="works-inner">
            <div className="works-box smooth-transition">
              <a
                href="https://github.com/denichodev/github-battle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="works-pic"
                  src={worksGithub}
                  alt="Github Battle"
                />
                <div className="works-desc">
                  <div className="works-title">
                    Github Battle
                    <i className="mdi mdi-react works-icon" />
                    <i className="mdi mdi-language-javascript works-icon" />
                    <i className="mdi mdi-language-css3 works-icon" />
                    <i className="mdi mdi-language-html5 works-icon" />
                  </div>
                  <div className="works-text">
                    One of the project I've done with React fundamentals
                    tutorial by Tyler McGinnis. One of the reasons why I can use
                    React right now. This project is so useful, even I use this
                    sometimes to check on popular repos.
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Works;
