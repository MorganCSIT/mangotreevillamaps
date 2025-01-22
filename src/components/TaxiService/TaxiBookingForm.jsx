import React, { useState } from "react";
import ProfilePicture from "../ProfilePicture";

const TaxiBookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    pickupDate: "",
    pickupTime: "",
    pickupPoint: "",
    destination: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, pickupDate, pickupTime, pickupPoint, destination, note } =
      formData;

    const message = `
Name
- ${name}

Date & Time
- ${new Date(pickupDate).toDateString()} @ ${pickupTime}

Pickup Point
- ${pickupPoint}

Destination
- ${destination}

Note
- ${note}

How much would this cost?`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+66810851211?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="booking-form-container">
      <div className="profile-section">
        <div className="profile-picture-background">
          <ProfilePicture imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/17/aa/42/my-job.jpg?w=500&h=-1&s=1" />
        </div>
        <h2>Book with Mr. A's Taxi Service</h2>
      </div>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="pickupDate">Pickup Date</label>
            <input
              type="date"
              id="pickupDate"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="pickupTime">Pickup Time</label>
            <input
              type="time"
              id="pickupTime"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
              className="form-input"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="pickupPoint">Pickup Point</label>
          <input
            type="text"
            id="pickupPoint"
            name="pickupPoint"
            value={formData.pickupPoint}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="pax">Pax (number of people)</label>
          <input
            type="number"
            id="pax"
            name="pax"
            value={formData.pax}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="note">Additional Notes</label>
          <textarea
            id="note"
            name="note"
            value={formData.note}
            onChange={handleChange}
            className="form-input"
            rows="3"
          />
        </div>

        <button type="submit" className="submit-button">
          Send Inquiry via WhatsApp
        </button>
      </form>
    </div>
  );
};

export default TaxiBookingForm;
