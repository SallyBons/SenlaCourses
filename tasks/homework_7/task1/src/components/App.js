import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './Navigation';
import MainPage from './MainPage';
import Books from './Books';
import Book from './Book';
import Cart from './Cart';
import LogIn from './LogIn';
import './App.css';


class App extends Component {
  state = {
    isLogin: false
  }

  handleLogin = () => this.setState({ isLogin: true });
  handleLogOut = () => this.setState({ isLogin: false });

  render() {
    const { isLogin } = this.state;

    return (
      <BrowserRouter>
        <div className="App">
          <Navigation
            handleLogOut={this.handleLogOut}
            isLogin={isLogin}
          />
          <Switch>
            <Route path="/" component={MainPage} exact />
            <Route path="/books" component={Books} />
            <Route path="/book/:id" component={Book} />
            <Route
              path='/cart'
              render={() => <Cart isLogin={isLogin} />}
            />
            <Route
              path='/login'
              render={(props) =>
                <LogIn
                  handleLogin={this.handleLogin}
                  isLogin={isLogin}
                  {...props}
                />}
            />
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
