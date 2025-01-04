import React from 'react';
import { FaMapMarkedAlt, FaWater, FaCloudRain, FaCompass, FaQuestionCircle, FaTaxi } from 'react-icons/fa';
import './EssentialInfo.css';

const EssentialInfo = () => {
  const links = [
    {
      icon: <FaMapMarkedAlt />,
      title: "Island Map Guide",
      description: "A list of categorized maps of Phuket.",
      url: "/map/1"
    },
    {
      icon: <FaTaxi />,
      title: "Transport Service",
      description: "Book reliable transportation with our trusted local driver.",
      url: "/taxi-service"
    },
    {
      icon: <FaWater />,
      title: "Phuket Tide Chart",
      description: "A live chart to see high and low tide times for planning the perfect swim.",
      url: "https://www.tideschart.com/Thailand/Phuket/"
    },
    {
      icon: <FaCloudRain />,
      title: "Live Weather Rain Radar",
      description: "Government site showcasing live rain radar forecasts.",
      url: "https://weather.tmd.go.th/pktLoop.php"
    },
    {
      icon: <FaCompass />,
      title: "Activities & Excursions",
      description: "Discover Phuket with curated excursions. Learn more about island tours, snorkeling trips, and adventure activities.",
      url: "/activities"
    },
    {
      icon: <FaQuestionCircle />,
      title: "Frequently Asked Questions",
      description: "Find answers to commonly asked questions about visiting Phuket.",
      url: "/faq"
    }
  ];

  return (
    <div className="essential-info">
      <div className="essential-info-container">
        <h1>Essential Information</h1>
        
        <section className="info-section">
          <h2>Useful Links</h2>
          <div className="links-grid">
            {links.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className="link-card"
                target={link.url.startsWith('http') ? '_blank' : '_self'}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
              >
                <div className="link-icon">{link.icon}</div>
                <div className="link-content">
                  <h3>{link.title}</h3>
                  <p>{link.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="info-section">
          <h2>Emergency Contacts</h2>
          <ul className="contact-list">
            <li><strong>Tourist Police:</strong> 1155</li>
            <li><strong>Emergency Medical:</strong> 1669</li>
            <li><strong>Fire:</strong> 199</li>
            <li><strong>General Emergency:</strong> 191</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Local Customs</h2>
          <ul>
            <li>Dress modestly when visiting temples</li>
            <li>Remove shoes before entering homes and some shops</li>
            <li>Don't touch people's heads or point with your feet</li>
            <li>Show respect for the Thai royal family</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Weather Information</h2>
          <ul>
            <li>High season: November to April (dry and cooler)</li>
            <li>Rainy season: May to October</li>
            <li>Average temperature: 25-32°C (77-90°F)</li>
            <li>Check weather forecasts during monsoon season</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default EssentialInfo;