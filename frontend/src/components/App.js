import React from 'react'
import { Route } from 'react-router-dom'

import CategoryList from '../containers/CategoryList'
import PostList from '../containers/PostList'
import Post from '../containers/Post'
import AddPost from '../containers/AddPost'
import EditPost from '../containers/EditPost'
import AddComment from '../containers/AddComment'
import EditComment from '../containers/EditComment'

const App = () => (
  <div className="container">
    <CategoryList />
    <Route exact path="/:category?/" component={ PostList } />
    <Route exact path="/:category/:postId/" component={ Post } />
    <AddPost />
    <EditPost />
    <AddComment />
    <EditComment />
  </div>
)

export default App;
