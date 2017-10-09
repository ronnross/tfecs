import React from 'react';

const QuantitySelector = () => {
  return (
    <label className="quantity__area" htmlFor="quantity">
      <span className="quantity__title">quantity:</span>
      <div className="quantity__selection">
        <button className="quantity__button">
          <i className="fa fa-minus quantity__icon" />
        </button>
        <span className="quantity__display">1</span>
        <button className="quantity__button">
          <i className="fa fa-plus quantity__icon" />
        </button>
      </div>
    </label>
  );
};

export default QuantitySelector;
