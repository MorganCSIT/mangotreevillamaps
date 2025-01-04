import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkedAlt, FaPhone, FaUmbrellaBeach, FaInfoCircle } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to Mango Tree Villa</h1>
          <p>Your perfect getaway in the heart of Phuket</p>
        </div>
      </div>

      <div className="quick-links">
        <Link to="/map/1" className="quick-link-card">
          <FaMapMarkedAlt className="card-icon" />
          <h2>Area Guide</h2>
          <p>Discover local attractions, restaurants, and essential services</p>
        </Link>

        <Link to="/taxi-service" className="quick-link-card">
          <FaPhone className="card-icon" />
          <h2>Transportation</h2>
          <p>Book reliable transportation with our trusted local driver</p>
        </Link>

        <Link to="/essential-info" className="quick-link-card">
          <FaInfoCircle className="card-icon" />
          <h2>Essential Info</h2>
          <p>Important information about your stay and local customs</p>
        </Link>

        <Link to="/activities" className="quick-link-card">
          <FaUmbrellaBeach className="card-icon" />
          <h2>Activities</h2>
          <p>Explore exciting activities and experiences in Phuket</p>
        </Link>
      </div>

      <div className="welcome-section">
        <h2>About Our Villa</h2>
        <p>
          Nestled in the serene Cape Panwa area, Mango Tree Villa offers a perfect blend of comfort 
          and convenience. With stunning ocean views and modern amenities, our villa provides an 
          ideal base for exploring the beauty of Phuket.
        </p>
        <div className="features">
          <div className="feature">
            <h3>Location</h3>
            <p>Situated in peaceful Cape Panwa, just minutes from beautiful beaches and local attractions</p>
          </div>
          <div className="feature">
            <h3>Amenities</h3>
            <p>Enjoy our shared infinity pool, modern furnishings, and fully equipped kitchen</p>
          </div>
          <div className="feature">
            <h3>Experience</h3>
            <p>Perfect balance of relaxation and adventure with easy access to Phuket's highlights</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;