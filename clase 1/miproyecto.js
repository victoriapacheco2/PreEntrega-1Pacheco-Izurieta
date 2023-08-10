import React from 'react';
import './CardWidget.css'; // Estilo CSS para el widget (ajústalo según tus necesidades)
import { FaBell } from 'react-icons/fa'; // Importa el icono de campana de react-icons

const CardWidget = ({ notificationNumber }) => {
  return (
    <div className="card-widget">
      <div className="icon">
        <FaBell />
      </div>
      <div className="notification">
        {notificationNumber}
      </div>
    </div>
  );
};

export default CardWidget;
