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
    // Local fetch
    // fetch('http://localhost:3000/login', {

    // Heroku fetch
    fetch('https://perfect-desserts-backend.herokuapp.com/login', {
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
        // this.props.redirect('profile');
        // console.log(this);
        // debugger;
        this.props.history.push('/profile');
      }
    })
  }
  
  render() {
    console.log(this.props.children);
    return (
      <div>
        {/* {<button>Switch to Signup</button>} */}
        <h1>Log in please!</h1>
        <form onSubmit={this.handleSubmit}>

          <label>Username: 
            <input onChange={this.handleChange} value={this.state.username} type="text" name="username" />
          </label>
          
          <label>Password: 
            <input onChange={this.handleChange} value={this.state.password} type="password" name="password" />
          </label>

          <input type="submit" value="Log in" />

        </form>
        {this.props.children}
      </div>
    );
  }
}