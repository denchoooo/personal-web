import React, { Component } from 'react';

import mockPic from '../../resources/images/PostMock1.jpg';
import mockPic2 from '../../resources/images/compute.png';
import '../NewBlog/NewBlog.css';
import '../NewBlog/Markdown.css';
import './Works.css';

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

  handleClick = () => {
    const { history } = this.props;

    history.push('/blog/every-javascript-framework');
  };

  render() {
    return (
      <div className="works-outer animated slideInRight">
        <div className="page-title smooth-transition">Works</div>
        <div className="works-subtitle-box smooth-transition">
          <div className="works-sub smooth-transition">Larger Works</div>
          <div className="works-line" />
        </div>
        <div className="works-grid smooth-transition">
          <div className="works-inner">
            <div
              className="works-box smooth-transition"
              onClick={this.handleClick}
            >
              <img className="works-pic" src={mockPic} alt="works1" />
              <div className="works-desc">
                <div className="works-title">Synchrome</div>
                <div className="works-text">
                  Synchrome is a web-based administration app that manages
                  employees, used in one of the government in Indonesia. It is
                  created with advanced ReactJS and Redux.
                </div>
              </div>
            </div>
            <div className="works-box smooth-transition">
              <img className="works-pic" src={mockPic2} alt="works1" />
              <div className="works-desc">
                <div className="works-title">Synchrome</div>
                <div className="works-text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem.
                </div>
              </div>
            </div>
            <div className="works-box smooth-transition">
              <img className="works-pic" src={mockPic} alt="works1" />
              <div className="works-desc">
                <div className="works-title">Synchrome</div>
                <div className="works-text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem.
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
              <img className="works-pic" src={mockPic2} alt="works1" />
              <div className="works-desc">
                <div className="works-title">Synchrome</div>
                <div className="works-text">
                  Synchrome is a web-based administration app that manages
                  employees, used in one of the government in Indonesia. It is
                  created with advanced ReactJS and Redux.
                </div>
              </div>
            </div>
            <div className="works-box smooth-transition">
              <img className="works-pic" src={mockPic} alt="works1" />
              <div className="works-desc">
                <div className="works-title">Synchrome</div>
                <div className="works-text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem.
                </div>
              </div>
            </div>
            <div className="works-box smooth-transition">
              <img className="works-pic" src={mockPic2} alt="works1" />
              <div className="works-desc">
                <div className="works-title">Synchrome</div>
                <div className="works-text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Works;
