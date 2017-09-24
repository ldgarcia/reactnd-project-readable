import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as postActions from '../actions/posts'
import * as uiActions from '../actions/ui'
import PageNotFound from '../components/PageNotFound'
import Post from '../components/Post'

class PostContainer extends Component {
  componentDidMount() {
    const { match, fetchPost } = this.props
    const { category, postId } = match.params
    fetchPost(category, postId)
  }

  render() {
    return typeof this.props.post.id !== 'undefined' ?
      <Post { ...this.props } /> :
      <PageNotFound />
  }

}

const mapStateToProps = (state, ownProps) => {
  const { category, postId } = ownProps.match.params
  const postIndex = state.posts.findIndex(post => post.id === postId && post.category === category)
  const post = postIndex !== -1 ? state.posts[postIndex] : {}
  const comments = postIndex !== -1 ? state.comments.comments.filter(comment => comment.parentId === post.id): []
  return {
    post,
    comments,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    ...postActions,
    ...uiActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)
