import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <h2>Your App</h2>
        </div>
        <nav className="nav-menu">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Dashboard</a>
          <a href="#" className="nav-link">Settings</a>
        </nav>
        <div className="nav-actions">
          <button className="btn btn-outline">Sign In</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
