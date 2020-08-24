// your Bomb code here!
import React, {Component} from 'react'

class Bomb extends React.Component {
    // console.log(this.props.initialCount)

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }


    render() {

        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

        return (
            <div>{message}</div>
        )
    }
}

export default Bomb;