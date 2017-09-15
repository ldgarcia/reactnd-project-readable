import * as actions from '../actions/posts'

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
    case actions.FETCH_POSTS_REQUEST:
      return {
        ...state,
        ui: {
          ...state.ui,
          loadingPostsError: false
        }
      }
    case actions.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        ui: {
          ...state.ui,
          loadingPostsError: false
        }
      }
    case actions.FETCH_POSTS_FAILURE:
      return {
        ...state,
        ui: {
          ...state.ui,
          loadingPostsError: true
        }
      }
    case actions.FETCH_POST_SUCCESS:
      return {
        ...state,
        posts: [
          ...state.posts.filter(post => post.id !== action.post.id),
          action.post
        ]
      }
    case actions.ADD_POST_REQUEST:
      return {
        ...state,
        ui: {
          ...state.ui,
          addPostSubmitButtonIsEnabled: false
        }
      }
    case actions.ADD_POST_SUCCESS:
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
    case actions.ADD_POST_FAILURE:
      return {
        ...state,
        ui: {
          ...state.ui,
          addPostSubmitButtonIsEnabled: true
        }
      }
    case actions.EDIT_POST_REQUEST:
      return {
        ...state,
        ui: {
          ...state.ui,
          editPostSubmitButtonIsEnabled: false
        }
      }
    case actions.EDIT_POST_SUCCESS:
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
    case actions.EDIT_POST_FAILURE:
      return {
        ...state,
        ui: {
          ...state.ui,
          editPostSubmitButtonIsEnabled: true
        }
      }
    case actions.DELETE_POST_SUCCESS:
      return {
        ...state,
        posts : state.posts.filter(post => post.id !== action.post.id)
      }
    case actions.VOTE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((post, index) => {
          if (post.id !== action.post.id) {
            return post
          }
          return action.post
        })
      }
    case actions.POST_FORM_INPUT_CHANGE:
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
    case actions.OPEN_ADD_POST_MODAL:
      return {
        ...state,
        ui: {
          ...state.ui,
          addPostModalIsOpen: true
        }
      }
    case actions.CLOSE_ADD_POST_MODAL:
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
    case actions.OPEN_EDIT_POST_MODAL:
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
    case actions.CLOSE_EDIT_POST_MODAL:
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
