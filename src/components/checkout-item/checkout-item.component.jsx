import React from 'react';
import { connect } from 'react-redux';

import {
  removeItem,
  addItem,
  decreaseItemQuantity,
} from '../../redux/cart/cart-actions';

import './checkout-item.style.scss';

const CheckoutItem = ({
  cartItem,
  removeItem,
  addItem,
  decreaseItemQuantity,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="checkout-item__image-container">
        <img src={imageUrl} alt="item" className="checkout-item__image" />
      </div>
      <span className="checkout-item__name">{name}</span>
      <span className="checkout-item__quantity">
        <div
          className="checkout-item__arrow"
          onClick={() => decreaseItemQuantity(cartItem)}
        >
          &#10094;
        </div>
        <span className="checkout-item__value">{quantity}</span>
        <div className="checkout-item__arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="checkout-item__price">{price}</span>
      <div
        className="checkout-item__remove-button"
        onClick={() => removeItem(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  decreaseItemQuantity: (item) => dispatch(decreaseItemQuantity(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
