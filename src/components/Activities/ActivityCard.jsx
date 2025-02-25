import React from "react";
import BookingModal from "./BookingModal";
import { useState } from "react";

const ActivityCard = ({ activity }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="activity-card" onClick={() => setIsModalOpen(true)}>
        <img
          src={activity.image}
          alt={activity.title}
          className="activity-image"
          onError={(e) => {
            e.target.src = "/images/placeholder.jpg";
          }}
        />
        <div className="activity-content">
          <div>
            <h3>{activity.title}</h3>
            <p className="activity-description">{activity.description}</p>
          </div>
          <div className="activity-details">
            <p className="activity-price">Price: {activity.price}</p>
            <p className="activity-time">{activity.time}</p>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        activity={activity}
      />
    </>
  );
};

export default ActivityCard;
