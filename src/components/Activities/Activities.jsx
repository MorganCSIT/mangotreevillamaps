import React from "react";
import ActivityCard from "./ActivityCard";
import { activities } from "./activitiesData";
import "./Activities.css";

const Activities = () => {
  return (
    <div className="activities-page">
      <div className="activities-container">
        <header className="activities-header">
          <h1>Excursions & Activities</h1>
          <p>
            With the huge selection of companies available, we've handpicked the
            best trips for quality and value! Enjoy exclusive agent discounts,
            seamless transport, and the convenience of downloading brochures
            with a click.
          </p>

          <p className="quote">
            "Have questions? Simply request a booking for your chosen trip and
            include your questions in the note section"
          </p>
        </header>

        <div className="activities-grid">
          {activities.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
