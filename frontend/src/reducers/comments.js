import * as types from '../actions/types'

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
    case types.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: [
          ...state.comments.filter(comment => comment.parentId !== action.parentId),
          ...action.comments
        ]
      }
    case types.ADD_COMMENT_REQUEST:
      return {
        ...state,
        ui: {
          ...state.ui,
          addCommentSubmitButtonIsEnabled: false
        }
      }
    case types.ADD_COMMENT_SUCCESS:
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
    case types.ADD_COMMENT_FAILURE:
      return {
        ...state,
        ui: {
          ...state.ui,
          addCommentSubmitButtonIsEnabled: true
        }
      }
    case types.EDIT_COMMENT_REQUEST:
      return {
        ...state,
        ui: {
          ...state.ui,
          editCommentSubmitButtonIsEnabled: false
        }
      }
    case types.EDIT_COMMENT_SUCCESS:
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
    case types.EDIT_COMMENT_FAILURE:
      return {
        ...state,
        ui: {
          ...state.ui,
          editCommentSubmitButtonIsEnabled: true
        }
      }

    case types.DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.comment.id)
      }
    case types.VOTE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [
          ...state.comments.filter(comment => comment.id !== action.comment.id),
          action.comment
        ]
      }
    case types.COMMENT_FORM_INPUT_CHANGE:
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
    case types.OPEN_ADD_COMMENT_MODAL:
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
    case types.CLOSE_ADD_COMMENT_MODAL:
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
    case types.OPEN_EDIT_COMMENT_MODAL:
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
    case types.CLOSE_EDIT_COMMENT_MODAL:
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
