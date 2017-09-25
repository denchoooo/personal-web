import React, { Component } from 'react';
import axios from 'axios';

import BlogBox from './BlogBox';
import client from '../../services/client';
import Filter from '../../components/Filter/Filter';
import quotes from '../../quotes';
import './NewBlog.css';
import './Markdown.css';

class NewBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      filter: '',
      filteredPost: []
    };
  }

  componentDidMount() {
    this.getQuote();

    client
      .getEntries({
        content_type: process.env.REACT_APP_POST_CONTENT_TYPE_ID
      })
      .then(res => {
        this.setState({
          posts: res.items.map(item => {
            return { ...item, title: item.fields.title };
          }),
          filteredPost: res.items
        });
      })
      .catch(console.error);
  }

  getQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  filterPost = () => {
    return this.state.posts.filter(post => {
      return (
        post.title.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1
      );
    });
  };

  renderPostList = () => {
    const { posts } = this.state;
    const filtered = this.filterPost(posts);

    if (posts.length <= 0) {
      return;
    }

    if (filtered <= 0) {
      return (
        <div className="blog-box smooth-transition not-found">
          Nothing found...
          <div className={'b-featured-box'}>
            <img
              className={`b-featured-img smooth-transition`}
              src="https://images.contentful.com/s0t5kg4bsgzu/bXvdSYHB3Guy2uUmuEco8/5b44c565ab9205888156dae368d29f25/alice-in-wonderland.gif"
              alt="Post"
            />
          </div>
        </div>
      );
    }

    return filtered.map(post => {
      return <BlogBox post={post} key={post.sys.id} />;
    });
  };

  handleFilterChange = e => {
    const value = e.target.value;
    this.setState(() => ({
      filter: value
    }));
  };

  handleFilterClear = () => {
    this.setState(() => ({ filter: '' }));
  };

  render() {
    const quote = this.getQuote();
    return (
      <div className="newblog-outer">
        <div className="newblog-left animated slideInUp">
          <div className="page-decor smooth-transition">Blog</div>
          <div className="b-filter ">
            <div className="filter-container">
              <input
                value={this.state.filter}
                onChange={this.handleFilterChange}
                type="text"
                className="filter-input"
                placeholder="Filter..."
              />
              <div
                className="filter-clear"
                onClick={this.handleFilterClear}
                style={{
                  opacity: this.state.filter ? 1 : 0,
                  cursor: this.state.filter ? 'pointer' : 'auto'
                }}
              >
                <div className="clear-cross" />
                <div className="clear-cross" />
              </div>
            </div>
          </div>
          <div className="quote-decor">
            <div className="quote-box" data-tooltip={quote.author}>
              {quote.text}
            </div>
          </div>
        </div>
        <div
          className="newblog-container animated slideInDown"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {this.renderPostList()}
        </div>
      </div>
    );
  }
}

export default NewBlog;
