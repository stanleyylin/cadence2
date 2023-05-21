import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import UploadPage from '../pages/UploadPage';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  function toggleNav() {
    setVisible(!visible);
  }

  return (
    <nav className="primary">
      <div className="logo"></div>

      <button
        onClick={toggleNav}
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={visible}
      >
        <span className="sr-only">Menu</span>
      </button>

      <ul id="primary-navigation" className={`primary-navigation ${visible ? 'visible' : ''}`}>
        <li>
          <Link to="/upload">UPLOAD</Link> {/* Update the link to point to "/upload" */}
        </li>
        <li>
          CARD
        </li>
        <li>
          ACCOUNT
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
