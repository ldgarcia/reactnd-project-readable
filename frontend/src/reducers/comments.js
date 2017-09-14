import { FETCH_COMMENTS_SUCCESS } from '../actions/posts'

const initialState = {
  comments: []
}

const comments = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: [
          ...state.comments.filter(comment => comment.parentId !== action.parentId),
          ...action.comments
        ]
      }
    default:
      return state;
  }
}

export default comments;
