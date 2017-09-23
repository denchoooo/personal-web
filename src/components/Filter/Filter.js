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
        <div
          className="filter-clear"
          onClick={this.handleClear}
          style={{
            opacity: this.state.filter ? 1 : 0,
            cursor: this.state.filter ? 'pointer' : 'auto'
          }}
        >
          <div className="clear-cross" />
          <div className="clear-cross" />
        </div>
      </div>
    );
  }
}

export default Filter;
