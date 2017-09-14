export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST'
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS'
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE'

export const fetchCategoriesRequest = () => ({
  type: FETCH_CATEGORIES_REQUEST,
})

export const fetchCategoriesSuccess = categories => ({
  type: FETCH_CATEGORIES_SUCCESS,
  categories
})

export const fetchCategoriesFailure = exception => ({
  type: FETCH_CATEGORIES_FAILURE,
  exception
})
