// src/Card.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faSignInAlt, faBus, faDoorOpen, faPlane, faUserGraduate, faExchangeAlt, faWarehouse, faCar } from '@fortawesome/free-solid-svg-icons';
//import './Card.css';

const icons = {
  "Leave Application": faClipboard,
  "Gate Pass": faSignInAlt,
  "Bus Part Authorization": faBus,
  "Exit Protocols": faDoorOpen,
  "Travel Authorization": faPlane,
  "Skilling and Capacity Development": faUserGraduate,
  "Asset Transfer": faExchangeAlt,
  "Warehouse Production Planning and Control System": faWarehouse,
  "Vehicle Nomination Form": faCar,
};

const Card = ({ title, link }) => {
  return (
    <div className="card" onClick={() => window.location.href = link}>
      <FontAwesomeIcon icon={icons[title]} size="2x" />
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
