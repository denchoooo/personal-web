import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';

const Article = ({ title, children }) => {
  return (
    <article>
      <h1 className="article-title">
        {title}
      </h1>
      <p className="article-content">
        {children}
      </p>
    </article>
  );
};

Article.propTypes = {
  title: PropTypes.string
};

export default Article;
