import React, { Component } from 'react';

export default class LoginPage extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value })
  }
  
  render() {
    return (
      <div>
        {/* {<button>Switch to Signup</button>} */}
        <h1>Log in please!</h1>
        <form>
          <input onChange={this.handleChange} value={this.state.username} type="text" name="username" />
          <input onChange={this.handleChange} value={this.state.password} type="password" name="password" />
          <input type="submit" value="Log in" />
        </form>
      </div>
    );
  }
}