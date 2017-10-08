import React from 'react';
import Ratings from '../DesignSystem/Ratings';

const Reviews = ({ data, reviews }) => {
  console.log('reviews', reviews);
  const { totalReviews, consolidatedOverallRating, Con, Pro } = reviews[0];

  return (
    <aside className="product-highlights">
      <h2>Product hightlights!</h2>
      <ul className="">
        {data[0].features.map((f, idx) => (
          <li key={idx} dangerouslySetInnerHTML={{ __html: f }} />
        ))}
      </ul>
      <div className="reviews-overall">
        <span>
          <Ratings rating={consolidatedOverallRating} />
          overall
        </span>
        <a href="# ">view all {totalReviews} reviews</a>
      </div>
      <table>
        <thead>
          <tr style={{ borderBottom: 'solid 1px secondary-color' }}>
            <th>
              PRO <br />most helpful 4-5 star reviews
            </th>
            <th>
              CON <br />most helpful 1-2 star reviews
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Ratings rating={Pro[0].overallRating} />
              <h3>{Pro[0].title}</h3>
              <p>{Pro[0].review}</p>
              <p>
                {Pro[0].screenName} {Pro[0].datePosted}
              </p>
            </td>
            <td>
              <Ratings rating={Con[0].overallRating} />
              <h3>{Con[0].title}</h3>
              <p>{Con[0].review}</p>
              <p>
                {Con[0].screenName} {Con[0].datePosted}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </aside>
  );
};

export default Reviews;
