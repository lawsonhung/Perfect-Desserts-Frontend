import React, { Component } from 'react';

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        {/* {<button>Switch to Signup</button>} */}
        <h1>Log in please!</h1>
        <form>
          <input type="text" name="username" />
          <input type="passowrd" name="password" />
          <input type="submit" value="Log in" />
        </form>
      </div>
    );
  }
}