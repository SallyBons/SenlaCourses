import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.css';

class MainPageItem extends PureComponent {
  static propTypes = {
   post: PropTypes.object.isRequired
  }

   render() {
    const {post} = this.props;
       return (
      <Link to={`/posts/${post.id}`}>
        <div className="mainpage-item">
         <p>{post.title}</p>
          </div>
      </Link>
    );
  }
}

export default MainPageItem;
