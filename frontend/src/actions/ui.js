import * as types from './types'

export function openModal(name) {
  return {
    type: types.OPEN_MODAL,
    name,
  }
}

export function closeModal(name) {
  return {
    type: types.CLOSE_MODAL,
    name,
  }
}
