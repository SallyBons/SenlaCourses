import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteUser } from '../reducers/index';

class User extends Component {
  handleDelete = () => {
    const result = this.props.id;
    this.props.deleteUser(result);
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <p onClick={this.handleDelete}>{name}</p>
      </div>
    )
  }
}

 export default connect(null, { deleteUser })(User);
