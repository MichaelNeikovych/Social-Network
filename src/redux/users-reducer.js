import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USER_TOTAL_COUNT = 'SET-USER-TOTAL-COUNT';
const SET_IS_FETCHING = 'SET-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
  if (action.type === FOLLOW) {
    return {
      ...state,
      users: state.users.map(u => {
        if (u.id === action.userId) {
          return {...u, followed: true}
        }
        return u;
      })
    }
  }
  if (action.type === UNFOLLOW) {
    return {
      ...state,
      users: state.users.map(u => {
        if (u.id === action.userId) {
          return {...u, followed: false}
        }
        return u;
      })
    }
  }
  if (action.type === SET_USERS) {
    return {...state, users: action.users}
  }
  if (action.type === SET_CURRENT_PAGE) {
    return {...state, currentPage: action.currentPage}
  }
  if (action.type === SET_USER_TOTAL_COUNT) {
    return {...state, totalUsersCount: action.count}
  }
  if (action.type === SET_IS_FETCHING) {
    return {...state, isFetching: action.isFetching}
  }
  if (action.type === TOGGLE_IS_FOLLOWING_PROGRESS) {
    return {
      ...state,
      followingInProgress: action.isFetching ?
        [...state.followingInProgress, action.userId] :
        state.followingInProgress.filter(id => id !== action.userId)
    }
  }
  return state;
}


export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (count) => ({type: SET_USER_TOTAL_COUNT, count});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
});

export const requestUsers = (currentPage, pageSize, pageNumber = currentPage) => async (dispatch) => {
  dispatch(setCurrentPage(pageNumber));
  dispatch(setIsFetching(true));
  const response = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setIsFetching(false))
  dispatch(setUsers(response.items));
  dispatch(setTotalUsersCount(response.totalCount));
}

export const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, userId));
  const response = await apiMethod(userId);
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
}

export const unfollow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
}

export default usersReducer;