import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as postActions from '../actions/posts'
import * as formActions from '../actions/forms'
import * as uiActions from '../actions/ui'
import PostList from '../components/PostList'
import PageNotFound from '../components/PageNotFound'

class PostListContainer extends Component {
  isValidCategory(category) {
    return category === '' ||
      this.props.categories.findIndex(c => c.path === category) !== -1
  }

  fetchPosts(category) {
    if (this.isValidCategory(category)) {
      this.props.fetchPosts(category)
    }
  }

  componentDidMount() {
    this.fetchPosts(this.props.match.params.category || '')
  }

  componentWillReceiveProps(nextProps) {
    const category = this.props.match.params.category || ''
    const nextCategory = nextProps.match.params.category || ''
    if (category !== nextCategory) {
      this.fetchPosts(nextCategory)
    }
  }

  render() {
    const category = this.props.match.params.category || ''
    if (this.isValidCategory(category)) {
      return (<PostList {...this.props } />)
    }
    return (<PageNotFound />)
  }
}

const mapStateToProps = ({ categories, posts, comments, forms, ui}) => {
  return {
    categories,
    posts: posts.map(post => {
      return {
        ...post,
        comments: comments.filter(comment => comment.parentId === post.id).length
      }
    }),
    sortForm: forms.sort,
    ui,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    ...postActions,
    ...formActions,
    ...uiActions,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostListContainer))
