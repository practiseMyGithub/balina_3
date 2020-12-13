import axios from 'axios'
import {
  LOAD_POSTS,
  // GET_POST,
  CREATE_POST,
  // UPDATE_POST,
  // DELETE_POST,
  CLEAR_POST,
  // FILTER_POSTS,
  // UPDATE_LIKES,
  POST_ERROR,
  // PAGINATE_POSTS,
  // PAGINATE_ERROR,
} from '../actions/types'
import { setAlert } from './alert';




// CREATE POST
export const createPost = (formData, history) => async dispatch => {
  const config = {
    headers: { 'Content-Type': 'application/json' }
  }

  try {
    const { data } = await axios.post('/api/posts', formData, config);
    dispatch({ type: CREATE_POST, payload: data });
    dispatch(setAlert('Post created successfully!', 'success'));
    // setTimeout(() => {
    //   history.push('/posts')
    // }, 2000);

  } catch (error) {
    // console.log(error.response.data);
    const response = error.response.data;
    let message = '';

    if (response.message.includes('You have no profile')) {
      dispatch(setAlert('You still have no profile. Please create new one !', 'danger'));
    } else if (response.message.includes('Final date')) {
      message = error.response.data.message;
      dispatch(setAlert(message, 'danger'))
    }
    // else {
    //   const errors = error.response.data.error.errors;
    //   console.log(error.response)
    // if (error !== undefined) {
    //   const msgArr = Object.values(errors).map(el => el.message);
    //   message = msgArr.join('. ');
    //   dispatch(setAlert(message, 'danger'))
    // }
    // }

    dispatch({
      type: POST_ERROR,
      payload: error.response && error.response.data ? error.response.data.message : error.message
    }); // - this need error state as object {}

  }
}

// GET ALL POSTS
export const loadPosts = (page, limit) => async dispatch => {
  try {
    // const { data } = await axios.get(`/api/posts/page?page=${page}&limit=${limit}`);
    // const { data } = await axios.get(`/api/posts/page?page=${page}`);
    const { data } = await axios.get(`/api/posts`);
    dispatch({ type: LOAD_POSTS, payload: data });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: POST_ERROR,
      // payload: error.response && error.response.data ? error.response.data.message : error.message
    }); // - this need error state as object {}
  }
}

// CLEAR POST
export const clearPost = () => dispatch => {
  dispatch({ type: CLEAR_POST });
}

