import React from 'react';

const TaxiRates = () => {
  return (
    <div className="taxi-rates">
      <h2>Our Rates</h2>
      <div className="rates-grid">
        <div className="rate-card">
          <h3>Airport Transfer</h3>
          <p className="price">From ฿1,000</p>
          <ul>
            <li>Fixed price</li>
            <li>Meet & greet service</li>
            <li>Flight tracking</li>
          </ul>
        </div>
        <div className="rate-card">
          <h3>Hourly Charter</h3>
          <p className="price">From ฿500/hour</p>
          <ul>
            <li>Minimum 4 hours</li>
            <li>Flexible itinerary</li>
            <li>Wait & return service</li>
          </ul>
        </div>
        <div className="rate-card">
          <h3>Day Tour</h3>
          <p className="price">From ฿2,500</p>
          <ul>
            <li>Up to 8 hours</li>
            <li>Custom itinerary</li>
            <li>Local insights</li>
          </ul>
        </div>
      </div>
      <p className="rates-note">* Rates may vary based on season and specific requirements</p>
    </div>
  );
};

export default TaxiRates;