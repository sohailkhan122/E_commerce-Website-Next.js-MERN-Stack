"use client"
import React from 'react';

const ArrivalCard = ({ product, onClick }) => {
  return (
    <div className='arrivalCard' onClick={onClick}>
      <img src={product.images} alt='new_arrivals' />
      <span>{product.productName}</span>
    </div>
  );
};

export default ArrivalCard;
