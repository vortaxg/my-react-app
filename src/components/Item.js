import React, { Component } from 'react';
 class Item extends Component {
    render() {
        return (
        <li>
          <h1>{this.props.name}</h1>
          <h4>{this.props.age}</h4>
        </li>
        );
    }
  }
  export default Item;