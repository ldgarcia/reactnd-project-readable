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
      else {
        dispatch({
          type: types.FETCH_POST_NOT_FOUND,
        })
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
    dispatch({
      type: types.VOTE_POST_REQUEST,
      postId,
    })
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

export function addPostStart(category) {
  return dispatch => {
    dispatch({
      type: types.FORM_LOAD_DATA,
      name: 'addPost',
      data: { category, }
    })
    dispatch({
      type: types.OPEN_MODAL,
      name: 'addPost'
    })
  }
}

export function addPostEnd() {
  return dispatch => {
    dispatch({
      type: types.FORM_RESET,
      name: 'addPost',
    })
    dispatch({
      type: types.CLOSE_MODAL,
      name: 'addPost',
    })
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

export function editPostStart(post) {
  return dispatch => {
    dispatch({
      type: types.FORM_LOAD_DATA,
      name: 'editPost',
      data: post,
    })
    dispatch({
      type: types.OPEN_MODAL,
      name: 'editPost'
    })
  }
}

export function editPostEnd() {
  return dispatch => {
    dispatch({
      type: types.FORM_RESET,
      name: 'editPost',
    })
    dispatch({
      type: types.CLOSE_MODAL,
      name: 'editPost',
    })
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

export function deletePostStart(id, redirect=false) {
  return dispatch => {
    dispatch({
      type: types.FORM_LOAD_DATA,
      name: 'deletePost',
      data: {id, redirect}
    })
    dispatch({
      type: types.OPEN_MODAL,
      name: 'deletePost',
    })
  }
}

export function deletePostEnd() {
  return dispatch => {
    dispatch({
      type: types.FORM_RESET,
      name: 'deletePost',
    })
    dispatch({
      type: types.CLOSE_MODAL,
      name: 'deletePost',
    })
  }
}

export function deletePost(postId, redirect=false) {
  return dispatch => {
    dispatch({
      type: types.DELETE_POST_REQUEST,
      postId,
    })
    postsAPI.disable(postId)
    .then(post => dispatch({
      type: types.DELETE_POST_SUCCESS,
      post,
      redirect,
    }))
    .catch(exception => dispatch({
      type: types.DELETE_POST_FAILURE,
      exception,
    }))
  }
}
