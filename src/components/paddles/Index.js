
import React, { Component } from 'react';

import { Image } from 'semantic-ui-react';

import '../../css/components/paddles/index.css';

import data from './data';

import PaddlesMenu from './PaddlesMenu';
import Athlete from './Athlete';
import PaddleInfo from './PaddleInfo';

const defaultProduct = data[0].list[0];

export default class Paddles extends Component {
  state = {
    backgroundImage: defaultProduct.img,
    currentProduct: defaultProduct,
    activeItem: null
  }

  handleOnMouseEnter = (currentProduct, backgroundImage) => {
    this.setState({
      ...this.state,
      currentProduct,
      backgroundImage
    });
  }

  render() {
    const { activeItem, backgroundImage, currentProduct } = this.state;

    return (
      <section className="paddles">
        <Image fluid src={backgroundImage} />
        <PaddlesMenu
          data={data}
          handleOnMouseEnter={this.handleOnMouseEnter}
          activeItem={activeItem}
        />

        <Athlete product={currentProduct} />
        <PaddleInfo product={currentProduct} />
      </section>
    );
  }
}
