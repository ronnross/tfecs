import React, { Component } from 'react';
import Carousel from '../DesignSystem/Carousel';
import QuantitySelector from '../DesignSystem/QuantitySelector';
import ReviewPanel from './ReviewPanel';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const {
      title,
      Images,
      Offers,
      ItemDescription,
      ReturnPolicy,
      CustomerReview
    } = this.props.product;
    return [
      <main className="main-container" key={'main'}>
        <h1 className="product__title">{title}</h1>
        <img
          className="product__image"
          src={Images[0].PrimaryImage[0].image}
          alt={title}
        />
        <Carousel images={Images} slidesToShow={3} />
        <section aria-labelledby="price">
          <span className="price">
            {Offers[0].OfferPrice[0].formattedPriceValue}
          </span>
          <span className="price__description">
            {Offers[0].OfferPrice[0].priceQualifier}
          </span>
        </section>
        <ul className="extras">
          <li className="extras__item">spend $50, ship free</li>
          <li className="extras__item">
            $25 gift card with purchase of a select Ninja Blender
          </li>
        </ul>
        <section className="fulfillment" aria-labelledby="price">
          <QuantitySelector />
          <div className="button__set">
            <button className="btn btn__primary">Pick up in store</button>
            <button className="btn btn__secondary" autoFocus>
              Add to cart
            </button>
          </div>
        </section>
        <section>
          <div className="returns">
            <p className="returns__title">returns</p>
            <p
              className="returns__text"
              dangerouslySetInnerHTML={{ __html: ReturnPolicy[0].legalCopy }}
            />
          </div>
          <div className="button__set">
            <button className="btn btn__tertiary">Add to registry</button>
            <button className="btn btn__tertiary">Add to list</button>
            <button className="btn btn__tertiary">Share</button>
          </div>
        </section>
      </main>,
      <ReviewPanel
        key={'reviews'}
        data={ItemDescription}
        reviews={CustomerReview}
      />
    ];
  }
}

export default ProductDetails;
