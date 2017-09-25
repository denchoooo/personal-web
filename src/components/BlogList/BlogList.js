import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import PostMock from '../../resources/images/PostMock1.jpg';
import './BlogList.css';

class BlogList extends Component {
  renderPostList = () => {
    const { posts } = this.props;

    if (posts.length <= 0) {
      return;
    }

    return posts.map(post => {
      return (
        <div key={post.sys.id}>
          <div className="blog-container">
            <h3 className="blog-title">
              <Link to={`/blog/${post.fields.slug}`}>{post.fields.title}</Link>
            </h3>
            <div className="blog-meta">
              <p className="blog-date">
                {moment(post.fields.date).format('MMM DD, YYYY')}
              </p>
              <div className="tag-container">
                <ul className="tag-list">
                  {post.fields.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
            </div>
            <img
              className="blog-featured"
              src={post.fields.featuredImage.fields.file.url}
              alt="PostMock1"
            />
            <div className="blog-bottom" />
          </div>
          <div className="blog-line" />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="blog-outer">
        <div className="blog-container">
          <h3 className="blog-title">
            <Link to="/blog/123">Every Javascript Frameworks is Hard</Link>
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
        {this.renderPostList()}
      </div>
    );
  }
}

export default BlogList;
