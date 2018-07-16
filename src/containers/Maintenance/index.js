import React, { Component } from 'react';

import './Maintenance.css';
import icon from '../../resources/images/maintenance.svg';

export default class Maintenance extends Component {
  render() {
    return (
      <div className="maintenance__wrapper">
        <img alt="Maintenance icon" className="maintenance__icon" src={icon} />
        <span className="maintenance__title">
          I am rebuilding my website :(
        </span>
        <div className="maintenance__links">
          <a
            className="maintenance__links__item"
            href="https://twitter.com/denichodev"
          >
            twitter
          </a>
          <a
            className="maintenance__links__item"
            href="https://github.com/denichodev"
          >
            github
          </a>
        </div>
        <div className="maintenance__icon_credit">
          awesome icon made by{' '}
          <a href="http://www.freepik.com" title="Freepik">
            Freepik
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>{' '}
          :)
        </div>
      </div>
    );
  }
}
