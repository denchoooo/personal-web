import React from 'react';
import PropTypes from 'prop-types';
import './SocialIcon.css';

const SocialIcon = ({ to, className }) => {
  return (
    <div>
      <a href={to} target="_blank" rel="noreferrer noopener">
        <i className={`social-icon centered ${className}`} />
      </a>
    </div>
  );
};

SocialIcon.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default SocialIcon;
