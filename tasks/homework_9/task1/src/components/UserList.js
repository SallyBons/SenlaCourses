import React, { Component } from 'react';
import User from './User';
import { connect } from 'react-redux';

class UserList extends Component {

  Renderer = () => {
    const { users } = this.props;
    
    if (users.lenght !== 0) {
      return <div>
        {users.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </div>
    }

    return <div></div>
  }

  render() {
    return (this.Renderer())
  }
}

export default connect(
  (state) => ({
    users: state.users
  }))(UserList);
