import React, { Component } from 'react';

export default class LoginPage extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(data => {
      // Checking what data is returned
      // console.log(data)

      // data.token will return true if it exists
      if (data.token){
        localStorage.token = data.token;
        // redirect() is a prop passed down from App.js
        this.props.redirect('profile');
      }
    })
  }
  
  render() {
    return (
      <div>
        {/* {<button>Switch to Signup</button>} */}
        <h1>Log in please!</h1>
        <form onSubmit={this.handleSubmit}>
          <label for="username">Username: </label>
          <input onChange={this.handleChange} value={this.state.username} type="text" name="username" />
          <label for="password">Password: </label>
          <input onChange={this.handleChange} value={this.state.password} type="password" name="password" />
          <input type="submit" value="Log in" />
        </form>
      </div>
    );
  }
}