import React, { Component } from 'react';

export default class HomePage extends Component {
  render () {
    console.log(this.props);

    return (
      <div>
        Hi, I'm the HomePage!
      </div>
    );
  }
}