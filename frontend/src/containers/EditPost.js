import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as postActions from '../actions/posts'
import * as formActions from '../actions/forms'
import * as uiActions from '../actions/ui'
import PostForm from '../components/PostForm'

class EditPostContainer extends Component {
  onFormSubmit = () => {
    this.props.editPost(this.props.form)
    this.onModalClose()
  }

  onModalClose = () => {
    this.props.resetForm('editPost')
    this.props.closeModal('editPost')
  }

  render() {
    return (
      <PostForm
        action='edit'
        form={this.props.form}
        categories={this.props.categories}
        handleFormSubmit={this.onFormSubmit}
        handleInputChange={this.props.onInputChange.bind(this, 'editPost')}
        handleModalClose={this.onModalClose}
        ui={{
          modalIsOpen: this.props.ui.editPostModalIsOpen,
          submitButtonIsEnabled: this.props.ui.editPostSubmitButtonIsEnabled,
        }}
      />
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  ui: state.ui,
  form: state.forms.editPost,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    ...postActions,
    ...formActions,
    ...uiActions,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostContainer)
