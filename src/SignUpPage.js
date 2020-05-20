import React, { Component } from 'react';

export default class SignUpPage extends Component {
  // Signup
  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // Local fetch
    // fetch ("http://localhost:3000/signup", {

    // Heroku fetch
    fetch ('https://perfect-desserts-backend.herokuapp.com/signup', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(r => r.json())
    .then(userLogInData => {
      // console.log("User creation status: ", userLogInData);

      if (userLogInData.token) {
        localStorage.token = userLogInData.token;
        this.props.history.push('/profile');
      }
    })
  }

  render() {
    return (
      <div>
        {/* {<button>Switch to Login</button>} */}
        <h1>Sign up please!</h1>
        <form onSubmit={this.handleSubmit}>

          <label >Username:
            <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
          </label>

          <label>Password: 
            <input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
          </label>

          <input type="submit" value="Sign up" />

        </form>
      </div>
    )
  }
}