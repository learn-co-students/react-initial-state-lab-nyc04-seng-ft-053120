// your Bomb code here!
import React from 'react'; 
export default class Bomb extends React.Component {
    constructor(props) { //props that the component gets from its parent
        super()
        this.state = { //define initial state with a key of 'someKey' set to the 'someValue' prop
          secondsLeft: props.initialCount
        }
      }
    render(){
        if (this.props.initialCount === 0){
            return "Boom!"
        }else{
            return (
                <p>{this.props.initialCount} seconds left before I go boom!</p>
            )
        }
    }
    }