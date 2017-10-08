import React from 'react';

const QuantitySelector = () => {
  return (
    <div className="quantity__area">
      <label htmlFor="quantity">
        quantity:
        <button className="quantity__button">
          <i className="fa fa-minus quantity__icon" />
        </button>
        1
        <button className="quantity__button">
          <i className="fa fa-plus quantity__icon" />
        </button>
      </label>
    </div>
  );
};

export default QuantitySelector;
