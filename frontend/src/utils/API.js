export const getURL = () => {
  return process.env.APP_API_URL || 'http://localhost:3001'
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
