import React from 'react';
import { NavLink } from 'react-router-dom';
import './TaxiNavigation.css';

const TaxiNavigation = () => {
  return (
    <nav className="taxi-nav">
      <div className="taxi-nav-container">
        <NavLink 
          to="/taxi-service/info" 
          className={({ isActive }) => isActive ? 'taxi-nav-link active' : 'taxi-nav-link'}
        >
          About Service
        </NavLink>
        <NavLink 
          to="/taxi-service/book" 
          className={({ isActive }) => isActive ? 'taxi-nav-link active' : 'taxi-nav-link'}
        >
          Book Now
        </NavLink>
        <NavLink 
          to="/taxi-service/rates" 
          className={({ isActive }) => isActive ? 'taxi-nav-link active' : 'taxi-nav-link'}
        >
          Rates
        </NavLink>
      </div>
    </nav>
  );
};

export default TaxiNavigation;