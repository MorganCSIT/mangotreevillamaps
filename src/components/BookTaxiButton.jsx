import React, { useState } from "react";
import ProfilePicture from "./ProfilePicture";

const BookTaxiButton = () => {
  const [pickupPoint, setPickupPoint] = useState("");
  const [destination, setDestination] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [note, setNote] = useState(""); // Added state for request
  const [name, setName] = useState(""); // Added state for request

  const handleSubmit = (event) => {
    event.preventDefault();
    function formatDate(dateString) {
      const options = { month: "2-digit", day: "2-digit", year: "2-digit" };
      return new Date(dateString)
        .toDateString(undefined, options)
        .split("/")
        .join("-");
    }
    const message = `
How much would this cost?
Name
- ${name}

Date & Time
- ${formatDate(pickupDate)} @ ${pickupTime}

Pickup Point
- ${pickupPoint}

Destination
- ${destination}

Note
- ${note} 

`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+66620527020?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="form-container">
      <div className="profile-section">
        <div className="profile-picture-background">
          <ProfilePicture imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/17/aa/42/my-job.jpg?w=500&h=-1&s=1" />
        </div>
        <h2>Inquire Mr.A's Taxi Service</h2>
      </div>

      <form className="book-taxi-form" onSubmit={handleSubmit}>
        <label className="input-label">
          Your Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="book-taxi-input"
          />
        </label>
        <label className="input-label">
          Pickup Date:
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className="book-taxi-input"
          />
        </label>

        <label className="input-label">
          Pickup Time:
          <input
            type="time"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            className="book-taxi-input"
          />
        </label>

        <label className="input-label">
          Pickup Point:
          <input
            type="text"
            value={pickupPoint}
            onChange={(e) => setPickupPoint(e.target.value)}
            className="book-taxi-input"
          />
        </label>

        <label className="input-label">
          Destination:
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="book-taxi-input"
          />
        </label>

        <label className="input-label">
          Note:
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder=""
            className="book-taxi-input"
          />
        </label>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <button type="submit" className="book-taxi-button">
            Send Inquiry
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookTaxiButton;
