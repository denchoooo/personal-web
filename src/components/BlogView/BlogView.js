import React from 'react';
import './BlogView.css';

const BlogView = props => {
  console.log(props);
  return <div>BlogView for {props.title} </div>;
};

export default BlogView;
