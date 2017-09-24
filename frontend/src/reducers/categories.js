import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from '../actions/types'

const initialState = []

function categories(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return action.categories
    case FETCH_CATEGORIES_FAILURE:
      return initialState
    default:
      return state
  }
}

export default categories;
