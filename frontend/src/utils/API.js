export const getURL = () => {
  const serverOrigin = process.env.REACT_APP_SERVER_ORIGIN || 'http://localhost'
  const serverPort = process.env.REACT_APP_SERVER_PORT || 3001
  return `${serverOrigin}:${serverPort}`
}

export const getToken = () => {
  let token = localStorage.token
  if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)
  return token
}

export const getDefaultHeaders = (token) => ({
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': token
})
