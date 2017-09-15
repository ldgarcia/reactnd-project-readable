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
