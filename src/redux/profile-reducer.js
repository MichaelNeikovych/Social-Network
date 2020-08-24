import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE_POST';

const initialState = {
  posts: [
    {id: 1, message: 'It\'s my first post', like: 15},
    {id: 2, message: 'It\'s my second post', like: 11},
    {id: 3, message: 'It\'s my third post', like: 1},
    {id: 4, message: 'It\'s my fourth post', like: 23},
    {id: 5, message: 'It\'s my fifth post', like: 2},
    {id: 6, message: 'It\'s my sixth post', like: 53},
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    const newPost = {id: 7, message: action.newPostMessage, like: 0}
    return {
      ...state,
      posts: [...state.posts, newPost],
      newPostText: '',
    }
  }
  if (action.type === DELETE_POST) {
    return {
      ...state,
      posts: state.posts.filter(p => p.id !== action.postId)
    }
  }
  if (action.type === SET_USER_PROFILE) {
    return {...state, profile: action.profile}
  }
  if (action.type === SET_STATUS) {
    return {...state, status: action.status}
  }
  return state;
}

export const addPost = (newPostMessage) => ({type: ADD_POST, newPostMessage});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getProfileThunk = (userId) => async (dispatch) => {
  const response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response));
}

export const getStatusThunk = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response));
}

export const updateStatusThunk = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status)
  if (response.resultCode === 0) {
    dispatch(setStatus(status));
  }
}

export default profileReducer;