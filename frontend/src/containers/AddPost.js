import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as PostsAPI from '../utils/PostsAPI'
import * as postActions from '../actions/posts'
import * as formActions from '../actions/forms'
import * as uiActions from '../actions/ui'
import PostForm from '../components/PostForm'

class AddPostContainer extends Component {
  onInputChange = (event) => {
    const { name, value } = event.target
    this.props.onInputChange('addPost', name, value)
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.addPost(this.props.form)
    this.props.addPostEnd()
  }

  onModalClose = () => {
    this.props.addPostEnd()
  }

  render() {
    return (
      <PostForm
        action='add'
        form={this.props.form}
        categories={this.props.categories}
        handleFormSubmit={this.onFormSubmit}
        handleInputChange={this.onInputChange}
        handleModalClose={this.onModalClose}
        modalIsOpen={this.props.ui.addPostModalIsOpen}
        submitButtonIsEnabled={this.props.ui.addPostSubmitButtonIsEnabled}
      />
    )
  }
}

const mapStateToProps = ({categories, forms, ui}) => ({
  categories,
  form: forms.addPost,
  ui,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    ...postActions,
    ...formActions,
    ...uiActions,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostContainer)
