import * as types from '../actions/types'

const initialState = {
  sort: {
    by: 'SORT_BY_SCORE',
    order: 'DESC',
  },
  addPost: {
    title: '',
    body: '',
    author: '',
    category: ''
  },
  editPost: {
    id: null,
    title: '',
    body: '',
  },
  addComment: {
    parentId: null,
    body: '',
    author: '',
  },
  editComment: {
    id: null,
    body: ''
  },
}

function forms(state = initialState, action) {
  switch(action.type) {
    case types.FORM_INPUT_CHANGE:
      return {
        ...state,
        [action.formName]: {
          ...state[action.formName],
          [action.inputName]: action.inputValue,
        }
      }
    case types.FORM_RESET:
      return {
        ...state,
        [action.name]: initialState[action.name],
      }
    case types.FORM_LOAD_DATA:
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          ...action.data,
        }
      }
    case types.OPEN_ADD_POST_MODAL:
      return {
        ...state,
        addPost: {
          ...state.addPost,
          category: action.defaultCategory,
        }
      }
    case types.CLOSE_ADD_POST_MODAL:
      return {
        ...state,
        addPost: initialState.addPost,
      }
    case types.OPEN_EDIT_POST_MODAL:
      const { post } = action
      return {
        ...state,
        editPost: {
          id: post.id,
          title: post.title,
          body: post.body,
        }
      }
    case types.CLOSE_EDIT_POST_MODAL:
      return {
        ...state,
        editPost: initialState.editPost,
      }
    default:
      return state
  }
}

export default forms
