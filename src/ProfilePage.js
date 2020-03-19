import React, { Component } from 'react';

export default class ProfilePage extends Component {

  state = {
    username: ''
  }

  // Runs when ProfilePage gets set up
  componentDidMount(){
    fetch('http://localhost:3000/profile',{
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(user => this.setState({username: user.username}))
  }

  handleClick = () => {
    localStorage.clear();
    this.props.redirect('login');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Log Out</button>
        {/* <h1>Welcome to the ProfilePage!</h1> */}
        {
          this.state.username ?
          <h1>Welcome {this.state.username}!</h1> :
          <h1>Getting your info...</h1>
        }
      </div>
    )
  }
}