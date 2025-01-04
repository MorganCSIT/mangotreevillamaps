import React from "react";

const MapDisplay = ({ mapUrl }) => {
  return (
    <div className="map-container">
      <iframe
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        src={mapUrl}
        style={{
          border: "none",
          borderRadius: "12px",
          transition: "opacity 0.3s ease"
        }}
        onLoad={(e) => {
          e.target.style.opacity = 1;
        }}
        initial={{ opacity: 0 }}
      ></iframe>
    </div>
  );
};

export default MapDisplay;