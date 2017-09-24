import * as types from './types'

export const fetchPostRequest = () => ({
  type: types.FETCH_POST_REQUEST
})

export const fetchPostSuccess = post => ({
  type: types.FETCH_POST_SUCCESS,
  post
})

export const fetchPostFailure = exception => ({
  type: types.FETCH_POST_FAILURE,
  exception
})

export const fetchPostsRequest = () => ({
  type: types.FETCH_POSTS_REQUEST,
})

export const fetchPostsSuccess = posts => ({
  type: types.FETCH_POSTS_SUCCESS,
  posts
})

export const fetchPostsFailure = exception => ({
  type: types.FETCH_POSTS_FAILURE,
  exception
})

export const fetchPostCommentsRequest = (parentId) => ({
  type: types.FETCH_COMMENTS_REQUEST,
  parentId
})

export const fetchPostCommentsSuccess = (parentId, comments) => ({
  type: types.FETCH_COMMENTS_SUCCESS,
  parentId,
  comments
})

export const fetchPostCommentsFailure = exception => ({
  type: types.FETCH_COMMENTS_FAILURE,
  exception
})

export const votePostRequest = (postId, option) => ({
  type: types.VOTE_POST_REQUEST,
  postId,
  option
})

export const votePostSuccess = post => ({
  type: types.VOTE_POST_SUCCESS,
  post
})

export const votePostFailure = exception => ({
  type: types.VOTE_POST_FAILURE,
  exception
})

export const addPostRequest = () => ({
  type: types.ADD_POST_REQUEST,
})

export const addPostSuccess = post => ({
  type: types.ADD_POST_SUCCESS,
  post
})

export const addPostFailure = exception => ({
  type: types.ADD_POST_FAILURE,
  exception
})

export const deletePostRequest = () => ({
  type: types.DELETE_POST_REQUEST
})

export const deletePostSuccess = post => ({
  type: types.DELETE_POST_SUCCESS,
  post
})

export const deletePostFailure = exception => ({
  type: types.DELETE_POST_FAILURE,
  exception
})

export const editPostRequest = () => ({
  type: types.EDIT_POST_REQUEST,
})

export const editPostSuccess = post => ({
  type: types.EDIT_POST_SUCCESS,
  post
})

export const editPostFailure = exception => ({
  type: types.EDIT_POST_FAILURE,
  exception
})

export const openAddPostModal = defaultCategory => ({
  type: types.OPEN_ADD_POST_MODAL,
  defaultCategory
})

export const closeAddPostModal = () => ({
  type: types.CLOSE_ADD_POST_MODAL
})

export const openEditPostModal = post => ({
  type: types.OPEN_EDIT_POST_MODAL,
  post
})

export const closeEditPostModal = () => ({
  type: types.CLOSE_EDIT_POST_MODAL
})

export const formInputChange = (form, event) => {
  const { name, value } = event.target
  return {
    type: types.POST_FORM_INPUT_CHANGE,
    form,
    name,
    value
  }
}
