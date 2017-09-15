import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as PostsAPI from '../utils/PostsAPI'
import { votePostRequest, votePostSuccess, votePostFailure } from '../actions/posts'
import Votes from '../components/Votes'

class PostVotesContainer extends Component {
  render = () => {
    const { post } = this.props
    return (
      <Votes score={ post.voteScore } vote={ this.vote } />
    )
  }

  vote = option => {
    const { post, votePostRequest, votePostSuccess, votePostFailure } = this.props
    votePostRequest(post.id, option)
    return PostsAPI.vote(post.id, option)
      .then(post => votePostSuccess(post))
      .catch(exception => votePostFailure(exception))
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({votePostRequest, votePostSuccess, votePostFailure}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostVotesContainer);
