import React from 'react';
import BookingModal from './BookingModal';
import { useState } from 'react';

const ActivityCard = ({ activity }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="activity-card" onClick={() => setIsModalOpen(true)}>
        <i className={`activity-icon ${activity.icon}`}></i>
        <div className="activity-content">
          <h3>{activity.title}</h3>
          <p className="activity-description">{activity.description}</p>
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