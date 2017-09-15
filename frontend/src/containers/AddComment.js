import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as CommentsAPI from '../utils/CommentsAPI'
import * as commentsActionCreators from '../actions/comments'
import CommentForm from '../components/CommentForm'

class AddCommentContainer extends Component {

  render = () => {
    return (
      <CommentForm
        action='add'
        form={ this.props.form }
        handleFormSubmit={ this.addComment }
        handleInputChange={ this.props.formInputChange.bind(this, 'add') }
        handleModalClose={ this.props.closeAddCommentModal }
        modalIsOpen={ this.props.ui.addCommentModalIsOpen }
        submitButtonIsEnabled={ this.props.ui.addCommentSubmitButtonIsEnabled }
      />
    )
  }

  addComment = event => {
    event.preventDefault()
    this.props.addCommentRequest()
    return CommentsAPI.add(this.props.form)
      .then(comment => {
        console.log(comment)
        this.props.addCommentSuccess(comment)
        this.props.closeAddCommentModal()
      })
      .catch(exception => this.props.addCommentFailure(exception))
  }
}

const mapStateToProps = state => ({
  ui: state.comments.ui,
  form: state.comments.forms.add,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(commentsActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentContainer)
