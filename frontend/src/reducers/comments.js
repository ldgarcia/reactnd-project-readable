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
      parentId: null,
      body: '',
      author: '',
    },
    edit: {
      id: null,
      body: ''
    },
  },
  ui: {
    addCommentModalIsOpen: false,
    addCommentSubmitButtonIsEnabled: true,
    editCommentModalIsOpen: false,
    editCommentSubmitButtonIsEnabled: true
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
    case actions.ADD_COMMENT_REQUEST:
      return {
        ...state,
        ui: {
          ...state.ui,
          addCommentSubmitButtonIsEnabled: false
        }
      }
    case actions.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [
          ...state.comments,
          action.comment
        ],
        ui: {
          ...state.ui,
          addCommentSubmitButtonIsEnabled: true
        }
      }
    case actions.ADD_COMMENT_FAILURE:
      return {
        ...state,
        ui: {
          ...state.ui,
          addCommentSubmitButtonIsEnabled: true
        }
      }
    case actions.EDIT_COMMENT_REQUEST:
      return {
        ...state,
        ui: {
          ...state.ui,
          editCommentSubmitButtonIsEnabled: false
        }
      }
    case actions.EDIT_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [
          ...state.comments.filter(comment => comment.id !== action.comment.id),
          action.comment
        ],
        ui: {
          ...state.ui,
          editCommentSubmitButtonIsEnabled: true
        }
      }
    case actions.EDIT_COMMENT_FAILURE:
      return {
        ...state,
        ui: {
          ...state.ui,
          editCommentSubmitButtonIsEnabled: true
        }
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
    case actions.OPEN_ADD_COMMENT_MODAL:
      return {
        ...state,
        ui: {
          ...state.ui,
          addCommentModalIsOpen: true
        },
        forms: {
          ...state.forms,
          add: {
            ...state.forms.add,
            parentId: action.parentId
          }
        }
      }
    case actions.CLOSE_ADD_COMMENT_MODAL:
      return {
        ...state,
        ui: {
          ...state.ui,
          addCommentModalIsOpen: false
        },
        forms: {
          ...state.forms,
          add: {
            ...initialState.forms.add
          }
        }
      }
    case actions.OPEN_EDIT_COMMENT_MODAL:
      return {
        ...state,
        ui: {
          ...state.ui,
          editCommentModalIsOpen: true
        },
        forms: {
          ...state.forms,
          edit: {
            ...state.forms.edit,
            id: action.comment.id,
            body: action.comment.body
          }
        }
      }
    case actions.CLOSE_EDIT_COMMENT_MODAL:
      return {
        ...state,
        ui: {
          ...state.ui,
          editCommentModalIsOpen: false
        },
        forms: {
          ...state.forms,
          edit: {
            ...initialState.forms.edit
          }
        }
      }

    default:
      return state;
  }
}

export default comments;
