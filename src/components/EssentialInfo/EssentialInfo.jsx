import React from "react";
import {
  FaMapMarkedAlt,
  FaWater,
  FaCloudRain,
  FaCompass,
  FaQuestionCircle,
  FaTaxi,
} from "react-icons/fa";
import "./EssentialInfo.css";
import { FaNoteSticky } from "react-icons/fa6";

const EssentialInfo = () => {
  const links = [
    {
      icon: <FaMapMarkedAlt />,
      title: "Island Map Guide",
      description: "A list of categorized maps of Phuket.",
      url: "/map/1",
    },
    {
      icon: <FaTaxi />,
      title: "Transport Service",
      description:
        "Book reliable transportation with our trusted local driver.",
      url: "/taxi-service",
    },
    {
      icon: <FaWater />,
      title: "Phuket Tide Chart",
      description:
        "A live chart to see high and low tide times for planning the perfect swim.",
      url: "https://www.tideschart.com/Thailand/Phuket/",
    },
    {
      icon: <FaCloudRain />,
      title: "Live Weather Rain Radar",
      description: "Government site showcasing live rain radar forecasts.",
      url: "https://weather.tmd.go.th/pktLoop.php",
    },
    {
      icon: <FaCompass />,
      title: "Activities & Excursions",
      description:
        "Discover Phuket with curated excursions. Learn more about island tours, snorkeling trips, and adventure activities.",
      url: "/activities",
    },
    {
      icon: <FaQuestionCircle />,
      title: "Frequently Asked Questions",
      description:
        "Find answers to commonly asked questions about visiting Phuket.",
      url: "/faq",
    },
    {
      icon: <FaNoteSticky />,
      title: "Blog",
      description:
        "Read interesting articles about Phuket and its attractions.",
      url: "/blog",
    },
  ];

  return (
    <div className="essential-info-container">
      <section className="info-section">
        <header className="activities-header">
          <h1 className="header-title">Information Directory</h1>
          Here you will find a collection of useful links and information to
          help you make the most of your stay. If you have any additional
          questions or need further assistance, please do not hesitate to
          contact us.
          <p className="quote">
            "If you have any additional questions or need further assistance,
            please do not hesitate to contact us."
          </p>
        </header>
        <h2>Useful Links</h2>
        <div className="links-grid">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="link-card"
              target={link.url.startsWith("http") ? "_blank" : "_self"}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : ""}
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
        <h2>House Rules</h2>
        <ul>
          <li>
            <strong>Quiet Hours:</strong> Quiet hours are from 10:00 PM to 8:00
            AM.
          </li>
          <li>
            <strong>Smoking:</strong> Smoking is prohibited inside the rooms.
          </li>
          <li>
            <strong>Guests:</strong> Only registered guests are allowed to stay.
            Please inform us if you plan to have visitors.
          </li>
          <li>
            <strong>Cleaning:</strong> Enjoy a complimentary weekly cleaning
            service. Additional room cleaning is available for 400 baht.
          </li>
          <li>
            <strong>Check-in/Check-out:</strong> Check-in is available from 2:00
            PM onwards, and checkout should be completed by 12:00 PM. Early
            check-in depends when the current guest leaves, but we can store
            your bags while you wait for check-in.
          </li>
          <li>
            <strong>Late Check-in:</strong> For check-ins after 10:00 PM, please
            use our trusted taxi driver who will safely take you to your room at
            the standard price.
          </li>
        </ul>
      </section>

      <section className="info-section">
        <h2>Emergency Contacts</h2>
        <ul className="contact-list">
          <li>
            <strong>Tourist Police:</strong> 1155
          </li>
          <li>
            <strong>Emergency Medical:</strong> 1669
          </li>
          <li>
            <strong>Fire:</strong> 199
          </li>
          <li>
            <strong>General Emergency:</strong> 191
          </li>
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
  );
};

export default EssentialInfo;
