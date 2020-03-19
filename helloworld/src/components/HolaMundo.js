import { Component } from 'react';

export default class Statefull extends Component {
  constructor(props) {
    super(this.props)
    this.state = {
      hello: 'Hello React from GEEKDROID'
    }
  }

  render() {
    return (
      <h1>{this.state.hello}</h1>

    )
  }

  Method() {

  }


}
