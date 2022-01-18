import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils.js';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.style.scss';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="header__logo-container" to="/">
        <Logo className="header__logo" />
      </Link>

      <div className="header__options">
        <Link className="header__option" to="/shop">
          Shop
        </Link>
        <Link className="header__option" to="/shop">
          Contact
        </Link>
        {currentUser ? (
          <div className="header__option-btn" onClick={() => auth.signOut()}>
            Sign out
          </div>
        ) : (
          <Link className="header__option" to="/signin">
            Sign in
          </Link>
        )}
        <CartIcon />
      </div>
      {
        // Show cart dropdown only when its status is not hidden (We toggle hidden bool when clicking on CartIcon)
        hidden ? null : <CartDropdown />
      }
    </div>
  );
};

// State is the root-reducer. Our root-reducer has 'user' sub-reducer
// and from there we want to pull currentUser
//? We use nested destructuring here google it later
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
