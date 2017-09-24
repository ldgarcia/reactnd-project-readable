import * as types from './types'

export const addCommentRequest = () => ({
  type: types.ADD_COMMENT_REQUEST
})

export const addCommentSuccess = comment => ({
  type: types.ADD_COMMENT_SUCCESS,
  comment
})

export const addCommentFailure = exception => ({
  type: types.ADD_COMMENT_FAILURE,
  exception
})

export const editCommentRequest = () => ({
  type: types.EDIT_COMMENT_REQUEST
})

export const editCommentSuccess = comment => ({
  type: types.EDIT_COMMENT_SUCCESS,
  comment
})

export const editCommentFailure = exception => ({
  type: types.EDIT_COMMENT_FAILURE,
  exception
})

export const deleteCommentRequest = () => ({
  type: types.DELETE_COMMENT_REQUEST
})

export const deleteCommentSuccess = comment => ({
  type: types.DELETE_COMMENT_SUCCESS,
  comment
})

export const deleteCommentFailure = exception => ({
  type: types.DELETE_COMMENT_FAILURE,
  exception
})

export const voteCommentRequest = (postId, option) => ({
  type: types.VOTE_COMMENT_REQUEST,
  postId,
  option
})

export const voteCommentSuccess = comment => ({
  type: types.VOTE_COMMENT_SUCCESS,
  comment
})

export const voteCommentFailure = exception => ({
  type: types.VOTE_COMMENT_FAILURE,
  exception
})

export const formInputChange = (form, event) => {
  const { name, value } = event.target
  return {
    type: types.COMMENT_FORM_INPUT_CHANGE,
    form,
    name,
    value
  }
}

export const openAddCommentModal = parentId => ({
  type: types.OPEN_ADD_COMMENT_MODAL,
  parentId,
})

export const closeAddCommentModal = () => ({
  type: types.CLOSE_ADD_COMMENT_MODAL
})

export const openEditCommentModal = comment => ({
  type: types.OPEN_EDIT_COMMENT_MODAL,
  comment,
})

export const closeEditCommentModal = () => ({
  type: types.CLOSE_EDIT_COMMENT_MODAL
})
