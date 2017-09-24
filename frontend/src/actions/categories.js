import * as types from './types'
import * as categoriesAPI from '../utils/CategoriesAPI'

export function fetchCategories() {
  return dispatch => {
    dispatch({ type: types.FETCH_CATEGORIES_REQUEST, })
    categoriesAPI.getAll()
    .then(data => dispatch({
      type: types.FETCH_CATEGORIES_SUCCESS,
      categories: data.categories,
    }))
    .catch(exception => dispatch({
      type: types.FETCH_CATEGORIES_FAILURE,
      exception,
    }))
  }
}
