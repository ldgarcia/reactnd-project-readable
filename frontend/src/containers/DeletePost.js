import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as postActions from '../actions/posts'
import * as formActions from '../actions/forms'
import * as uiActions from '../actions/ui'
import ConfirmDelete from '../components/ConfirmDelete'

class DeletePostContainer extends Component {
  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.deletePost(this.props.form.id)
    this.props.deletePostEnd()
    if (this.props.form.redirect) {
      this.props.history.push('/')
    }
  }

  onCloseModal = () => {
    this.props.deletePostEnd()
  }

  render() {
    return (
      <ConfirmDelete
        form={this.props.form}
        handleFormSubmit={this.onFormSubmit}
        handleModalClose={this.onCloseModal}
        modalIsOpen={this.props.ui.deletePostModalIsOpen}
        submitButtonIsEnabled={this.props.ui.deletePostSubmitButtonIsEnabled}
      />
    )
  }
}

const mapStateToProps = ({forms, ui}) => ({
  form: forms.deletePost,
  ui,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    ...postActions,
    ...formActions,
    ...uiActions}, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeletePostContainer))
