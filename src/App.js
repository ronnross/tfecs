import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ProductDetails from './components/ProductDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      product: undefined
    };
  }
  componentWillMount() {
    axios
      .get('api/')
      .then(({ data }) => {
        this.setState({ product: data });
      })
      .catch(e => {
        console.log('error ', e);
      });
  }
  render() {
    const { product } = this.state;
    return (
      <div>
        {product ? (
          <ProductDetails product={product.CatalogEntryView[0]} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default App;
