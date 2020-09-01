import React from 'react';
import {reduxForm} from "redux-form";
import {createField} from "../../common/FormsControls/FormsControls";

const MyPostsForm = (props) => {
	return <form onSubmit={props.handleSubmit}>
		{createField('textarea', 'Write new post', 'newPostMessage')}
		<div>
			<button>Add post</button>
		</div>
	</form>
}

export default reduxForm({form: 'myPostsForm'})(MyPostsForm);