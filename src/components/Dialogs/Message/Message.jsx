import React from 'react';
import style from './../Dialogs.module.css';

const Message = (props) => {
	return (
		<div>
			<p className={style.message}>{props.message}</p>
		</div>
	)
}

export default Message;