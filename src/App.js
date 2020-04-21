import React, { Component } from 'react';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
// import FourLOLZFourPage from './FourLOLZFourPage';
import MessagePage from './MessagePage';
import { Switch, Route } from 'react-router-dom';

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

    // switch (this.state.page) {
    //   case 'login':
    //     return <LoginPage redirect={this.redirect} >
    //         <h1>Hello! Login tag</h1>
    //       </LoginPage>
    //   case 'signup':
    //     return <SignUpPage/>
    //   case 'profile':
    //     return <ProfilePage redirect={this.redirect}/>
    //   default:
    //     return <LoginPage/>
    // }

    return (
      <Switch>
        <Route path={'/profile'} component={ProfilePage} />
        <Route path={'/login'} component={LoginPage} />
        <Route path={'/signup'} component={SignUpPage} />
        <Route path={'/messages'} component={MessagePage} />
        <Route path={'/'} component={HomePage} />
      </Switch>
    )
  }
}
