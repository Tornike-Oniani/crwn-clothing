import React from 'react';

import './menu-item.style.scss';

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div
      className={`menu-item ${size !== undefined ? `menu-item--${size}` : ''}`}
    >
      <div
        className="menu-item__background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="menu-item__content">
        <h1 className="menu-item__title">{title.toUpperCase()}</h1>
        <span className="menu-item__subtitle">Shop now</span>
      </div>
    </div>
  );
};

export default MenuItem;
