import React from 'react';
import { Route, Switch } from 'react-router-dom';

import requireAuth from './requireAuth';
import Dashboard from '../dashboard/Dashboard';
import Landing from '../Landing';

import Signup from '../auth/Signup';
import Login from '../auth/Login';

import CurrentProfile from '../profile/CurrentProfile';
import CreateProfile from '../profile/CreateProfile';
import EditProfile from '../profile/EditProfile';
import ProfileSearch from '../profile/ProfileSearch';

import CreatePost from '../posts/CreatePost';
import EditPostContainer from '../posts/EditPostContainer';
import Post from '../posts/Post';
import PostPreview from '../posts/PostPreview';
import PostSearch from '../posts/PostSearch';

import Search from '../search/Search';

import Submission from '../submissions/Submission';

const Routes = () => {
    return (
      <div className="container-fluid">
          <Switch>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/signup" component={Signup}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/dashboard" component={requireAuth(Dashboard)}/>
              <Route exact path="/profile" component={requireAuth(CurrentProfile)}/>
              <Route exact path="/create_profile" component={requireAuth(CreateProfile)}/>
              <Route exact path="/edit_profile" component={requireAuth(EditProfile)}/>
              <Route exact path="/create_post" component={requireAuth(CreatePost)}/>
              <Route exact path="/posts/preview/:id" component={requireAuth(PostPreview)}/>
              <Route exact path="/posts/:id" component={requireAuth(Post)}/>
              <Route exact path="/edit_post/:id" component={requireAuth(EditPostContainer)}/>
              <Route exact path="/search" component={requireAuth(Search)}/>
              <Route exact path="/search/posts/:search_term" component={requireAuth(PostSearch)}/>
              <Route exact path="/search/profiles/:search_term" component={requireAuth(ProfileSearch)}/>
              <Route exact path="/submissions/:id" component={requireAuth(Submission)}/>
          </Switch>
      </div>
    )
}

export default Routes;
