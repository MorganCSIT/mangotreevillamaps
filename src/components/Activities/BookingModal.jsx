import React, { useState } from 'react';

const BookingModal = ({ isOpen, onClose, activity }) => {
  const [formData, setFormData] = useState({
    numPeople: '',
    names: [],
    excursionDate: '',
    paymentDateTime: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `
Hello, I would like to book the ${activity.title}.

Number of People: ${formData.numPeople}
${formData.names.map((name, i) => `Person ${i + 1}: ${name}`).join('\n')}

Excursion Date: ${formData.excursionDate}
Payment Date and Time: ${formData.paymentDateTime}
${formData.notes ? `Questions/Notes: ${formData.notes}` : ''}`;

    window.open(`https://wa.me/+66810851211?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <div className="modal-header">
          <h3>{activity.title}</h3>
          <p className="modal-price">Price: {activity.price}</p>
        </div>

        <a 
          href={`/brochures/${activity.brochure}`}
          className="brochure-download"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Brochure
        </a>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label>Number of People</label>
            <input
              type="number"
              min="1"
              max="10"
              value={formData.numPeople}
              onChange={e => {
                const num = parseInt(e.target.value) || '';
                setFormData({
                  ...formData,
                  numPeople: num,
                  names: num ? Array(num).fill('') : []
                });
              }}
            />
          </div>

          {formData.names.map((_, index) => (
            <div key={index} className="form-group">
              <label>Name of Person {index + 1}</label>
              <input
                type="text"
                value={formData.names[index]}
                onChange={e => {
                  const newNames = [...formData.names];
                  newNames[index] = e.target.value;
                  setFormData({ ...formData, names: newNames });
                }}
                required
              />
            </div>
          ))}

          <div className="form-group">
            <label>Excursion Date</label>
            <input
              type="date"
              value={formData.excursionDate}
              onChange={e => setFormData({ ...formData, excursionDate: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Payment Date and Time</label>
            <input
              type="datetime-local"
              value={formData.paymentDateTime}
              onChange={e => setFormData({ ...formData, paymentDateTime: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Questions or Notes</label>
            <textarea
              value={formData.notes}
              onChange={e => setFormData({ ...formData, notes: e.target.value })}
              rows="4"
            />
          </div>

          <button type="submit" className="submit-button">
            Request Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;