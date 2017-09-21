import React, { Component } from 'react';

import PostMock from '../../resources/images/PostMock1.jpg';
import './BlogList.css';

class BlogList extends Component {
  render() {
    return (
      <div className="blog-outer">
        <div className="blog-container">
          <h3 className="blog-title">
            Every Javascript Framework tutorial written more than 5 minutes ago
          </h3>
          <p className="blog-date">Sep 8, 2017</p>
          <img className="blog-featured" src={PostMock} alt="PostMock1" />
          <div className="blog-bottom">
            <div className="like-container">
              <div className="heart">
                <i className="fa fa-heart-o" />
              </div>
              <span className="like-count">128 Likes</span>
            </div>
            <div className="tag-container">
              <ul className="tag-list">
                <li>Javascript</li>
                <li>Programming</li>
                <li>Learning</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="blog-line" />
        <div className="blog-container">
          <h3 className="blog-title">
            Every Javascript Framework tutorial written more than 5 minutes ago
          </h3>
          <p className="blog-date">Sep 8, 2017</p>
          <img className="blog-featured" src={PostMock} alt="PostMock1" />
          <div className="blog-bottom">
            <div className="like-container">
              <div className="heart">
                <i className="fa fa-heart-o" />
              </div>
              <span className="like-count">128 Likes</span>
            </div>
            <div className="tag-container">
              <ul className="tag-list">
                <li>Javascript</li>
                <li>Programming</li>
                <li>Learning</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tr-footer" />
      </div>
    );
  }
}

export default BlogList;
