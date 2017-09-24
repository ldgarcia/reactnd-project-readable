import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as commentActions from '../actions/comments'
import * as formActions from '../actions/forms'
import * as uiActions from '../actions/ui'
import CommentForm from '../components/CommentForm'

class EditCommentContainer extends Component {
  onInputChange = (event) => {
    const { name, value } = event.target
    this.props.onInputChange('editComment', name, value)
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.editComment(this.props.form)
    this.props.editCommentEnd()
  }

  onCloseModal = () => {
    this.props.editCommentEnd()
  }

  render() {
    return (
      <CommentForm
        action='edit'
        form={this.props.form}
        handleFormSubmit={this.onFormSubmit}
        handleInputChange={this.onInputChange}
        handleModalClose={this.onCloseModal}
        modalIsOpen={this.props.ui.editCommentModalIsOpen}
        submitButtonIsEnabled={this.props.ui.editCommentSubmitButtonIsEnabled}
      />
    )
  }
}

const mapStateToProps = ({forms, ui}) => ({
  form: forms.editComment,
  ui: ui,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    ...commentActions,
    ...formActions,
    ...uiActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCommentContainer)
