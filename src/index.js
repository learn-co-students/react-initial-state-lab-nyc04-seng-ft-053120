import React from 'react';
import ReactDOM from 'react-dom';
import ImageSlider from './ImageSlider';
import Bomb from './Bomb';

ReactDOM.render(
  <div>
    <ImageSlider />
    <Bomb initialCount={Math.floor(Math.random(0) * Math.floor(5))} />
  </div>,
  document.getElementById('root')
);
