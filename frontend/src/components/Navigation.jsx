import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;