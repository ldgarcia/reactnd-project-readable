import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as CommentsAPI from '../utils/CommentsAPI'
import { voteCommentRequest, voteCommentSuccess, voteCommentFailure } from '../actions/comments'
import Votes from '../components/Votes'

class CommentVotesContainer extends Component {
  render = () => {
    const { comment } = this.props
    return (
      <Votes score={ comment.voteScore } vote={ this.vote } />
    )
  }

  vote = option => {
    const { comment, voteCommentRequest, voteCommentSuccess, voteCommentFailure } = this.props
    voteCommentRequest(comment.id, option)
    return CommentsAPI.vote(comment.id, option)
      .then(comment => voteCommentSuccess(comment))
      .catch(exception => voteCommentFailure(exception))
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({voteCommentRequest, voteCommentSuccess, voteCommentFailure}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentVotesContainer);
