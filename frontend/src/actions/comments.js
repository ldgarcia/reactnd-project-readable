import * as types from './types'
import * as commentsAPI from '../utils/CommentsAPI'

export function voteComment(commentId, option) {
  return dispatch => {
    dispatch({
      type: types.VOTE_COMMENT_REQUEST,
      commentId,
    })
    commentsAPI.vote(commentId, option)
    .then(comment => {
      dispatch({
        type: types.VOTE_COMMENT_SUCCESS,
        comment,
      })
    })
    .catch(exception => dispatch({
      type: types.VOTE_COMMENT_FAILURE,
      exception,
    }))
  }
}

export function addCommentStart(parentId) {
  return dispatch => {
    dispatch({
      type: types.FORM_LOAD_DATA,
      name: 'addComment',
      data: { parentId, }
    })
    dispatch({
      type: types.OPEN_MODAL,
      name: 'addComment',
    })
  }
}

export function addCommentEnd() {
  return dispatch => {
    dispatch({
      type: types.FORM_RESET,
      name: 'addComment',
    })
    dispatch({
      type: types.CLOSE_MODAL,
      name: 'addComment',
    })
  }
}

export function addComment(comment) {
  return dispatch => {
    dispatch({ type: types.ADD_COMMENT_REQUEST, })
    commentsAPI.add(comment)
    .then(comment => {
      dispatch({
        type: types.ADD_COMMENT_SUCCESS,
        comment,
      })
      console.log(comment)
    })
    .catch(exception => dispatch({
      type: types.ADD_COMMENT_FAILURE,
      exception,
    }))
  }
}

export function editCommentStart(comment) {
  return dispatch => {
    dispatch({
      type: types.FORM_LOAD_DATA,
      name: 'editComment',
      data: comment,
    })
    dispatch({
      type: types.OPEN_MODAL,
      name: 'editComment'
    })
  }
}

export function editCommentEnd() {
  return dispatch => {
    dispatch({
      type: types.FORM_RESET,
      name: 'editComment',
    })
    dispatch({
      type: types.CLOSE_MODAL,
      name: 'editComment',
    })
  }
}

export function editComment(comment) {
  return dispatch => {
    dispatch({
      type: types.EDIT_COMMENT_REQUEST,
      commentId: comment.id,
    })
    commentsAPI.edit(comment)
    .then(comment => dispatch({
      type: types.EDIT_COMMENT_SUCCESS,
      comment,
    }))
    .catch(exception => dispatch({
      type: types.EDIT_COMMENT_FAILURE,
      exception,
    }))
  }
}

export function deleteCommentStart(id) {
  return dispatch => {
    dispatch({
      type: types.FORM_LOAD_DATA,
      name: 'deleteComment',
      data: {id}
    })
    dispatch({
      type: types.OPEN_MODAL,
      name: 'deleteComment',
    })
  }
}

export function deleteCommentEnd() {
  return dispatch => {
    dispatch({
      type: types.FORM_RESET,
      name: 'deleteComment',
    })
    dispatch({
      type: types.CLOSE_MODAL,
      name: 'deleteComment',
    })
  }
}

export function deleteComment(commentId) {
  return dispatch => {
    dispatch({
      type: types.DELETE_COMMENT_REQUEST,
      commentId,
    })
    commentsAPI.disable(commentId)
    .then(comment => dispatch({
      type: types.DELETE_COMMENT_SUCCESS,
      comment,
    }))
    .catch(exception => dispatch({
      type: types.DELETE_COMMENT_FAILURE,
      exception,
    }))
  }
}
