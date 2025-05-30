import React from 'react';
import './RotatingCard.css';
const RotatingCard = () => {
  return (
    <div className="card">
      <span className="card-border" />
      <span className="card-mask" />
      <div className="content">Rotating Border</div>
    </div>
  );
};
export default RotatingCard;