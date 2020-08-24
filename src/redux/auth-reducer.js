import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  if (action.type === SET_USER_DATA) {
    return {
      ...state,
      ...action.payload,
    }
  }
  return state;
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: {userId, email, login, isAuth}
});

export const getAuthThunk = () => async (dispatch) => {
  const response = await authAPI.getAuth();
  if (response.resultCode === 0) {
    const {id, email, login} = response.data;
    dispatch(setAuthUserData(id, email, login, true))
  }
  return response;
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe);
  if (response.resultCode === 0) {
    dispatch(getAuthThunk())
  } else {
    const message = response.messages.length > 0 ? response.messages[0] : 'Error';
    dispatch(stopSubmit('login', {_error: message}));
  }
}

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout()
  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export default authReducer;