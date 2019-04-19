import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MainPageItem from './MainPageItem';
import './styles.css';
import {selectPosts} from '../../reducer/posts';

class MainPage extends PureComponent {
  static propTypes = {
    posts: PropTypes.array.isRequired
  }

  render() {
    const {posts} = this.props;

    return (
      <div className="mainpage-container">
        {posts.map(post => (
          <MainPageItem post={post} key={post.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: selectPosts(state)
});

export default connect(mapStateToProps)(MainPage);
