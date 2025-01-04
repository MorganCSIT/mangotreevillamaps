import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TaxiNavigation from './TaxiNavigation';
import TaxiBookingForm from './TaxiBookingForm';
import TaxiServiceInfo from './TaxiServiceInfo';
import TaxiRates from './TaxiRates';
import './TaxiService.css';

const TaxiServicePage = () => {
  return (
    <div className="taxi-service-container">
      <TaxiNavigation />
      <div className="taxi-service-content">
        <Routes>
          <Route path="/info" element={<TaxiServiceInfo />} />
          <Route path="/book" element={<TaxiBookingForm />} />
          <Route path="/rates" element={<TaxiRates />} />
          <Route path="/" element={<Navigate replace to="/taxi-service/info" />} />
        </Routes>
      </div>
    </div>
  );
};

export default TaxiServicePage;