import React from 'react';
import style from '../MyPosts/MyPosts.module.css';
import Post from "./Post/Posts";
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

const MyPostsReduxForm = reduxForm({form: 'myPostsForm'})(MyPostsForm);

const MyPosts = React.memo(props => {
	const posts = [...props.posts].reverse().map(p => <Post {...props} id={p.id} message={p.message} like={p.like}/>);

	const onAddPostClick = (value) => {
		if (!value.newPostMessage) return;
		props.addPost(value.newPostMessage);
		value.newPostMessage = '';
	}

	return (
		<div className={style.postBox}>
			<h2>My posts</h2>
			<MyPostsReduxForm onSubmit={onAddPostClick}/>
			<div>{posts}</div>
		</div>
	)
})

export default MyPosts;