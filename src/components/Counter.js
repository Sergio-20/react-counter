import React, { Component } from 'react';
import Button from './Button.js';

export default class Counter extends Component {

  constructor() {
    super();

    this.state = {
      currentNumber: 0
    };

  }

  decreaseCount = () => {
    this.setState({
      currentNumber: this.state.currentNumber - 1
    });
  };

  increaseCount = () => {
    this.setState({
      currentNumber: this.state.currentNumber + 1
    });
  };

  render() {

    return(
      <div id="counter-comp" style={ styleCounterComp } >
        <div className="Number" style={ styleNumber } > { this.state.currentNumber } </div>
        <div className="buttons" style={ styleButtons } >

          <Button action="minus" hoverColor="red" trigger={ this.decreaseCount } >-</Button>
          <Button action="plus" hoverColor="green" trigger={ this.increaseCount } >+</Button>

        </div>
      </div>
    );

  }

}

  const styleCounterComp = {
    maxWidth: '400px',
    margin: '0 auto',
    width: '100%'
  };

  const styleNumber = {
    border: '3px solid #000',
    fontFamily: 'monospace',
    fontSize: '2rem',
    fontWeight: '900',
    padding: '20px',
    textAlign: 'center'
  };

  const styleButtons = {
    display: 'flex'
  };
