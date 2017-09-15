import { FETCH_COMMENTS_SUCCESS } from '../actions/posts'
import * as actions from '../actions/comments'

const initialState = {
  comments: [],
  forms: {
    sort: {
      by: 'SORT_BY_SCORE',
      order: 'DESC',
    },
    add: {
    },
    edit: {
    },
  }
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
    case actions.DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.comment.id)
      }
    case actions.VOTE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [
          ...state.comments.filter(comment => comment.id !== action.comment.id),
          action.comment
        ]
      }
    case actions.COMMENT_FORM_INPUT_CHANGE:
      return {
        ...state,
        forms: {
          ...state.forms,
          [action.form]: {
            ...state.forms[action.form],
            [action.name]: action.value
          }
        }
      }
    default:
      return state;
  }
}

export default comments;
