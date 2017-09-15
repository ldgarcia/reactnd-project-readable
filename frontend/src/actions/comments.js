export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST'
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS'
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'

export const addCommentRequest = () => ({
  type: ADD_COMMENT_REQUEST
})

export const addCommentSuccess = comment => ({
  type: ADD_COMMENT_SUCCESS,
  comment
})

export const addCommentFailure = exception => ({
  type: ADD_COMMENT_FAILURE,
  exception
})

export const EDIT_COMMENT_REQUEST = 'EDIT_COMMENT_REQUEST'
export const EDIT_COMMENT_SUCCESS = 'EDIT_COMMENT_SUCCESS'
export const EDIT_COMMENT_FAILURE = 'EDIT_COMMENT_FAILURE'

export const editCommentRequest = () => ({
  type: EDIT_COMMENT_REQUEST
})

export const editCommentSuccess = comment => ({
  type: EDIT_COMMENT_SUCCESS,
  comment
})

export const editCommentFailure = exception => ({
  type: EDIT_COMMENT_FAILURE,
  exception
})

export const DELETE_COMMENT_REQUEST = 'DELETE_COMMENT_REQUEST'
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS'
export const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE'

export const deleteCommentRequest = () => ({
  type: DELETE_COMMENT_REQUEST
})

export const deleteCommentSuccess = comment => ({
  type: DELETE_COMMENT_SUCCESS,
  comment
})

export const deleteCommentFailure = exception => ({
  type: DELETE_COMMENT_FAILURE,
  exception
})

export const VOTE_COMMENT_REQUEST = 'VOTE_COMMENT_REQUEST'
export const VOTE_COMMENT_SUCCESS = 'VOTE_COMMENT_SUCCESS'
export const VOTE_COMMENT_FAILURE = 'VOTE_COMMENT_FAILURE'

export const voteCommentRequest = (postId, option) => ({
  type: VOTE_COMMENT_REQUEST,
  postId,
  option
})

export const voteCommentSuccess = comment => ({
  type: VOTE_COMMENT_SUCCESS,
  comment
})

export const voteCommentFailure = exception => ({
  type: VOTE_COMMENT_FAILURE,
  exception
})

export const COMMENT_FORM_INPUT_CHANGE = 'COMMENT_FORM_INPUT_CHANGE'

export const formInputChange = (form, event) => {
  const { name, value } = event.target
  return {
    type: COMMENT_FORM_INPUT_CHANGE,
    form,
    name,
    value
  }
}

export const OPEN_ADD_COMMENT_MODAL = 'OPEN_ADD_COMMENT_MODAL'
export const CLOSE_ADD_COMMENT_MODAL = 'CLOSE_ADD_COMMENT_MODAL'

export const openAddCommentModal = parentId => ({
  type: OPEN_ADD_COMMENT_MODAL,
  parentId,
})

export const closeAddCommentModal = () => ({
  type: CLOSE_ADD_COMMENT_MODAL
})

export const OPEN_EDIT_COMMENT_MODAL = 'OPEN_EDIT_COMMENT_MODAL'
export const CLOSE_EDIT_COMMENT_MODAL = 'CLOSE_EDIT_COMMENT_MODAL'

export const openEditCommentModal = comment => ({
  type: OPEN_EDIT_COMMENT_MODAL,
  comment,
})

export const closeEditCommentModal = () => ({
  type: CLOSE_EDIT_COMMENT_MODAL
})
