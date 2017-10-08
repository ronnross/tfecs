import React from 'react';

const range = n =>
  Array(n)
    .fill()
    .map((_, i) => i + 1);

const Ratings = ({ rating }) => (
  <span>
    {range(5).map(
      (x, i) =>
        i + 1 <= rating ? (
          <i key={i} className="fa fa-star secondary-color" />
        ) : (
          <i key={i} className="fa fa-star" />
        )
    )}
  </span>
);

export default Ratings;
