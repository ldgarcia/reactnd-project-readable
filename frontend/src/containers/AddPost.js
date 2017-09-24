import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as PostsAPI from '../utils/PostsAPI'
import * as postActions from '../actions/posts'
import * as formActions from '../actions/forms'
import * as uiActions from '../actions/ui'
import PostForm from '../components/PostForm'

class AddPostContainer extends Component {
  onFormSubmit = () => {
    this.props.addPost(this.props.form)
    this.onModalClose()
  }

  onModalClose = () => {
    this.props.resetForm('addPost')
    this.props.closeModal('addPost')
  }

  render() {
    return (
      <PostForm
        action='add'
        form={this.props.form}
        categories={this.props.categories}
        handleFormSubmit={this.onFormSubmit}
        handleInputChange={this.props.onInputChange.bind(this, 'addPost')}
        handleModalClose={this.onModalClose}
        ui={{
          modalIsOpen: this.props.ui.addPostModalIsOpen,
          submitButtonIsEnabled: this.props.ui.addPostSubmitButtonIsEnabled,
        }}
      />
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  ui: state.ui,
  form: state.forms.addPost,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    ...postActions,
    ...formActions,
    ...uiActions,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostContainer)
