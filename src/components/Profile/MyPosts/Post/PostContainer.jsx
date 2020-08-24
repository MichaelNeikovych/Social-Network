import React from 'react';
import {connect} from "react-redux";
import Post from "./Post/Posts";
import {deletePost} from "../../../../redux/profile-reducer";

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
	}
}

export default connect(mapStateToProps, {deletePost})(Post);