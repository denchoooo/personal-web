import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './NavItem.css';

const NavItem = ({ text, linkTo, exact }) => {
  return (
    <li className="nav-item">
      <NavLink
        exact={exact}
        to={linkTo}
        activeStyle={{
          color: '#07d3bc'
        }}
      >
        {text}
      </NavLink>
    </li>
  );
};

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  exact: PropTypes.bool
};

NavItem.defaultProps = {
  exact: false
};

export default NavItem;
