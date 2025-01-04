import React from 'react';

const TaxiServiceInfo = () => {
  return (
    <div className="taxi-info-container">
      <h1>Welcome to Mr. A's Taxi Service</h1>
      
      <div className="info-section">
        <h2>Why Choose Our Service?</h2>
        <ul className="features-list">
          <li>
            <span className="icon">🚕</span>
            <div>
              <h3>Professional Driver</h3>
              <p>Experienced, English-speaking driver with excellent local knowledge</p>
            </div>
          </li>
          <li>
            <span className="icon">⭐</span>
            <div>
              <h3>Comfort & Safety</h3>
              <p>Clean, air-conditioned vehicle with safety features</p>
            </div>
          </li>
          <li>
            <span className="icon">💰</span>
            <div>
              <h3>Fair Pricing</h3>
              <p>Transparent pricing with no hidden charges</p>
            </div>
          </li>
          <li>
            <span className="icon">🗺️</span>
            <div>
              <h3>Local Expert</h3>
              <p>Get insider tips and recommendations for your journey</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="info-section">
        <h2>Service Areas</h2>
        <p>We provide taxi services throughout Phuket, including:</p>
        <ul className="areas-list">
          <li>Airport transfers</li>
          <li>Hotel & resort transfers</li>
          <li>Day tours</li>
          <li>Night market visits</li>
          <li>Restaurant & entertainment venue transfers</li>
        </ul>
      </div>
    </div>
  );
};

export default TaxiServiceInfo;