import React, { Component } from 'react';

export default class SignUpPage extends Component {
  Signup
  render() {
    return (
      <div>
        {/* {<button>Switch to Login</button>} */}
        <h1>Sign up please!</h1>
        <form>
          <input type="text" name="username" />
          <input type="password" name="password" />
          <input type="submit" value="Sign up" />
        </form>
      </div>
    )
  }
}