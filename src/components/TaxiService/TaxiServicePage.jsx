import React, { useState } from "react";
import TaxiBookingForm from "./TaxiBookingForm";
import RatesModal from "./RatesModal";
import "./TaxiService.css";

const TaxiServicePage = () => {
  const [isRatesModalOpen, setRatesModalOpen] = useState(false);

  return (
    <div className="taxi-service-container">
      <div className="taxi-content">
        <section className="taxi-info-section">
          <h1>Mr. A's Taxi Service</h1>
          <p className="service-description">
            Our trusted neighbor taxi provides reliable, comfortable
            transportation. Whether you need an airport transfer, a day package,
            or just a quick ride, our neighbor can arrange a taxi for you. We
            advise you to book in advance to avoid waiting. Other transport
            options can be found on popular ride-hailing apps like Grab, Bolt,
            or Indrive.
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
