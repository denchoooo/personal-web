import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './NavItem.css';

const NavItem = ({ text, linkTo }) => {
  return (
    <li className="nav-item">
      <Link to={linkTo}>
        {text}
      </Link>
    </li>
  );
};

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired
};

export default NavItem;
