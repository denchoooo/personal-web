import React, { Component } from 'react';
import moment from 'moment';
import marked from 'marked';

import client from '../../services/client';
import Filter from '../../components/Filter/Filter';
import './NewBlog.css';
import './Markdown.css';

class NewBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    });

    client
      .getEntries({
        content_type: process.env.REACT_APP_POST_CONTENT_TYPE_ID
      })
      .then(res => {
        this.setState({ posts: res.items });
      })
      .catch(console.error);
  }

  getMarkdown = body => {
    const rawMd = marked(body);
    return { __html: rawMd };
  };

  renderPostList = () => {
    const { posts } = this.state;

    if (posts.length <= 0) {
      return;
    }

    return posts.map(post => {
      console.log(post);
      return (
        <div
          key={post.sys.id}
          className="blog-box smooth-transition blog-box-open"
        >
          <div className="blog-header">
            <div className="b-date smooth-transition b-date-open">
              <p>{moment(post.fields.date).format('MMMM, DD, YYYY')}</p>
            </div>
            <div className="b-title smooth-transition b-title-open">
              {post.fields.title}
            </div>
            <div className="b-tags smooth-transition b-tags-open">
              <ul className="style-none b-list smooth-transition">
                {post.fields.tags.map(tag => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
            <div className="b-x b-x-open">
              <div className="x-1 xcross" />
              <div className="x-2 xcross" />
            </div>
          </div>
          <div className="b-featured-box smooth-transition">
            <img
              className="b-featured-img smooth-transition"
              src={post.fields.featuredImage.fields.file.url}
              alt="PostMock1"
            />
            <p className="img-caption">
              This does not compute (credit: pixabay)
            </p>
          </div>
          <div
            className="blog-main markdown-body"
            dangerouslySetInnerHTML={this.getMarkdown(post.fields.body)}
          />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="newblog-outer">
        <div className="newblog-left">
          <div className="page-decor smooth-transition">Blog</div>
          <div className="b-filter">
            <Filter />
          </div>
          <div className="quote-decor">
            <div className="quote-box">
              Every day I shall put my papers in order and every day I shall say
              farewell. And the real farewell, when it comes, will only be a
              small outward confirmation of what has been accomplished within me
              from day to day.
            </div>
          </div>
        </div>
        <div className="newblog-container">
          <div className="blog-box smooth-transition">
            <div className="blog-header">
              <div className="b-date smooth-transition">
                <p>Sep 21, 2017</p>
              </div>
              <div className="b-title smooth-transition">
                Every JavaScript framework tutorial written more than 5 minutes
                ago
              </div>
              <div className="b-tags smooth-transition">
                <ul className="style-none b-list smooth-transition">
                  <li>Javascript</li>
                  <li>Programming</li>
                  <li>Learning</li>
                </ul>
              </div>
              <div className="b-x">
                <div className="x-1 xcross" />
                <div className="x-2 xcross" />
              </div>
            </div>
            <div className="blog-main markdown-body" />
          </div>
          {this.renderPostList()}
          <div className="blog-box smooth-transition">
            <div className="blog-header">
              <div className="b-date smooth-transition">
                <p>Sep 21, 2017</p>
              </div>
              <div className="b-title smooth-transition">
                Every JavaScript framework tutorial written more than 5 minutes
                ago
              </div>
              <div className="b-tags smooth-transition">
                <ul className="style-none b-list smooth-transition">
                  <li>Javascript</li>
                  <li>Programming</li>
                  <li>Learning</li>
                </ul>
              </div>
              <div className="b-x">
                <div className="x-1 xcross" />
                <div className="x-2 xcross" />
              </div>
            </div>
          </div>
          <div className="blog-main markdown-body" />
        </div>
      </div>
    );
  }
}

export default NewBlog;
