import React from 'react';

import './checkout-item.style.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, quantity, price } }) => {
  return (
    <div className="checkout-item">
      <div className="checkout-item__image-container">
        <img src={imageUrl} alt="item" className="checkout-item__image" />
      </div>
      <span className="checkout-item__name">{name}</span>
      <span className="checkout-item__quantity">{quantity}</span>
      <span className="checkout-item__price">{price}</span>
      <div className="checkout-item__remove-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
