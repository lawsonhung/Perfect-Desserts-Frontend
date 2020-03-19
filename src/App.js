import React, { Component } from 'react';
import ProfilePage from './ProfilePage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

export default class App extends Component {
  state = {
    page: 'login'
  }

  redirect = (page) => {
    // If key from state and variable are the same, you can just shorten it to:
    // this.setState({ page })
    this.setState({ page: page })
  }

  // Runs very first time when app loads
  componentDidMount() {
    // If localStorage has a token, redirect to profile page
    if (localStorage.token) {
      this.redirect('profile')
    }
  }

  render() {

    switch (this.state.page) {
      case 'login':
        return <LoginPage redirect={this.redirect} />
      case 'signup':
        return <SignUpPage/>
      case 'profile':
        return <ProfilePage redirect={this.redirect}/>
      default:
        return <LoginPage/>
    }

    // return (
    //   <div>
    //     {/* <h1>
    //       Yo. React App front end Perfect Desserts hot reload.
    //     </h1> */}
    //     <ProfilePage/>
    //     <SignUpPage/>
    //     <LoginPage/>
    //   </div>
    // );
  }
}
