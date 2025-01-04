import React from 'react';

const ratesData = [
  { destination: 'Phuket Airport', price: '1000' },
  { destination: 'Patong Beach', price: '800' },
  { destination: 'Kata Beach', price: '900' },
  { destination: 'Karon Beach', price: '850' },
  { destination: 'Phuket Old Town', price: '600' },
  { destination: 'Big Buddha', price: '700' },
  { destination: 'Chalong Temple', price: '650' },
  { destination: 'Promthep Cape', price: '900' },
  { destination: 'Surin Beach', price: '1000' },
  { destination: 'Bang Tao Beach', price: '1100' },
  { destination: 'Nai Harn Beach', price: '950' },
  { destination: 'Rawai Beach', price: '900' },
  { destination: 'Central Festival', price: '600' },
  { destination: 'Central Floresta', price: '600' },
  { destination: 'Weekend Market', price: '650' }
];

const RatesModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <div className="modal-header">
          <h2>Taxi Rates</h2>
          <p className="rates-note">* Prices are in Thai Baht (฿) and may vary based on time and season</p>
        </div>

        <div className="rates-table-container">
          <table className="rates-table">
            <thead>
              <tr>
                <th>Destination</th>
                <th>Price (฿)</th>
              </tr>
            </thead>
            <tbody>
              {ratesData.map((rate, index) => (
                <tr key={index}>
                  <td>{rate.destination}</td>
                  <td>{rate.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RatesModal;