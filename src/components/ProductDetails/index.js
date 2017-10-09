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
      CustomerReview,
      purchasingChannelCode
    } = this.props.product;

    const showAddToCart = ['0', '1'].includes(purchasingChannelCode);
    const showPickUp = ['0', '2'].includes(purchasingChannelCode);

    console.log(showAddToCart, showPickUp);
    return [
      <main className="container" key={'main'}>
        <div className="product__panel--view">
          <h1 className="product__title">{title}</h1>
          <img
            className="product__image"
            src={Images[0].PrimaryImage[0].image}
            alt={title}
          />
          <Carousel images={Images} slidesToShow={3} />
        </div>
        <div className="product__panel--details">
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
              {showPickUp && (
                <button className="btn btn__primary">Pick up in store</button>
              )}
              {showAddToCart && (
                <button className="btn btn__secondary" autoFocus>
                  Add to cart
                </button>
              )}
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
          <section id="highlights">
            <h2 className="highlights__title">product highlights</h2>
            <ul className="highlights__list">
              {ItemDescription[0].features.map((f, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: f }} />
              ))}
            </ul>
          </section>
        </div>
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
