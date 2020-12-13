import { combineReducers } from 'redux'
// import authReducer from './auth'
// import alertReducer from './alert'
import { postReducer } from './post'
// import profileReducer from './profile'
// import commentReducer from './comment'
// import voteReducer from './vote'
// import expenseReducer from './expense'
// import infoReducer from './info'
// import userReducer from './user'
// import resetReducer from './reset'
// import fileReducer from './file'

export default combineReducers({
  // auth: authReducer,
  // user: userReducer,
  // alert: alertReducer,
  // profile: profileReducer,
  posts: postReducer,
  // comment: commentReducer,
  // vote: voteReducer,
  // expense: expenseReducer,
  // info: infoReducer,
  // reset: resetReducer,
  // file: fileReducer
});