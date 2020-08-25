// your Bomb code here!

import React, { Component } from "react";

export default class Bomb extends Component{
    // constructor (props){
    //     super()
        state = {
             secondsLeft: this.props.initialCount
        }
    // } 

     timer = () => {
       if (this.state.secondsLeft > 0){    
        return (<h1>{this.state.secondsLeft } seconds left before I go boom!</h1>)

        }else{
           return (<h2>Boom!</h2>)
        }
    }
    
    
    render(){
        return (
           <div>
             {this.timer()}
           </div>
        )
    }
}