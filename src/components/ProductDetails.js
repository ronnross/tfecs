import React, { Component } from 'react';
import Carousel from './Carousel';
import QuantitySelector from './QuantitySelector';
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
      <main key={'main'}>
        <h1 className="product__title">{title}</h1>
        <img
          className="product__image"
          src={Images[0].PrimaryImage[0].image}
          alt={title}
        />
        <Carousel images={Images} slidesToShow={3} />
        <div>
          <span className="price">
            {Offers[0].OfferPrice[0].formattedPriceValue}
          </span>
          <span className="price__description">
            {Offers[0].OfferPrice[0].priceQualifier}
          </span>
        </div>
        <ul className="extras">
          <li>spend $50, ship free</li>
          <li>$25 gift card with purchase of a select Ninja Blender</li>
        </ul>
        <QuantitySelector />
        <section className="button-set">
          <button className="btn primary">Pick up in store</button>
          <button className="btn secondary" autoFocus>
            Add to cart
          </button>
        </section>
        <section>
          <div className="returns">
            <p className="returns-title">returns</p>
            <p
              className="returns-text"
              dangerouslySetInnerHTML={{ __html: ReturnPolicy[0].legalCopy }}
            />
          </div>

          <button className="btn tertiary">Add to registry</button>
          <button className="btn tertiary">Add to list</button>
          <button className="btn tertiary">Share</button>
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
