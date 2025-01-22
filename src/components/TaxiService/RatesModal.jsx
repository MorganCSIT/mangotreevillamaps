import React from "react";

const ratesData = [
  { destination: "Bangrong Pier", price: 800 },
  { destination: "Kamala", price: 800 },
  { destination: "Intercon.Phuket Kamala", price: 1000 },
  { destination: "Kata / Karon", price: 700 },
  { destination: "Laemhin Pier", price: 550 },
  { destination: "Ratsada Pier", price: 500 },
  { destination: "Rawai", price: 700 },
  { destination: "Ya Nui Beach", price: 700 },
  { destination: "Patong", price: 700 },
  { destination: "Half day tour (4hrs)", price: 1600 },
  { destination: "Half day tour (6hrs)", price: 2000 },
  { destination: "Full day tour (8hrs)", price: 2500 },
  { destination: "Tiger Kingdom 1 way", price: 500 },
  { destination: "Tiger Kingdom round trip", price: 900 },
  { destination: "Phuket Bus Terminal 1", price: 400 },
  { destination: "Phuket Bus Terminal 2", price: 500 },
  { destination: "Ao Sane", price: 700 },
  { destination: "Thien Sin Pier", price: 500 },
  { destination: "Crown Plaza Hotel", price: 200 },
  { destination: "Chalong", price: 500 },
  { destination: "Surin Beach", price: 1000 },
  { destination: "Old town", price: 400 },
  { destination: "Soi Taiead", price: 400 },
  { destination: "Khao Lak <La Flora>", price: 2500 },
];

const RatesModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <div className="modal-header">
          <h2>Taxi Rates</h2>
          <p className="rates-note">
            * Prices are in Thai Baht (฿) and may vary based on time and season
          </p>
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
