import * as types from './types'

export const fetchCategoriesRequest = () => ({
  type: types.FETCH_CATEGORIES_REQUEST,
})

export const fetchCategoriesSuccess = categories => ({
  type: types.FETCH_CATEGORIES_SUCCESS,
  categories
})

export const fetchCategoriesFailure = exception => ({
  type: types.FETCH_CATEGORIES_FAILURE,
  exception
})
