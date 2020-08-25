// your ImageSlider code here!
import React, { Component } from 'react'


export default class ImageSlider extends React.Component {

      state = {
        currentSlideIndex: 0
      }
  
  
    render() {
      return (
        <p>I am on slide {this.state.currentSlideIndex}</p>
      )
    }
  }