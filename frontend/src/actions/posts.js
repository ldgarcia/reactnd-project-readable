export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST'
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS'
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE'

export const fetchPostRequest = () => ({
  type: FETCH_POST_REQUEST
})

export const fetchPostSuccess = post => ({
  type: FETCH_POST_SUCCESS,
  post
})

export const fetchPostFailure = exception => ({
  type: FETCH_POST_FAILURE,
  exception
})

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
})

export const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  posts
})

export const fetchPostsFailure = exception => ({
  type: FETCH_POSTS_FAILURE,
  exception
})

export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST'
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS'
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE'

export const fetchPostCommentsRequest = (parentId) => ({
  type: FETCH_COMMENTS_REQUEST,
  parentId
})

export const fetchPostCommentsSuccess = (parentId, comments) => ({
  type: FETCH_COMMENTS_SUCCESS,
  parentId,
  comments
})

export const fetchPostCommentsFailure = exception => ({
  type: FETCH_COMMENTS_FAILURE,
  exception
})

export const VOTE_POST_REQUEST = 'VOTE_POST_REQUEST'
export const VOTE_POST_SUCCESS = 'VOTE_POST_SUCCESS'
export const VOTE_POST_FAILURE = 'VOTE_POST_FAILURE'

export const votePostRequest = (postId, option) => ({
  type: VOTE_POST_REQUEST,
  postId,
  option
})

export const votePostSuccess = post => ({
  type: VOTE_POST_SUCCESS,
  post
})

export const votePostFailure = exception => ({
  type: VOTE_POST_FAILURE,
  exception
})

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE'

export const addPostRequest = () => ({
  type: ADD_POST_REQUEST,
})

export const addPostSuccess = post => ({
  type: ADD_POST_SUCCESS,
  post
})

export const addPostFailure = exception => ({
  type: ADD_POST_FAILURE,
  exception
})

export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST'
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE'

export const deletePostRequest = () => ({
  type: DELETE_POST_REQUEST
})

export const deletePostSuccess = post => ({
  type: DELETE_POST_SUCCESS,
  post
})

export const deletePostFailure = exception => ({
  type: DELETE_POST_FAILURE,
  exception
})

export const EDIT_POST_REQUEST = 'EDIT_POST_REQUEST'
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS'
export const EDIT_POST_FAILURE = 'EDIT_POST_FAILURE'

export const editPostRequest = () => ({
  type: EDIT_POST_REQUEST,
})

export const editPostSuccess = post => ({
  type: EDIT_POST_SUCCESS,
  post
})

export const editPostFailure = exception => ({
  type: EDIT_POST_FAILURE,
  exception
})

export const OPEN_ADD_POST_MODAL = 'OPEN_ADD_POST_MODAL'
export const CLOSE_ADD_POST_MODAL = 'CLOSE_ADD_POST_MODAL'

export const openAddPostModal = defaultCategory => ({
  type: OPEN_ADD_POST_MODAL,
  defaultCategory
})

export const closeAddPostModal = () => ({
  type: CLOSE_ADD_POST_MODAL
})

export const OPEN_EDIT_POST_MODAL = 'OPEN_EDIT_POST_MODAL'
export const CLOSE_EDIT_POST_MODAL = 'CLOSE_EDIT_POST_MODAL'

export const openEditPostModal = post => ({
  type: OPEN_EDIT_POST_MODAL,
  post
})

export const closeEditPostModal = () => ({
  type: CLOSE_EDIT_POST_MODAL
})

export const POST_FORM_INPUT_CHANGE = 'POST_FORM_INPUT_CHANGE'

export const formInputChange = (form, event) => {
  const { name, value } = event.target
  return {
    type: POST_FORM_INPUT_CHANGE,
    form,
    name,
    value
  }
}
