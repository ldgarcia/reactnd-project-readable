import * as types from './types'
import * as postsAPI from '../utils/PostsAPI.js'

export function fetchPost(category, postId) {
  return dispatch => {
    dispatch({
      type: types.FETCH_POST_REQUEST,
      postId,
    })
    postsAPI.get(postId)
    .then(post => {
      if (typeof post.id !== 'undefined' && post.category === category) {
        postsAPI.getComments(post.id)
        .then(comments => dispatch({
          type: types.FETCH_POST_SUCCESS,
          post,
          comments,
        }))
      }
    })
    .catch(exception => dispatch({
      type: types.FETCH_POST_FAILURE,
      postId,
      exception,
    }))
  }
}

export function fetchPosts(category) {
  return dispatch => {
    const getPosts = category === '' ? postsAPI.getAll : postsAPI.getByCategory.bind(this, category)
    dispatch({
      type: types.FETCH_POSTS_REQUEST,
      category,
    })
    getPosts()
    .then(posts => {
      Promise.all(posts.map(post => postsAPI.getComments(post.id)))
      .then(postsComments => {
        const comments = postsComments.reduce((comments, postComments, index) => {
          return comments.concat(postComments)
        }, [])
        dispatch({
          type: types.FETCH_POSTS_SUCCESS,
          posts,
          comments,
        })
      })
    })
    .catch(exception => dispatch({
      type: types.FETCH_POSTS_FAILURE,
      exception,
    }))
  }
}

export function votePost(postId, option) {
  return dispatch => {
    dispatch({ type: types.VOTE_POST_REQUEST, })
    postsAPI.vote(postId, option)
    .then(post => dispatch({
      type: types.VOTE_POST_SUCCESS,
      post,
    }))
    .catch(exception => dispatch({
      type: types.VOTE_POST_FAILURE,
      exception,
    }))
  }
}

export function addPost(post) {
  return dispatch => {
    dispatch({ type: types.ADD_POST_REQUEST, })
    postsAPI.add(post)
    .then(post => dispatch({
      type: types.ADD_POST_SUCCESS,
      post,
    }))
    .catch(exception => dispatch({
      type: types.ADD_POST_FAILURE,
      exception,
    }))
  }
}

export function editPost(post) {
  return dispatch => {
    dispatch({ type: types.EDIT_POST_REQUEST, })
    postsAPI.edit(post)
    .then(post => dispatch({
      type: types.EDIT_POST_SUCCESS,
      post,
    }))
    .catch(exception => dispatch({
      type: types.EDIT_POST_FAILURE,
      exception,
    }))
  }
}

export function deletePost(postId) {
  return dispatch => {
    dispatch({ type: types.DELETE_POST_REQUEST, })
    postsAPI.disable(postId)
    .then(post => dispatch({
      type: types.DELETE_POST_SUCCESS,
      post,
    }))
    .catch(exception => dispatch({
      type: types.DELETE_POST_FAILURE,
      exception,
    }))
  }
}
