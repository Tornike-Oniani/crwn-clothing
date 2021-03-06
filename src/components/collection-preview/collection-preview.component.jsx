import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.style.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="collection-preview__title">{title.toUpperCase()}</h1>
      <div className="collection-preview__list">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
