const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
	dialogs: [
		{
			id: 1,
			name: 'Alena',
			ava: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/83D7/production/_111515733_gettyimages-1208779325.jpg"
		},
		{id: 2, name: 'Zlata', ava: "https://cdn.mos.cms.futurecdn.net/otjbibjaAbiifyN9uVaZyL.jpg"},
	],
	messages: [
		{id: 1, message: 'How are you?'},
		{id: 2, message: 'I\'m fine'},
	]
}

const dialogsReducer = (state = initialState, action) => {
	if (action.type === ADD_MESSAGE) {
		const newMessage = {id: 3, message: action.newMessage}
		return {
			...state,
			messages: [...state.messages, newMessage]
		}
	}
	return state;
}

export const addMessage = (newMessage) => ({type: ADD_MESSAGE, newMessage});
export default dialogsReducer;