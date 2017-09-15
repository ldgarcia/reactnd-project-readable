import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as CommentsAPI from '../utils/CommentsAPI'
import * as commentsActionCreators from '../actions/comments'
import CommentForm from '../components/CommentForm'

class EditCommentContainer extends Component {

  render = () => {
    return (
      <CommentForm
        action='edit'
        form={ this.props.form }
        handleFormSubmit={ this.editComment }
        handleInputChange={ this.props.formInputChange.bind(this, 'edit') }
        handleModalClose={ this.props.closeEditCommentModal }
        modalIsOpen={ this.props.ui.editCommentModalIsOpen }
        submitButtonIsEnabled={ this.props.ui.editCommentSubmitButtonIsEnabled }
      />
    )
  }

  editComment = event => {
    event.preventDefault()
    this.props.editCommentRequest()
    return CommentsAPI.edit(this.props.form)
      .then(comment => {
        this.props.editCommentSuccess(comment)
        this.props.closeEditCommentModal()
      })
      .catch(exception => this.props.editCommentFailure(exception))
  }
}

const mapStateToProps = state => ({
  ui: state.comments.ui,
  form: state.comments.forms.edit,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(commentsActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCommentContainer)
