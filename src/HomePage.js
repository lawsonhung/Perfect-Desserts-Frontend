import React, { Component } from 'react';

export default class HomePage extends Component {

  handleClick = (e) => {
    e.preventDefault();
    this.props.history.push('/login');
  }

  render () {
    console.log(this.props);

    return (
      <div>
        Hi, I'm the HomePage!
        <button onClick={this.handleClick}>Log in here!</button>
      </div>
    );
  }
}