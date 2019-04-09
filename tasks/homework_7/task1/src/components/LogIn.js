import React, { Component } from 'react';

class LogIn extends Component {
  handleOnClick = () => {
    console.log(this.props);
    const {handleLogin, history} = this.props;
    handleLogin();
    history.push('/');
  }

  render() {

    return (
      <button onClick={this.handleOnClick}>Log In</button>
    );
  }
}

export default LogIn;
