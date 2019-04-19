import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './styles.css';
import { getPostById } from '../../reducer/posts';

class PostCard extends PureComponent {
  static propTypes = {
    post: PropTypes.object.isRequired,
  }
  render() {
    const { post } = this.props;

    if (post) {
      return (
        <div className="post-container">
          <div className="post-text">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        </div>
      );
    }
    return null;
  }
}


export default connect((state, props) => {
  const { match: { params } } = props;
  return {
    post: getPostById(state, params.id)
  };
})(PostCard);
