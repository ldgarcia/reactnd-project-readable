import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as PostsAPI from '../utils/PostsAPI'
import * as postsActionCreators from '../actions/posts'
import PostList from '../components/PostList'

class PostListContainer extends Component {
  componentDidMount = () => {
    this.fetchPosts(this.props.category)
  }

  /* We need to update the posts state when the route changes,
     because the component is not necessarily re-mounted.
  */
  componentWillReceiveProps = (nextProps) => {
    if (this.props.category !== nextProps.category) {
      this.fetchPosts(nextProps.category)
    }
  }

  render = () => {
    return (
      <PostList {...this.props } deletePost={ this.deletePost } />
    )
  }

  fetchPostComments = post => {
    this.props.fetchPostCommentsRequest(post.id)
    PostsAPI.getComments(post.id)
    .then(comments => this.props.fetchPostCommentsSuccess(post.id, comments))
    .catch(exception => this.props.fetchPostCommentsFailure(exception))
  }

  fetchPosts = category => {
    if (category) {
      this.fetchPostsByCategory(category)
    } else {
      this.fetchAllPosts()
    }
  }

  fetchPostsByCategory = category => {
    this.props.fetchPostsRequest()
    return PostsAPI.getByCategory(category)
      .then(posts => {
        posts.forEach(this.fetchPostComments)
        this.props.fetchPostsSuccess(posts)
      })
      .catch(exception => this.props.fetchPostsFailure(exception))
  }

  fetchAllPosts = () => {
    this.props.fetchPostsRequest()
    return PostsAPI.getAll()
      .then(posts => {
        posts.forEach(this.fetchPostComments)
        this.props.fetchPostsSuccess(posts)
      })
      .catch(exception => this.props.fetchPostsFailure(exception))
  }

  deletePost = postId => {
    this.props.deletePostRequest()
    return PostsAPI.disable(postId)
      .then(post => this.props.deletePostSuccess(post))
      .catch(exception => this.props.deletePostFailure(exception))
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    category: ownProps.match.params.category || '',
    posts: state.posts.posts.map(post => {
      return {...post, comments: state.comments.comments.filter(comment => comment.parentId === post.id).length }
    }),
    sortForm: state.posts.forms.sort,
    ui: state.posts.ui,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(postsActionCreators, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostListContainer))
