// your Bomb code here!
//allow this file to use code from another file
import React from 'react';

//super() is needed for constructors()....
// super() must be called before any use of 'this' keyword
// super() refers to the parent's class

class Bomb extends React.Component {

    //constructo(): creates and initalize an object of that class
    //custom initialization will be done before any other methods
    //constructor args can be ommited. if one is given: slider = new ImageSlider('tiptop')
    //..tiptop is passed to the constructor to be used as its argument
    //this is refering to the new object to be created

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    
    render(){
        return(
        <div>
            {this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!`: "Boom!"}
        </div>
        )
    }
}


//allows this file to be used in another file
export default Bomb