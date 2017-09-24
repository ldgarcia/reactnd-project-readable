import { combineReducers } from 'redux'

import categories from './categories'
import comments from './comments'
import posts from './posts'
import ui from './ui'
import forms from './forms'

const rootReducer = combineReducers({
  categories,
  comments,
  posts,
  ui,
  forms,
})

export default rootReducer
