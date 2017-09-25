export const getURL = () => {
  const { SERVER_ORIGIN, SERVER_PORT } = process.env
  if (SERVER_ORIGIN && SERVER_PORT) {
    return `${SERVER_ORIGIN}:${SERVER_PORT}`
  }
  return 'http://localhost:3001'
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
