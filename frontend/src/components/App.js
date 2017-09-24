import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PageNotFound from './PageNotFound'
import CategoryList from '../containers/CategoryList'
import PostList from '../containers/PostList'
import Post from '../containers/Post'
import AddPost from '../containers/AddPost'
import EditPost from '../containers/EditPost'
import AddComment from '../containers/AddComment'
import EditComment from '../containers/EditComment'

function App() {
  return (
    <div className="container">
      <CategoryList />
      <Switch>
        <Route
          exact
          path="/:category/:postId/"
          component={Post}
        />
        <Route
          exact
          path="/:category?/"
          component={PostList}
        />
        <Route component={PageNotFound} />
      </Switch>
      <AddPost />
      <EditPost />
      <AddComment />
      <EditComment />
    </div>
  )
}

export default App;
