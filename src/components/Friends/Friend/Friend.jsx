import React from 'react';
import {NavLink} from "react-router-dom";

const Friend = (props) => {
	return (
		<div>
			<NavLink to={`/friends/${props.id}`}>{props.name}</NavLink>
		</div>
	)
}

export default Friend;