import React, { Component } from 'react';
import marked from 'marked';

import './BlogView.css';

class BlogView extends Component {
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

  render() {
    if (!this.props.post) {
      return null;
    }

    const { body } = this.props.post.fields;

    return (
      <div>
        <div
          className="blog-content markdown-body"
          dangerouslySetInnerHTML={this.getMarkdown(body)}
        />
      </div>
    );
  }
}

export default BlogView;
