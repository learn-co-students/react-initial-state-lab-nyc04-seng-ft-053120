// your Bomb code here!
import React, { Component } from 'react';
export default class Bomb extends Component {

    state = {
        secondsLeft: this.props.initialCount
    }
    timer=()=>{
        if(this.state.secondsLeft>0){
        return (<div>{this.state.secondsLeft} seconds left before I go boom!</div>)
        }else{
            return (<div>Boom!</div>)
        }
    }
    render(){
    return(
    <div>{this.timer()}</div>
    )
    }
}