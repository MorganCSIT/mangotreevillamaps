import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MapDisplay from '../MapDisplay';
import Article from '../Article';
import mapsData from '../../mapsData';
import './MapRoute.css';

const MapRoute = () => {
  const { mapId } = useParams();
  const navigate = useNavigate();
  const currentMap = mapsData.find((data) => data.id.toString() === mapId);

  const handleMapChange = (e) => {
    navigate(`/map/${e.target.value}`);
  };

  if (!currentMap) {
    return <Navigate replace to="/map/1" />;
  }

  return (
    <div className="pair-container">
      <div className="map-selector">
        <select 
          value={mapId} 
          onChange={handleMapChange}
          className="map-select"
        >
          <option value="1">Essentials</option>
          <option value="2">Town</option>
          <option value="3">Romantic</option>
          <option value="4">Markets</option>
        </select>
      </div>
      <div className="content-container">
        <MapDisplay mapUrl={currentMap.mapUrl} />
        <Article article={currentMap.article} />
      </div>
    </div>
  );
};

export default MapRoute;