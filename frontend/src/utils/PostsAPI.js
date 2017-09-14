import uuidv4 from 'uuid/v4'

import { getURL, getToken, getDefaultHeaders } from './API'

const prefix = getURL()
const token = getToken()
const headers = getDefaultHeaders(token)

export const getAll = () =>
  fetch(`${prefix}/posts`, { headers })
  .then(res => res.json())

export const getByCategory = category =>
  fetch(`${prefix}/${category}/posts/`, { headers })
  .then( res => res.json())

export const getPost = postId =>
  fetch(`${prefix}/posts/${postId}`, { headers })
  .then( res => res.json())

export const getComments = postId =>
  fetch(`${prefix}/posts/${postId}/comments/`, { headers })
  .then( res => res.json())

export const addPost = ({ title, author, category, body }) =>
  fetch(`${prefix}/posts/`, {
    method: 'POST',
    body: JSON.stringify({
      id: uuidv4(),
      timestamp: Date.now(),
      title,
      body,
      author,
      category
    }),
    headers
  })
  .then( res => res.json())

export const editPost = ({ id, title, body }) =>
  fetch(`${prefix}/posts/${id}/`, {
    method: 'PUT',
    body: JSON.stringify({ title, body }),
    headers
  })
  .then( res => res.json())

export const disable = postId =>
  fetch(`${prefix}/posts/${postId}`, {
    method: 'DELETE',
    headers
  })
  .then( res => res.json())

export const votePost = (postId, option) =>
  fetch(`${prefix}/posts/${postId}/`, {
    method: 'POST',
    body: JSON.stringify({ option }),
    headers
  })
  .then( res => res.json())
