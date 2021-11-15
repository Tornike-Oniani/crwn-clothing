import React from 'react';

import './form-input.style.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="input-group">
      <input
        className="input-group__input"
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`input-group__label ${
            otherProps.value.length ? 'input-group__label--shrink' : ''
          }`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
