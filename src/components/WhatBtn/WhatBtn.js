import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './WhatBtn.css';

class WhatBtn extends Component {
  handleClick = flipContainerId => {
    const flipContainer = document.getElementById(this.props.flipContainerId);

    if (flipContainer) {
      flipContainer.classList.toggle('flipped');
    }
  };

  render() {
    return (
      <span className="what-btn" onClick={this.handleClick}>
        What?
      </span>
    );
  }
}

WhatBtn.propTypes = {
  flipContainerId: PropTypes.string.isRequired
};

export default WhatBtn;
