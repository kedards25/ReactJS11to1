import React, { Component } from 'react';

export default class Welcome extends Component {
  render() {
    return (
      <div> 
        Welcome {this.props.name} 
        <h2>Test</h2>
      </div>
    );
  }
}
