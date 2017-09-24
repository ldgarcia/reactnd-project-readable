import uuidv4 from 'uuid/v4'

import { getURL, getToken, getDefaultHeaders } from './API'

const prefix = getURL()
const token = getToken()
const headers = getDefaultHeaders(token)

export const add = ({ body, author, parentId }) =>
  fetch(`${prefix}/comments/`, {
    method: 'POST',
    body: JSON.stringify({
      id: uuidv4(),
      timestamp: Date.now(),
      body,
      author,
      parentId
    }),
    headers
  })
  .then(res => res.json())

export const edit = ({ id, body }) =>
  fetch(`${prefix}/comments/${id}/`, {
    method: 'PUT',
    body: JSON.stringify({
      timestamp: Date.now(),
      body
    }),
    headers
  })
  .then(res => res.json())

export const disable = id =>
  fetch(`${prefix}/comments/${id}`, {
    method: 'DELETE',
    headers
  })
  .then(res => res.json())

export const vote = (id, option) =>
  fetch(`${prefix}/comments/${id}/`, {
    method: 'POST',
    body: JSON.stringify({ option }),
    headers
  })
  .then(res => res.json())
