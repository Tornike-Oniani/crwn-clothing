import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './checkout.style.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout">
      <div className="checkout__header">
        <div className="checkout__column">
          <span className="checkout__title">Product</span>
        </div>
        <div className="checkout__column">
          <span className="checkout__title">Description</span>
        </div>
        <div className="checkout__column">
          <span className="checkout__title">Quantity</span>
        </div>
        <div className="checkout__column">
          <span className="checkout__title">Price</span>
        </div>
        <div className="checkout__column">
          <span className="checkout__title">Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="checkout__total">
        <span className="checkout__total-text">Total: ${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
