import React from 'react';
import { format } from 'date-fns';
import Ratings from '../DesignSystem/Ratings';

const localDate = 'MMM DD, YYYY';

const Reviews = ({ data, reviews }) => {
  console.log('reviews', reviews);
  const { totalReviews, consolidatedOverallRating, Con, Pro } = reviews[0];

  return (
    <aside className="reviews">
      <div className="reviews__overall">
        <span className="reviews__stars">
          <Ratings rating={consolidatedOverallRating} size={2} />
          <p>overall</p>
        </span>
        <a href="# ">view all {totalReviews} reviews</a>
      </div>
      <table>
        <thead>
          <tr style={{ borderBottom: 'solid 1px secondary-color' }}>
            <th className="rating__header">
              PRO
              <div className="rating__sub">most helpful 4-5 star reviews</div>
            </th>
            <th className="rating__header pl1">
              CON
              <div className="rating__sub">most helpful 1-2 star reviews</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="rating__review">
              <Ratings rating={Pro[0].overallRating} size={1} />
              <h3 className="rating__title">{Pro[0].title}</h3>
              <p className="rating__text">{Pro[0].review}</p>
              <p className="rating__user">
                <span className="rating__username">{Pro[0].screenName}</span>
                {format(Pro[0].datePosted, localDate)}
              </p>
            </td>
            <td className="rating__review pl1">
              <Ratings rating={Con[0].overallRating} size={1} />
              <h3 className="rating__title">{Con[0].title}</h3>
              <p className="rating__text">{Con[0].review}</p>
              <p className="rating__user">
                <span className="rating__username">{Con[0].screenName}</span>
                {format(Con[0].datePosted, localDate)}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </aside>
  );
};

export default Reviews;
