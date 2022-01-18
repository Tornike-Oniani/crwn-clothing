import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.style.scss';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown__items" />
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
