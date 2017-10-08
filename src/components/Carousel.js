import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const { images, slidesToShow } = this.props;
    const AlternateImages = images[0].AlternateImages;
    return (
      <div className="carousel">
        <button className="carousel__button">
          <i className="fa fa-angle-left fa-4x" />
        </button>
        <ul className="carousel__images">
          {AlternateImages.map((img, idx) => {
            if (idx >= slidesToShow) {
              return (
                <li key={idx}>
                  <img
                    className="carousel__image"
                    src={img.image}
                    alt="product tile"
                    style={{ display: 'none' }}
                  />
                </li>
              );
            }
            return (
              <li key={idx}>
                <img
                  className="carousel__image"
                  src={img.image}
                  alt="product tile"
                />
              </li>
            );
          })}
        </ul>
        <button className="carousel__button">
          <i className="fa fa-angle-right fa-4x" />
        </button>
      </div>
    );
  }
}

export default Carousel;
