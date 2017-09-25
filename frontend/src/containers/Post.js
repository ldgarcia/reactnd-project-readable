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
    const { post, postNotFound }  = this.props
    if (!post) {
      if (postNotFound) {
        return (<PageNotFound />)
      }
      return null
    }
    return (<Post {...this.props} />)
  }
}

const mapStateToProps = ({posts, comments, ui}, {match}) => {
  const postIndex = posts.findIndex(post => {
    return match.params.postId === post.id
      && match.params.category === post.category
    })
  const post = postIndex !== -1 ? posts[postIndex] : null
  const postComments = postIndex !== -1 ? comments.filter(c => post.id === c.parentId): []
  return {
    postNotFound: ui.postNotFound,
    post,
    comments: postComments,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    ...postActions,
    ...uiActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)
