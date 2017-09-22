import React, { Component } from 'react';
import Filter from '../../components/Filter/Filter';
import BlogList from '../../components/BlogList/BlogList';
import BlogView from '../../components/BlogView/BlogView';
import './Blog.css';

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0
    };
  }

  componentDidMount() {
    this.updateWidth();
    window.addEventListener('resize', this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth);
  }

  updateWidth = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { id } = this.props.match.params;

    if (id) {
      return (
        <div className="blog-page-container">
          {this.state.width > 1040 && (
            <div className="blog-left">
              <div className="blog-filter">
                <Filter />
              </div>
              <BlogList />
              <div className="tr-footer" />
            </div>
          )}
          <div className="vertical-line" />
          <div className="blog-right">{<div>{id}</div>}</div>
        </div>
      );
    }

    return (
      <div className="blog-page-container">
        <div className="blog-left">
          <div className="blog-filter">
            <Filter />
          </div>
          <BlogList />
          <div className="tr-footer" />
        </div>
        <div className="vertical-line" />
        <div className="blog-right">Select post to view it</div>
      </div>
    );
  }
}

export default Blog;
