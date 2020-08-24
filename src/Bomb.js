import React from 'react';

export default class Bomb extends React.Component {

  // The initial state of Bomb should have a property called secondsLeft.

  // The initial value of secondsLeft should be equal to the initialCount prop of our Bomb component.

  state = {
    secondsLeft: this.props.initialCount
  }

  // It should render the text '<SECONDS_LEFT> seconds left before I go boom!', where <SECONDS_LEFT> is the value of secondsLeft.

  render() {
    return (
      (this.state.secondsLeft === 0) ? (<p>Boom!</p>) : (
        <p>{this.state.secondsLeft} seconds left before I go boom!</p>
      )
    )
  }
}


