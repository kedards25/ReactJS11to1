import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    return (
        //fetching and displaying details of product
        //received as prop named as item
      <li className="prodList">
          <h3>{this.props.item.name}</h3>
          <p>{this.props.item.description}</p>
      </li>
    );
  }
}
