import React, { Component } from 'react';

import BlogBox from './BlogBox';
import client from '../../services/client';
import quotes from '../../quotes';
import './NewBlog.css';
import './Markdown.css';

class NewBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      filter: '',
      filteredPost: [],
      quote: this.getQuote(),
      width: 0
    };
  }

  componentDidMount() {
    this.handleResize();

    document.addEventListener('keydown', this.handleKeyNav);
    window.addEventListener('resize', this.handleResize);

    const { params } = this.props.match;

    this.getQuote();

    client
      .getEntries({
        content_type: process.env.REACT_APP_POST_CONTENT_TYPE_ID
      })
      .then(res => {
        this.setState({
          posts: res.items,
          filteredPost: res.items
        });
      })
      .catch(console.error);

    if (params.slug) {
      this.setState({ filter: params.slug.split('-').join(' ') });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyNav);
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ width: window.innerWidth });
  };

  handleKeyNav = e => {
    const { history } = this.props;

    if (e.keyCode === 39) {
      history.push('/');
    }

    if (e.keyCode === 37) {
      history.push('/contact');
    }
  };

  getQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  filterPost = () => {
    const filter = this.state.filter.toLowerCase();

    return this.state.posts.filter(post => {
      const date = new Date(post.fields.date);

      if (post.fields.title.toLowerCase().indexOf(filter) !== -1) {
        return true;
      }

      if (
        post.fields.tags
          .join(' ')
          .toLowerCase()
          .indexOf(filter) !== -1
      ) {
        return true;
      }

      const formattedDate = `${BlogBox.months[
        date.getMonth()
      ]} ${date.getDate()}, ${date.getFullYear()}`.toLowerCase();

      if (formattedDate.indexOf(filter) !== -1) {
        return true;
      }

      return false;
    });
  };

  renderPostList = () => {
    const { posts } = this.state;
    const filtered = this.filterPost(posts);

    if (posts.length <= 0) {
      return (
        <div className="blog-box smooth-transition not-found">
          Fetching posts...
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

    if (filtered <= 0) {
      return (
        <div className="blog-box smooth-transition not-found animated slideInDown">
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
            <div className="quote-box" data-tooltip={this.state.quote.author}>
              {this.state.quote.text}
            </div>
          </div>
        </div>
        <div className="newblog-container animated slideInDown">
          <div
            style={{
              display: this.state.width >= 1080 ? 'none' : 'block',
              marginBottom: '25px'
            }}
          >
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
          {this.renderPostList()}
        </div>
      </div>
    );
  }
}

export default NewBlog;
