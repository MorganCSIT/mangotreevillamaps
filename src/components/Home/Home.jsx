import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkedAlt,
  FaTaxi,
  FaUmbrellaBeach,
  FaInfoCircle,
} from "react-icons/fa";
import EssentialInfo from "../EssentialInfo/EssentialInfo";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Mango Tree Villa</h1>
          <p>Wish to book again?</p>
          <Link
            to="https://mangotreevillaphuket.com/roomtypes.html"
            className="hero-book-button"
          >
            Check Availability
          </Link>
        </div>
      </div>

      <div className="quick-links">
        <EssentialInfo />
      </div>

      {/* <div className="quick-links">
        <Link to="/map/1" className="quick-link-card">
          <FaMapMarkedAlt className="card-icon" />
          <h2>Area Guide</h2>
          <p>Discover Phuket using catergorized maps</p>
        </Link>

        <Link to="/taxi-service" className="quick-link-card">
          <FaTaxi className="card-icon" />
          <h2>Transportation</h2>
          <p>
            Book reliable transportation with our trusted neighbor taxi drivers
          </p>
        </Link>

        <Link to="/activities" className="quick-link-card">
          <FaUmbrellaBeach className="card-icon" />
          <h2>Activities</h2>
          <p>Explore exciting activities and experiences in or around Phuket</p>
        </Link>
      </div> */}

      {/* <div className="welcome-section">
        <h2>About Our Villa</h2>
        <p>
          Nestled in the serene Cape Panwa area, Mango Tree Villa offers a
          perfect blend of comfort and convenience. With stunning ocean views
          and modern amenities, our villa provides an ideal base for exploring
          the beauty of Phuket.
        </p>
        <div className="features">
          <div className="feature">
            <h3>Location</h3>
            <p>
              Situated in peaceful Cape Panwa, just minutes from beautiful
              beaches and local attractions
            </p>
          </div>
          <div className="feature">
            <h3>Amenities</h3>
            <p>
              Enjoy our shared infinity pool, modern furnishings, and fully
              equipped kitchen
            </p>
          </div>
          <div className="feature">
            <h3>Experience</h3>
            <p>
              Perfect balance of relaxation and adventure with easy access to
              Phuket's highlights
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
