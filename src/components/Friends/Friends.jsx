import React from 'react';
import Friend from "./Friend/Friend";

const Friends = (props) => {
	const friends = props.friendsPage.friends.map(fr => <Friend name={fr.name} id={fr.id}/>);
	
	return (
		<div>
			{friends}
		</div>
	)
}

export default Friends;