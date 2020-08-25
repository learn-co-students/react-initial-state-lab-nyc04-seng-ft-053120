// your ImageSlider code here!
import React from 'react';

//super() is needed within constructors()....
// super() must be called before any use of 'this' keyword
// super() refers to the parent's class
class ImageSlider extends React.Component {

    //constructo(): creates and initalize an object of that class
    //custom initialization will be done before any other methods
    //constructor args can be ommited. if one is given: slider = new ImageSlider('tiptop')
    //..tiptop is passed to the constructor to be used as its argument
    //this is refering to the new object to be created

    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }
    render() {
        return (
        <div>I am on slide {this.state.currentSlideIndex}</div>
        )
    }
}

export default ImageSlider



//in order to run npm test must have the following:

// import React from 'react';

// class ImageSlider extends React.Component {

    
//     render () {
//         return (
//             <div></div>
//         )
//     }
// }

// export default ImageSlider