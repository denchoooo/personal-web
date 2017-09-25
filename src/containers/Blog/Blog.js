import React, { Component } from 'react';

import client from '../../services/client';
import Filter from '../../components/Filter/Filter';
import BlogList from '../../components/BlogList/BlogList';
import BlogView from '../../components/BlogView/BlogView';
import './Blog.css';

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      posts: []
    };
  }

  componentDidMount() {
    this.updateWidth();
    window.addEventListener('resize', this.updateWidth);

    client
      .getEntries({
        content_type: process.env.REACT_APP_POST_CONTENT_TYPE_ID
      })
      .then(res => {
        this.setState({ posts: res.items });
      })
      .catch(console.error);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth);
  }

  updateWidth = () => {
    this.setState({ width: window.innerWidth });
  };

  selectPost = slug => {
    const { posts } = this.state;
    const filtered = posts.filter(post => post.fields.slug === slug);
    console.log('filtered', filtered);
    if (filtered.length <= 0) {
      return null;
    }
    return filtered[0];
  };

  render() {
    const { slug } = this.props.match.params;

    if (slug) {
      return (
        <div className="blog-page-container">
          {this.state.width > 1040 && (
            <div className="blog-left">
              <div className="blog-filter">
                <Filter />
              </div>
              <BlogList posts={this.state.posts} />
              <div className="tr-footer" />
            </div>
          )}
          <div className="vertical-line" />
          <div className="blog-right">
            <BlogView slug={slug} post={this.selectPost(slug)} />
          </div>
        </div>
      );
    }

    return (
      <div className="blog-page-container">
        <div className="blog-left">
          <div className="blog-filter">
            <Filter />
          </div>
          <BlogList posts={this.state.posts} />
          <div className="tr-footer" />
        </div>
        <div className="vertical-line" />
        {this.state.width > 1040 && (
          <div className="blog-right">Select post to view it</div>
        )}
      </div>
    );
  }
}

export default Blog;
