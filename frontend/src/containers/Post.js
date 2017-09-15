import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as PostsAPI from '../utils/PostsAPI'
import * as postsActionCreators from '../actions/posts'
import Post from '../components/Post'

class PostContainer extends Component {
  /* We need to load a post individually in case an
     user opens a post detail view directly
  */
  componentDidMount = () => {
    const { shouldLoadPost, postId } = this.props
    if (shouldLoadPost) {
      this.fetchPost(postId)
    }
  }

  render = () => {
    return (
      <Post { ...this.props } deletePost={ this.deletePost } />
    )
  }

  fetchPost = postId => {
    this.props.fetchPostRequest()
    PostsAPI.get(postId)
    .then(post => {
      this.fetchPostComments(post)
      this.props.fetchPostSuccess(post)
    })
    .catch(exception => this.props.fetchPostFailure(exception))
  }

  /* TODO: Find a way to share these two functions with PostListContainer to DRY */
  fetchPostComments = post => {
    this.props.fetchPostCommentsRequest(post.id)
    PostsAPI.getComments(post.id)
    .then(comments => this.props.fetchPostCommentsSuccess(post.id, comments))
    .catch(exception => this.props.fetchPostCommentsFailure(exception))
  }

  deletePost = postId => {
    this.props.deletePostRequest()
    return PostsAPI.disable(postId)
      .then(post => this.props.deletePostSuccess(post))
      .catch(exception => this.props.deletePostFailure(exception))
  }

}

const mapStateToProps = (state, ownProps) => {
  const { category, postId } = ownProps.match.params
  const postIndex = state.posts.posts.findIndex(post => post.id === postId)
  const shouldLoadPost = postIndex === -1
  const post = !shouldLoadPost ? state.posts.posts[postIndex] : {}
  const comments = !shouldLoadPost ? state.comments.comments.filter(comment => comment.parentId === post.id): []

  return {
    shouldLoadPost,
    postId,
    post,
    comments
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(postsActionCreators, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostContainer))
