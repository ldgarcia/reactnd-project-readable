import * as types from '../actions/types'

const initialState = {
  postNotFound: false,
  loadingPostsError: false,
  addPostModalIsOpen: false,
  addPostSubmitButtonIsEnabled: true,
  editPostModalIsOpen: false,
  editPostSubmitButtonIsEnabled: true,
  deletePostModalIsOpen: false,
  deletePostSubmitButtonIsEnabled: true,
  addCommentModalIsOpen: false,
  addCommentSubmitButtonIsEnabled: true,
  editCommentModalIsOpen: false,
  editCommentSubmitButtonIsEnabled: true,
  deleteCommentModalIsOpen: false,
  deleteCommentSubmitButtonIsEnabled: true,
}

function ui(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return {
        ...state,
        postNotFound: false,
      }
    case types.FETCH_POST_NOT_FOUND:
      return {
        ...state,
        postNotFound: true,
      }
    case types.FETCH_POSTS_REQUEST:
      return {
        ...state,
        loadingPostsError: false,
      }
    case types.FETCH_POSTS_FAILURE:
      return {
        ...state,
        loadingPostsError: true,
      }
    case types.ADD_POST_REQUEST:
      return {
        ...state,
        addPostSubmitButtonIsEnabled: false,
      }
    case types.ADD_POST_SUCCESS:
    case types.ADD_POST_FAILURE:
      return {
        ...state,
        addPostSubmitButtonIsEnabled: true,
      }
    case types.EDIT_POST_REQUEST:
      return {
        ...state,
        editPostSubmitButtonIsEnabled: false,
      }
    case types.EDIT_POST_SUCCESS:
    case types.EDIT_POST_FAILURE:
      return {
        ...state,
        editPostSubmitButtonIsEnabled: true,
      }
    case types.DELETE_POST_REQUEST:
      return {
        ...state,
        deletePostSubmitButtonIsEnabled: false,
      }
    case types.DELETE_POST_SUCCESS:
    case types.DELETE_POST_FAILURE:
      return {
        ...state,
        deletePostSubmitButtonIsEnabled: true,
      }
    case types.ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentSubmitButtonIsEnabled: false,
      }
    case types.ADD_COMMENT_SUCCESS:
    case types.ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentSubmitButtonIsEnabled: true,
      }
    case types.EDIT_COMMENT_REQUEST:
      return {
        ...state,
        editCommentSubmitButtonIsEnabled: false,
      }
    case types.EDIT_COMMENT_SUCCESS:
    case types.EDIT_COMMENT_FAILURE:
      return {
        ...state,
        editCommentSubmitButtonIsEnabled: true,
      }
    case types.DELETE_COMMENT_REQUEST:
      return {
        ...state,
        deleteCommentSubmitButtonIsEnabled: false,
      }
    case types.DELETE_COMMENT_SUCCESS:
    case types.DELETE_COMMENT_FAILURE:
      return {
        ...state,
        deleteCommentSubmitButtonIsEnabled: true,
      }
    case types.OPEN_MODAL:
      return {
        ...state,
        [`${action.name}ModalIsOpen`]: true,
      }
    case types.CLOSE_MODAL:
      return {
        ...state,
        [`${action.name}ModalIsOpen`]: false,
      }
    default:
      return state
  }
}

export default ui
