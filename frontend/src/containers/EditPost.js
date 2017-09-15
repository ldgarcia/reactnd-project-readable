import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as PostsAPI from '../utils/PostsAPI'
import * as postsActionCreators from '../actions/posts'
import PostForm from '../components/PostForm'

class AddPostContainer extends Component {

  render = () => {
    return (
      <PostForm
        action='edit'
        form={ this.props.form }
        categories={ this.props.categories }
        handleFormSubmit={ this.editPost }
        handleInputChange={ this.props.formInputChange.bind(this, 'edit') }
        handleModalClose={ this.props.closeEditPostModal }
        ui={{
          modalIsOpen: this.props.ui.editPostModalIsOpen,
          submitButtonIsEnabled: this.props.ui.editPostSubmitButtonIsEnabled,
        }}
      />
    )
  }

  editPost = event => {
    event.preventDefault()
    this.props.editPostRequest()
    return PostsAPI.edit(this.props.form)
      .then(post => {
        this.props.editPostSuccess(post)
        this.props.closeEditPostModal()
      })
      .catch(exception => this.props.editPostFailure(exception))
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.props.editPostFormChange(name, value)
  }

}

const mapStateToProps = state => ({
  categories: state.categories,
  ui: state.posts.ui,
  form: state.posts.forms.edit,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(postsActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostContainer)
