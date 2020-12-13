import {
  LOAD_POSTS,
  // GET_POST,
  CREATE_POST,
  // UPDATE_POST,
  // DELETE_POST,
  // FILTER_POSTS,
  // CLEAR_POST,
  // UPDATE_LIKES,
  POST_ERROR,
  // GET_COUNTDOWN,
  // PAGINATE_ERROR,
  // PAGINATE_POSTS
} from '../actions/types'


export const postReducer = (state = {
  posts: [],
  post: null,
  countdown: null
}, action) => {
  const { type, payload } = action;

  switch (type) {
    // case PAGINATE_POSTS:
    //   return {
    //     ...state,
    //     posts: payload.data,
    //     page: payload.page,
    //     pages: payload.numPages,
    //     limit: payload.limit,
    //     loading: false
    //   }
    // for posts dashboard
    case LOAD_POSTS:
      return {
        ...state,
        posts: payload.data,
        page: payload.page,
        pages: payload.numPages,
        limit: payload.limit,
        loading: false,
        error: {}, // just to clear error after post id is not found from Review page
      }
    // case GET_POST:
    //   return {
    //     ...state,
    //     post: payload,
    //     loading: false
    //   }
    case CREATE_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false
      }
    // case UPDATE_POST:
    //   return {
    //     ...state,
    //     posts: state.posts.map(post => post._id === payload.id ? payload.post : post),
    //     loading: false
    //   }
    // case DELETE_POST:
    //   return {
    //     ...state,
    //     posts: state.posts.filter(post => post._id !== payload),
    //     loading: false
    //   }
    // case FILTER_POSTS:
    //   return {
    //     ...state,
    //     posts: payload,
    //     loading: false
    //   }
    // case CLEAR_POST:
    //   return {
    //     ...state,
    //     post: null
    //   }
    // case UPDATE_LIKES:
    //   return {
    //     ...state,
    //     posts: state.posts.map(post => post._id === payload.id ? { ...post, likes: payload.likes } : post),
    //     loading: false
    //   }
    case POST_ERROR:
      return {
        ...state,
        error: payload
      }
    // case PAGINATE_ERROR:
    //   return {
    //     ...state,
    //     error: payload
    //   }
    // case GET_COUNTDOWN:
    //   return {
    //     ...state,
    //     countdown: payload
    //   }
    default:
      return state
  }
}