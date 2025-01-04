import React, { useState } from 'react';
import TaxiBookingForm from './TaxiBookingForm';
import RatesModal from './RatesModal';
import './TaxiService.css';

const TaxiServicePage = () => {
  const [isRatesModalOpen, setRatesModalOpen] = useState(false);

  return (
    <div className="taxi-service-container">
      <div className="taxi-content">
        <section className="taxi-info-section">
          <h1>Mr. A's Taxi Service</h1>
          <p className="service-description">
            Welcome to our trusted taxi service in Phuket. We provide reliable, comfortable 
            transportation with experienced English-speaking drivers who know the island inside out. 
            Whether you need an airport transfer, a day tour, or just a quick ride, we're here to 
            ensure your journey is safe and pleasant.
          </p>
          <button 
            className="view-rates-button"
            onClick={() => setRatesModalOpen(true)}
          >
            View All Rates
          </button>
        </section>

        <section className="taxi-booking-section">
          <h2>Book Your Ride</h2>
          <TaxiBookingForm />
        </section>

        <RatesModal 
          isOpen={isRatesModalOpen} 
          onClose={() => setRatesModalOpen(false)} 
        />
      </div>
    </div>
  );
};

export default TaxiServicePage;