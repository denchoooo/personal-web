import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FlipCard.css';

class FlipCard extends Component {
  render() {
    return (
      <div className="flipcard-container">
        <div id={this.props.id} className="flipcard">
          {this.props.children}
        </div>
      </div>
    );
  }
}

FlipCard.propTypes = {
  id: PropTypes.string.isRequired
};

export default FlipCard;
