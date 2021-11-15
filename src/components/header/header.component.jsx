import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils.js';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.style.scss';

const Header = ({ currentUser }) => {
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
      </div>
    </div>
  );
};

export default Header;
