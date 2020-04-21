import React, { Component } from 'react';

export default class MessagePage extends Component {

  render () {
    console.log('message props', this.props);
    return (
      <div>
        Hi user! This is the message:
      </div>
    );
  }

}