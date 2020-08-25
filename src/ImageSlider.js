// your ImageSlider code here!
import React from 'react'; 
export default class ImageSlider extends React.Component {
    constructor(props){
        super()
        this.state = {
            currentSlideIndex: 0
            }
      }
      increment = () => {
          const count = this.state.count+1
          this.setState({
              currentSlideIndex: count
          })
      }
      
      render(){
          return (
          <p>I am on slide {this.state.currentSlideIndex}</p>
        )
    }
}