import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as commentActions from '../actions/comments'
import * as formActions from '../actions/forms'
import * as uiActions from '../actions/ui'
import CommentList from '../components/CommentList'

class CommentListContainer extends Component {
  render() {
    return (
      <CommentList { ...this.props } />
    )
  }
}

const mapStateToProps = ({forms}) => {
  return {
    sortForm: forms.sort
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    ...commentActions,
    ...formActions,
    ...uiActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer)
