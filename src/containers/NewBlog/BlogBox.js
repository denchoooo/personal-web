import React, { Component } from 'react';
import marked from 'marked';

class BlogBox extends Component {
  static months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      hover: false
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
  }

  getMarkdown = body => {
    const rawMd = marked(body);
    return { __html: rawMd };
  };

  handleMouseOver = () => {
    this.setState({ hover: true });
  };

  handleMouseOut = () => {
    this.setState({ hover: false });
  };

  handleCrossClick = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { post } = this.props;
    const date = new Date(post.fields.date);

    return (
      <div
        className={`${this.state.hover
          ? 'blog-box-hover'
          : ''} blog-box smooth-transition ${this.state.isOpen
          ? 'blog-box-open'
          : ''}`}
        onMouseEnter={this.handleMouseOver}
        onMouseLeave={this.handleMouseOut}
      >
        <div className="blog-header">
          <div
            className={`b-date smooth-transition ${this.state.isOpen
              ? 'b-date-open'
              : ''}`}
          >
            <p>{`${BlogBox.months[
              date.getMonth()
            ]} ${date.getDate()}, ${date.getFullYear()}`}</p>
          </div>
          <div
            className={`b-title smooth-transition ${this.state.isOpen
              ? 'b-title-open'
              : ''}`}
          >
            {post.fields.title}
          </div>
          <div
            className={`b-tags smooth-transition ${this.state.isOpen
              ? 'b-tags-open'
              : ''}`}
          >
            <ul className="style-none b-list">
              {post.fields.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
          </div>
          <div
            className={`b-x ${this.state.isOpen ? 'b-x-open' : ''}`}
            onClick={this.handleCrossClick}
          >
            <div className="x-1 xcross" />
            <div className="x-2 xcross" />
          </div>
        </div>
        <div
          className={`b-featured-box smooth-transition ${this.state.isOpen
            ? 'blog-featured-open'
            : ''}`}
        >
          <img
            className={`b-featured-img smooth-transition`}
            src={post.fields.featuredImage.fields.file.url}
            alt="Post"
          />
          <p className="img-caption">This does not compute (credit: pixabay)</p>
        </div>
        <div
          className={`blog-main markdown-body ${this.state.isOpen
            ? 'blog-main-open'
            : ''}`}
          dangerouslySetInnerHTML={this.getMarkdown(post.fields.body)}
        />
      </div>
    );
  }
}

export default BlogBox;
