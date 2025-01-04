import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMenu, IoClose } from 'react-icons/io5';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target) &&
          !buttonRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <NavLink to="/essential-info" className="nav-logo">
          Mango Tree Villa
        </NavLink>
        
        <button 
          ref={buttonRef}
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
        </button>

        <div 
          ref={menuRef}
          className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}
        >
          <NavLink 
            to="/map/1" 
            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            Island Map Guide
          </NavLink>
          <NavLink 
            to="/activities" 
            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            Activities
          </NavLink>
          <NavLink 
            to="/taxi-service" 
            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            Transport
          </NavLink>
          <NavLink 
            to="/faq" 
            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            FAQ
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;