import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

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

const mapStateToProps = ({posts, comments}, {match}) => {
  const postIndex = posts.findIndex(post => {
    return match.params.postId === post.id
      && match.params.category === post.category
    })
  return {
    post: postIndex !== -1 ? posts[postIndex] : {},
    comments: postIndex !== -1 ? comments.filter(comment => match.params.postId === comment.parentId): []
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    ...postActions,
    ...uiActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)
