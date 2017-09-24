import * as types from './types'

export function onInputChange(formName, inputName, inputValue) {
  return {
    type: types.FORM_INPUT_CHANGE,
    formName,
    inputName,
    inputValue,
  }
}

export function resetForm(name) {
  return {
    type: types.FORM_RESET,
    name,
  }
}

export function loadFormData(name, data) {
  return {
    type: types.FORM_LOAD_DATA,
    name,
    data,
  }
}
