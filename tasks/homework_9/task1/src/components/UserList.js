import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteUser } from '../reducers/index';

class UserList extends Component {

  handleDelete = (e) => {
    const result = e.currentTarget.textContent;
    this.props.deleteUser(result);
  }
  someFunction = () => {
    const { users } = this.props;

    if (users != null) {
      return <div>
        {users.map((username, i) => <p onClick={this.handleDelete} key={i}>{username}</p>)}
      </div>
    }

    return <div></div>
  }

  render() {
    return (this.someFunction())
  }
 }

export default connect(
  (state) => ({
    users: state.users
  }),{ deleteUser })(UserList);
