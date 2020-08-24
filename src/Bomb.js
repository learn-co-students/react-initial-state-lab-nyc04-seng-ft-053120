import React from 'react'

class Bomb extends React.Component {
    state = {
        secondsLeft: this.props.initialCount,
    }

    timer = () => {
        return (
            !this.state.secondsLeft ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
        )
    }

    render() {
        return (
        <div>{this.timer()}</div>
        )
    }
}

export default Bomb;