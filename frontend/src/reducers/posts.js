import * as types from '../actions/types'

const initialState = []

const posts = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POSTS_SUCCESS:
      return action.posts
    case types.FETCH_POSTS_FAILURE:
      return []
    case types.FETCH_POST_SUCCESS:
      return [
        ...state.filter(post => post.id !== action.post.id),
        action.post,
      ]
    case types.ADD_POST_SUCCESS:
      return [
        ...state,
        action.post,
      ]
    case types.EDIT_POST_SUCCESS:
    case types.VOTE_POST_SUCCESS:
      return state.map((post, index) => {
        if (post.id !== action.post.id) {
          return post
        }
        return action.post
      })
    case types.DELETE_POST_SUCCESS:
      return state.filter(post => post.id !== action.post.id)
    default:
      return state;
  }
}

export default posts;
