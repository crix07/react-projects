import React, { Component } from 'react';
import Button from './Button';
export default class Statefull extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hello: 'Hello React from GEEKDROID',
      isTrue: false
    }
    this.MethodToggle = this.MethodToggle.bind(this);
  }

  render() {
    return (
      <div>
        <h1>{this.state.hello}</h1>
        <h4>{this.state.isTrue ? 'Esto es Verdadero' : 'ESTO ES FALSO'}</h4>
        <Button toggle={this.MethodToggle} />
      </div>
    )
  }

  MethodToggle() {
    this.setState({
      isTrue: !this.state.isTrue
    })
  }

}
