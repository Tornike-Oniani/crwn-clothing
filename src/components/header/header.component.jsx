import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.style.scss';

const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;
