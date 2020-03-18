import React, { Component } from 'react';
import ProfilePage from './ProfilePage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

export default class App extends Component {
  state = {
    page: 'login'
  }


  render() {

    switch (this.state.page) {
      case 'login':
        return <LoginPage/>
      case 'signup':
        return <SignUpPage/>
      case 'profile':
        return <ProfilePage/>
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
