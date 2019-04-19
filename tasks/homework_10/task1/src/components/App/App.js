import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';
import MainPage from '../MainPage';
import PostCard from '../PostCard';
import {loadPosts} from '../../reducer/posts';

class App extends PureComponent {
  static propTypes = {
    loadPosts: PropTypes.func.isRequired
  }

  componentDidMount() {
    const {loadPosts} = this.props;
    loadPosts();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/posts/:id" component={PostCard} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(null, {loadPosts})(App);
