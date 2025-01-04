import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMenu, IoClose } from 'react-icons/io5';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header className="header">
      <nav className="nav-container">
        <NavLink to="/essential-info" className="nav-logo">
          Mango Tree Villa
        </NavLink>
        
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
        </button>

        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <NavLink to="/map/1" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            Island Map Guide
          </NavLink>
          <NavLink to="/activities" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            Activities
          </NavLink>
          <NavLink to="/taxi-service" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            Transport
          </NavLink>
          <NavLink to="/faq" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            FAQ
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;