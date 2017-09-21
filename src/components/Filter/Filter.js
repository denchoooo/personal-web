import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: ''
    };
  }

  handleChange = e => {
    const value = e.target.value;

    this.setState(() => ({ filter: value }));
  };

  handleClear = () => {
    this.setState(() => ({ filter: '' }));
  };

  render() {
    return (
      <div className="filter-container">
        <input
          value={this.state.filter}
          onChange={this.handleChange}
          type="text"
          className="filter-input"
          placeholder="Filter..."
        />
        <div className="filter-clear" onClick={this.handleClear}>
          <div
            className="clear-cross"
            style={{
              visibility: this.state.filter ? 'visible' : 'hidden',
              opacity: this.state.filter ? 1 : 0
            }}
          />
          <div
            className="clear-cross"
            style={{
              visibility: this.state.filter ? 'visible' : 'hidden',
              opacity: this.state.filter ? 1 : 0
            }}
          />
        </div>
      </div>
    );
  }
}

export default Filter;
