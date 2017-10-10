import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      len: this.props.images[0].AlternateImages.length
    };
  }

  handleShift(direction) {
    if (direction === 'left') {
      let idx = this.state.index - 1;
      this.setState({ index: idx });
      this.carouselFrame.scrollTo({
        left: idx * 80,
        behavior: 'smooth'
      });
    } else {
      let idx = this.state.index + 1;
      this.setState({ index: idx });
      this.carouselFrame.scrollTo({
        left: idx * 80,
        behavior: 'smooth'
      });
    }
  }

  render() {
    const { images, slidesToShow } = this.props;
    const AlternateImages = images[0].AlternateImages;
    const { index, len } = this.state;
    return (
      <div className="carousel">
        <button
          className="carousel__button"
          disabled={index === 0}
          onClick={() => this.handleShift('left')}
        >
          <i className="fa fa-angle-left fa-4x" />
        </button>
        <div
          className="carousel__images"
          ref={carouselFrame => {
            this.carouselFrame = carouselFrame;
          }}
        >
          {AlternateImages.map((img, idx) => {
            return (
              <img
                key={idx}
                className="carousel__image"
                src={img.image}
                alt="product tile"
              />
            );
          })}
        </div>
        <button
          className="carousel__button"
          disabled={index === len - 3}
          onClick={() => this.handleShift('right')}
        >
          <i className="fa fa-angle-right fa-4x" />
        </button>
      </div>
    );
  }
}

export default Carousel;
