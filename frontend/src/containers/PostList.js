import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as postActions from '../actions/posts'
import * as formActions from '../actions/forms'
import * as uiActions from '../actions/ui'
import PostList from '../components/PostList'

class PostListContainer extends Component {
  componentDidMount() {
    const category = this.props.match.params.category || ''
    this.props.fetchPosts(category)
  }

  componentWillReceiveProps(nextProps) {
    const category = this.props.match.params.category || ''
    const nextCategory = nextProps.match.params.category || ''
    if (category !== nextCategory) {
      this.props.fetchPosts(nextCategory)
    }
  }

  render() {
    return (
      <PostList {...this.props } />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.map(post => {
      return {
        ...post,
        comments: state.comments.filter(comment => comment.parentId === post.id).length
      }
    }),
    sortForm: state.forms.sort,
    ui: state.ui,
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
