import React, { useState } from 'react'
import './navbar.css';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  function toggleNav() {
    setVisible(!visible);
  }

  return (
    <nav className="primary">
      <div className='logo'>
      </div>

      <button onClick={toggleNav} className="mobile-nav-toggle" aria-controls="primary-naviation" aria-expanded={visible}>
        <span className="sr-only">Menu</span>
      </button>

      <ul id="primary-navigation" className={`primary-navigation ${visible ? 'visible' : ''}`}>
          <li>
            POST
          </li>
          <li>
            CARD
          </li>
          <li>
            ACCOUNT
          </li>
        </ul>      
    </nav>
  )
}

export default Navbar
