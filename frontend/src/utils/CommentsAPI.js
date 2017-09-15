import { getURL, getToken, getDefaultHeaders } from './API'

const prefix = getURL()
const token = getToken()
const headers = getDefaultHeaders(token)

export const vote = (id, option) =>
  fetch(`${prefix}/comments/${id}/`, {
    method: 'POST',
    body: JSON.stringify({ option }),
    headers
  })
  .then( res => res.json())

export const disable = id =>
  fetch(`${prefix}/comments/${id}`, {
    method: 'DELETE',
    headers
  })
  .then( res => res.json())
