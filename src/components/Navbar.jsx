import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import UploadPage from '../pages/upload/UploadPage';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  function toggleNav() {
    setVisible(!visible);
  }

  return (
    <nav className="primary">
      <Link to="/" className="logo"></Link>

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
          <Link to="/upload" className='test'>UPLOAD</Link> {/* Update the link to point to "/upload" */}
        </li>
        <li>
          <Link to="/feed" className='test'>FEED</Link> 
        </li>
        <li>
          ACCOUNT
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
