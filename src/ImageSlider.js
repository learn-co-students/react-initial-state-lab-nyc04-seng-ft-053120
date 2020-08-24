import React, { Component } from 'react';

class ImageSliderComponent extends Component {

  state = {
    currentSlideIndex: 0
  }

  render() {
    return (
      <div>
        I am on slide {this.state.currentSlideIndex}
      </div>
    );
  }
}

export default ImageSliderComponent;
