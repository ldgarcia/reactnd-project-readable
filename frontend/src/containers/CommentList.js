import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as commentsActionCreators from '../actions/comments'
import * as CommentsAPI from '../utils/CommentsAPI'
import CommentList from '../components/CommentList'

class CommentListContainer extends Component {

  render = () => (
    <CommentList { ...this.props } deleteComment={ this.deleteComment } />
  )

  deleteComment = id => {
    this.props.deleteCommentRequest()
    CommentsAPI.disable(id)
    .then(comment => {
      this.props.deleteCommentSuccess(comment)
    })
    .catch(exception => {
      this.props.deleteCommentsFailure(exception)
    })
  }
}

const mapStateToProps = state => {
  return {
    sortForm: state.forms.sort
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(commentsActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer)
