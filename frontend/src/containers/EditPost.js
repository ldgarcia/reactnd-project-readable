import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as postActions from '../actions/posts'
import * as formActions from '../actions/forms'
import * as uiActions from '../actions/ui'
import PostForm from '../components/PostForm'

class EditPostContainer extends Component {
  onInputChange = (event) => {
    const { name, value } = event.target
    this.props.onInputChange('editPost', name, value)
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.editPost(this.props.form)
    this.props.editPostEnd()
  }

  onModalClose = () => {
    this.props.editPostEnd()
  }

  render() {
    return (
      <PostForm
        action='edit'
        form={this.props.form}
        categories={this.props.categories}
        handleFormSubmit={this.onFormSubmit}
        handleInputChange={this.onInputChange}
        handleModalClose={this.onModalClose}
        modalIsOpen={this.props.ui.editPostModalIsOpen}
        submitButtonIsEnabled={this.props.ui.editPostSubmitButtonIsEnabled}
      />
    )
  }
}

const mapStateToProps = ({categories, forms, ui}) => ({
  categories,
  form: forms.editPost,
  ui,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    ...postActions,
    ...formActions,
    ...uiActions,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostContainer)
