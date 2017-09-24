import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as commentActions from '../actions/comments'
import * as formActions from '../actions/forms'
import * as uiActions from '../actions/ui'
import CommentForm from '../components/CommentForm'

class AddCommentContainer extends Component {
  onInputChange = (event) => {
    const { name, value } = event.target
    this.props.onInputChange('addComment', name, value)
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.addComment(this.props.form)
    this.props.addCommentEnd()
  }

  onCloseModal = () => {
    this.props.addCommentEnd()
  }

  render() {
    return (
      <CommentForm
        action='add'
        form={this.props.form}
        handleFormSubmit={this.onFormSubmit}
        handleInputChange={this.onInputChange}
        handleModalClose={this.onCloseModal}
        modalIsOpen={this.props.ui.addCommentModalIsOpen}
        submitButtonIsEnabled={this.props.ui.addCommentSubmitButtonIsEnabled}
      />
    )
  }
}

const mapStateToProps = ({forms, ui}) => ({
  form: forms.addComment,
  ui,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    ...commentActions,
    ...formActions,
    ...uiActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentContainer)
