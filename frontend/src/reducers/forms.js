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
  deletePost: {
    id: null,
    redirect: false,
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
  deleteComment: {
    id: null,
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
    default:
      return state
  }
}

export default forms
