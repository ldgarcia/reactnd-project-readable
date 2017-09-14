import {
  FETCH_CATEGORIES_SUCCESS,
} from '../actions/categories'

const initialState = []

const categories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return action.categories
    default:
      return state;
  }
}

export default categories;
