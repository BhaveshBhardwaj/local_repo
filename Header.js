// src/components/Header.js
import React from 'react';
import './Header.css'; // We'll create this CSS file next

function Header() {
  return (
    <header className="app-header">
      <div className="container">
        <h1>My Simple React Website</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;