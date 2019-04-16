import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserList from './UserList';
import {loadUser} from '../reducers/index';
import './App.css';

class App extends Component {

   handleClick = () => {
     const {loadUser} = this.props;
    loadUser();
  }
  render() {
    return (
      <div className="App">
         <UserList />
        <button  onClick={this.handleClick}>Load</button>
      </div>
    );
  }
}

export default connect(null, {loadUser})(App);
