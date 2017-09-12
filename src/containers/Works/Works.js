import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Works.css';

class Works extends Component {
  render() {
    return (
      <div className="container-works">
        <h1 className="wip-text">
          Aww.. I'm still building this :(
          <br />
          Get back to <Link to="/">home</Link> instead
        </h1>
      </div>
    );
  }
}

export default Works;
