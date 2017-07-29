import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../resources/svgs/logo.svg';
import './Logo.css';

const Logo = size => {
  const classNameSize = size === 'big' ? 'logo-big' : 'logo-small';

  return (
    <Link to="/">
      <img className={`${classNameSize}`} src={logo} alt="Logo" />
    </Link>
  );
};

Logo.propTypes = {
  size: PropTypes.string.isRequired
};

export default Logo;
