import {applyMiddleware, combineReducers, createStore} from 'redux';
import {reducer as formReducer} from 'redux-form';

import thunkMiddleware from 'redux-thunk';
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";

const reducers = combineReducers({
	profilePage : profileReducer,
	dialogsPage : dialogsReducer,
	friendsPage : friendsReducer,
	usersPage : usersReducer,
	auth : authReducer,
	form : formReducer,
	app : appReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;


window.store = store;