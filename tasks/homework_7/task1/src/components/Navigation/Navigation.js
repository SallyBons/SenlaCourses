import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './styles.css';

class Navigation extends Component {
  handleOnClick = () => {
    const { handleLogOut } = this.props;
    handleLogOut();
  }

  render() {
    const { isLogin } = this.props;

    let CheckLogin = () => {
      if (isLogin) {
        return <button onClick={this.handleOnClick}>Log Out</button>;
      } else {
        return (
          <React.Fragment>
            <Redirect to="/" />
            <NavLink to="/login" className="nav-item" activeClassName="active-nav-item">Log In</NavLink>
          </React.Fragment>)
      }
    }

    return (
      <div>
        <nav className="navigation">
          <NavLink to="/" className="nav-item" activeClassName="active-nav-item" exact>Main Page</NavLink>
          <NavLink to="/books" className="nav-item" activeClassName="active-nav-item">Books</NavLink>
          <NavLink to="/cart" className="nav-item" activeClassName="active-nav-item">Cart</NavLink>

          {CheckLogin()}
        </nav>
      </div>
    );
  }
}

export default Navigation;
