// your Bomb code here!
import React from 'react'


class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
       
    }
    

    render () {

        if (this.props.initialCount === 0) {
            return "Boom!"
        } else {
        return (
            <p>{this.props.initialCount} seconds left before I go boom!</p>
        )
        }
}
    }


export default Bomb