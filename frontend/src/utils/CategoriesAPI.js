import { getURL, getToken, getDefaultHeaders } from './API'

const prefix = getURL()
const token = getToken()
const headers = getDefaultHeaders(token)

export const getAll = () =>
  fetch(`${prefix}/categories`, { headers })
  .then(res => { return res.json() })
