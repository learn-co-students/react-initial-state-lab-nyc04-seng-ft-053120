// your ImageSlider code here!
import React from 'react'



class ImageSlider extends React.Component {

    constructor() {
        super() 
        this.state = {
            currentSlideIndex: 0
        }}

        increment = () => {
            const newCount = this.state.count + 1
            this.setState({
                currentSlideIndex: newCount
            })
        }



    render () {
        return (
            <p>I am on slide {this.state.currentSlideIndex}</p>
            )
         
      
}
}

export default ImageSlider