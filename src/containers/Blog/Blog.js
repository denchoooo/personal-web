import React, { Component } from 'react';
import Filter from '../../components/Filter/Filter';
import BlogList from '../../components/BlogList/BlogList';
import './Blog.css';

class Blog extends Component {
  render() {
    return (
      <div>
        <div className="blog-filter">
          <Filter />
        </div>
        <BlogList />
      </div>
    );
  }
}

export default Blog;
