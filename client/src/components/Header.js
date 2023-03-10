import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/form">Create Ad</Link></li>
            <li><Link to="/ads">View Ads</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;