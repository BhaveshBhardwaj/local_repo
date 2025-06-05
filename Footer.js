// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="app-footer">
      <div className="container">
        <p>© {currentYear} My Simple React Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;