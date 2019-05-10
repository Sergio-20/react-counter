import React, { Component } from 'react';

export default class Button extends Component {

  constructor() {
    super();

    this.state = {
      hover: false
    };

  }

  toggleHover = () => {
    this.setState({
      hover: !this.state.hover
    });
  };

  render() {

    const styleButton = {
      background: this.state.hover ? this.props.hoverColor : '#fff',
      border: '3px solid #000',
      cursor: 'pointer',
      fontFamily: 'monospace',
      fontSize: '2rem',
      fontWeight: '900',
      padding: '20px',
      textAlign: 'center',
      transition: 'all ease-in-out 0.4s',
      width: '50%'
    };

    return(
        <div className={ `button ${this.props.action}` } style={ styleButton }
        onMouseEnter={ this.toggleHover } onMouseLeave={ this.toggleHover } onClick={ this.props.trigger } >

        { this.props.children }

        </div>
    );

  }

}
