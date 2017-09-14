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
        action='add'
        form={ this.props.form }
        categories={ this.props.categories }
        handleFormSubmit={ this.addPost }
        handleInputChange={ this.props.formInputChange.bind(this, 'add') }
        handleModalClose={ this.props.closeAddPostModal }
        ui={{
          modalIsOpen: this.props.ui.addPostModalIsOpen,
          submitButtonIsEnabled: this.props.ui.addPostSubmitButtonIsEnabled,
        }}
      />
    )
  }

  addPost = event => {
    event.preventDefault()
    this.props.addPostRequest()
    return PostsAPI.addPost(this.props.form)
      .then(post => {
        this.props.addPostSuccess(post)
        this.props.closeAddPostModal()
      })
      .catch(exception => this.props.addPostFailure(exception))
  }

}

const mapStateToProps = state => ({
  categories: state.categories,
  ui: state.posts.ui,
  form: state.posts.forms.add,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(postsActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostContainer)
