import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Cart extends Component {
  render() {
    const { isLogin } = this.props;
    return (
      isLogin
        ?  <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaqgQjuM2e45HJfUK__4x7-hYYO_tjxH2Vsmu4mmGl-yBIefJW" alt="oops" width="400" height="400" /> Cart is empty :(</p>
        : <Redirect to="/login" />
    )
  }
}

export default Cart
