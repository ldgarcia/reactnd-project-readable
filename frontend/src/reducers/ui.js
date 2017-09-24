import * as types from '../actions/types'

const initialState = {
  postNotFound: false,
  loadingPostsError: false,
  addPostModalIsOpen: false,
  addPostSubmitButtonIsEnabled: true,
  editPostModalIsOpen: false,
  editPostSubmitButtonIsEnabled: true,
  addCommentModalIsOpen: false,
  addCommentSubmitButtonIsEnabled: true,
  editCommentModalIsOpen: false,
  editCommentSubmitButtonIsEnabled: true,
}

function ui(state = initialState, action) {
  switch (action.type) {
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
    case types.OPEN_ADD_POST_MODAL:
      return {
        ...state,
        addPostModalIsOpen: true,
      }
    case types.CLOSE_ADD_POST_MODAL:
      return {
        ...state,
        addPostModalIsOpen: false,
      }
    case types.OPEN_EDIT_POST_MODAL:
      return {
        ...state,
        editPostModalIsOpen: true,
      }
    case types.CLOSE_EDIT_POST_MODAL:
      return {
        ...state,
        editPostModalIsOpen: false,
      }
    case types.OPEN_ADD_COMMENT_MODAL:
      return {
        ...state,
        addCommentModalIsOpen: true,
      }
    case types.CLOSE_ADD_COMMENT_MODAL:
      return {
        ...state,
        addCommentModalIsOpen: false,
      }
    case types.OPEN_EDIT_COMMENT_MODAL:
      return {
        ...state,
        editCommentModalIsOpen: true,
      }
    case types.CLOSE_EDIT_COMMENT_MODAL:
      return {
        ...state,
        editCommentModalIsOpen: false,
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
