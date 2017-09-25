import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as commentActions from '../actions/comments'
import * as formActions from '../actions/forms'
import * as uiActions from '../actions/ui'
import ConfirmDelete from '../components/ConfirmDelete'

class DeleteCommentContainer extends Component {
  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.deleteComment(this.props.form.id)
    this.props.deleteCommentEnd()
  }

  onCloseModal = () => {
    this.props.deleteCommentEnd()
  }

  render() {
    return (
      <ConfirmDelete
        form={this.props.form}
        handleFormSubmit={this.onFormSubmit}
        handleModalClose={this.onCloseModal}
        modalIsOpen={this.props.ui.deleteCommentModalIsOpen}
        submitButtonIsEnabled={this.props.ui.deleteCommentSubmitButtonIsEnabled}
      />
    )
  }
}

const mapStateToProps = ({forms, ui}) => ({
  form: forms.deleteComment,
  ui,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    ...commentActions,
    ...formActions,
    ...uiActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteCommentContainer)
