import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PostMock from '../../resources/images/PostMock1.jpg';
import './BlogList.css';

class BlogList extends Component {
  render() {
    return (
      <div className="blog-outer">
        <div className="blog-container">
          <h3 className="blog-title">
            <Link to="/blog/123">
              Every Javascript Framework tutorial written more than 5 minutes
              ago
            </Link>
          </h3>
          <div className="blog-meta">
            <p className="blog-date">Sep 8, 2017</p>
            <div className="tag-container">
              <ul className="tag-list">
                <li>Javascript</li>
                <li>Programming</li>
                <li>Learning</li>
              </ul>
            </div>
          </div>
          <img className="blog-featured" src={PostMock} alt="PostMock1" />
          <div className="blog-bottom" />
        </div>
        <div className="blog-line" />
        <div className="blog-container">
          <h3 className="blog-title">
            <Link to="/blog/123">
              Every Javascript Framework tutorial written more than 5 minutes
              ago
            </Link>
          </h3>
          <div className="blog-meta">
            <p className="blog-date">Sep 8, 2017</p>
            <div className="tag-container">
              <ul className="tag-list">
                <li>Javascript</li>
                <li>Programming</li>
                <li>Learning</li>
              </ul>
            </div>
          </div>
          <img className="blog-featured" src={PostMock} alt="PostMock1" />
          <div className="blog-bottom" />
        </div>
        <div className="blog-line" />
        <div className="blog-container">
          <h3 className="blog-title">
            <Link to="/blog/123">
              Every Javascript Framework tutorial written more than 5 minutes
              ago
            </Link>
          </h3>
          <div className="blog-meta">
            <p className="blog-date">Sep 8, 2017</p>
            <div className="tag-container">
              <ul className="tag-list">
                <li>Javascript</li>
                <li>Programming</li>
                <li>Learning</li>
              </ul>
            </div>
          </div>
          <img className="blog-featured" src={PostMock} alt="PostMock1" />
          <div className="blog-bottom" />
        </div>
        <div className="blog-line" />
        <div className="blog-container">
          <h3 className="blog-title">
            <Link to="/blog/123">
              Every Javascript Framework tutorial written more than 5 minutes
              ago
            </Link>
          </h3>
          <div className="blog-meta">
            <p className="blog-date">Sep 8, 2017</p>
            <div className="tag-container">
              <ul className="tag-list">
                <li>Javascript</li>
                <li>Programming</li>
                <li>Learning</li>
              </ul>
            </div>
          </div>
          <img className="blog-featured" src={PostMock} alt="PostMock1" />
          <div className="blog-bottom" />
        </div>
        <div className="blog-line" />
        <div className="blog-container">
          <h3 className="blog-title">
            <Link to="/blog/123">
              Every Javascript Framework tutorial written more than 5 minutes
              ago
            </Link>
          </h3>
          <div className="blog-meta">
            <p className="blog-date">Sep 8, 2017</p>
            <div className="tag-container">
              <ul className="tag-list">
                <li>Javascript</li>
                <li>Programming</li>
                <li>Learning</li>
              </ul>
            </div>
          </div>
          <img className="blog-featured" src={PostMock} alt="PostMock1" />
          <div className="blog-bottom" />
        </div>
        <div className="blog-line" />
        <div className="blog-container">
          <h3 className="blog-title">
            <Link to="/blog/123">
              Every Javascript Framework tutorial written more than 5 minutes
              ago
            </Link>
          </h3>
          <div className="blog-meta">
            <p className="blog-date">Sep 8, 2017</p>
            <div className="tag-container">
              <ul className="tag-list">
                <li>Javascript</li>
                <li>Programming</li>
                <li>Learning</li>
              </ul>
            </div>
          </div>
          <img className="blog-featured" src={PostMock} alt="PostMock1" />
          <div className="blog-bottom" />
        </div>
        <div className="blog-line" />
      </div>
    );
  }
}

export default BlogList;
