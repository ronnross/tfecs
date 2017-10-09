import React from 'react';

const range = n =>
  Array(n)
    .fill()
    .map((_, i) => i + 1);

const Ratings = ({ rating, size }) => (
  <span>
    {range(5).map(
      (x, i) =>
        i + 1 <= rating ? (
          <i key={i} className={`fa fa-star fa-${size}x secondary-color`} />
        ) : (
          <i key={i} className={`fa fa-star fa-${size}x`} />
        )
    )}
  </span>
);

export default Ratings;
