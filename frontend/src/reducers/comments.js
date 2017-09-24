import * as types from '../actions/types'

const initialState = []

const comments = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POSTS_SUCCESS:
      return action.comments
    case types.FETCH_POST_SUCCESS:
      return [
        ...state.filter(comment => comment.parentId !== action.post.id),
        ...action.comments,
      ]
    case types.ADD_COMMENT_SUCCESS:
      return [
        ...state,
        action.comment,
      ]
    case types.EDIT_COMMENT_SUCCESS:
    case types.VOTE_COMMENT_SUCCESS:
      return state.map(comment => {
        if (comment.id !== action.comment.id) {
          return comment
        }
        return action.comment
      })
    case types.DELETE_COMMENT_SUCCESS:
      return state.filter(comment => comment.id !== action.comment.id)
    default:
      return state;
  }
}

export default comments;
