import * as types from '../actions/types'

const initialState = {
  posts: [],
  forms: {
    sort: {
      by: 'SORT_BY_SCORE',
      order: 'DESC',
    },
    add: {
      title: '',
      body: '',
      author: '',
      category: ''
    },
    edit: {
      id: null,
      title: '',
      body: '',
    },
  },
  ui: {
    loadingPostsError: false,
    addPostModalIsOpen: false,
    addPostSubmitButtonIsEnabled: true,
    editPostModalIsOpen: false,
    editPostSubmitButtonIsEnabled: true,
  }
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return {
        ...state,
        ui: {
          ...state.ui,
          loadingPostsError: false
        }
      }
    case types.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        ui: {
          ...state.ui,
          loadingPostsError: false
        }
      }
    case types.FETCH_POSTS_FAILURE:
      return {
        ...state,
        ui: {
          ...state.ui,
          loadingPostsError: true
        }
      }
    case types.FETCH_POST_SUCCESS:
      return {
        ...state,
        posts: [
          ...state.posts.filter(post => post.id !== action.post.id),
          action.post
        ]
      }
    case types.ADD_POST_REQUEST:
      return {
        ...state,
        ui: {
          ...state.ui,
          addPostSubmitButtonIsEnabled: false
        }
      }
    case types.ADD_POST_SUCCESS:
      return {
        ...state,
        posts: [
          ...state.posts,
          action.post
        ],
        ui: {
          ...state.ui,
          addPostSubmitButtonIsEnabled: true
        }
      }
    case types.ADD_POST_FAILURE:
      return {
        ...state,
        ui: {
          ...state.ui,
          addPostSubmitButtonIsEnabled: true
        }
      }
    case types.EDIT_POST_REQUEST:
      return {
        ...state,
        ui: {
          ...state.ui,
          editPostSubmitButtonIsEnabled: false
        }
      }
    case types.EDIT_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((post, index) => {
          if (post.id !== action.post.id) {
            return post
          }
          return action.post
        }),
        ui: {
          ...state.ui,
          editPostSubmitButtonIsEnabled: true
        }
      }
    case types.EDIT_POST_FAILURE:
      return {
        ...state,
        ui: {
          ...state.ui,
          editPostSubmitButtonIsEnabled: true
        }
      }
    case types.DELETE_POST_SUCCESS:
      return {
        ...state,
        posts : state.posts.filter(post => post.id !== action.post.id)
      }
    case types.VOTE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((post, index) => {
          if (post.id !== action.post.id) {
            return post
          }
          return action.post
        })
      }
    case types.POST_FORM_INPUT_CHANGE:
      return {
        ...state,
        forms: {
          ...state.forms,
          [action.form]: {
            ...state.forms[action.form],
            [action.name]: action.value
          }
        }
      }
    case types.OPEN_ADD_POST_MODAL:
      return {
        ...state,
        ui: {
          ...state.ui,
          addPostModalIsOpen: true
        },
        forms: {
          ...state.forms,
          add: {
            ...state.forms.add,
            category: action.defaultCategory
          }
        }
      }
    case types.CLOSE_ADD_POST_MODAL:
      return {
        ...state,
        forms: {
          ...state.forms,
          add: {
            ...initialState.forms.add
          }
        },
        ui: {
          ...state.ui,
          addPostModalIsOpen: false
        }
      }
    case types.OPEN_EDIT_POST_MODAL:
      const { post } = action
      return {
        ...state,
        forms: {
          ...state.forms,
          edit: {
            id: post.id,
            title: post.title,
            body: post.body,
          }
        },
        ui: {
          ...state.ui,
          editPostModalIsOpen: true
        }
      }
    case types.CLOSE_EDIT_POST_MODAL:
      return {
        ...state,
        forms: {
          ...state.forms,
          edit: {
            ...initialState.forms.edit
          }
        },
        ui: {
          ...state.ui,
          editPostModalIsOpen: false
        }
      }

    default:
      return state;
  }
}

export default posts;
