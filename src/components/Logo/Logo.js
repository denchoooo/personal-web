import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../resources/svgs/logo.svg';
import './Logo.css';

const Logo = ({ size }) => {
  return (
    <Link to="/">
      <img className={`logo-small`} src={logo} alt="Logo" />
    </Link>
  );
};

Logo.propTypes = {
  size: PropTypes.string.isRequired
};

export default Logo;
