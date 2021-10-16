import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.style.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      onClick={() => history.push(`${match.url}${linkUrl}`)}
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

export default withRouter(MenuItem);
