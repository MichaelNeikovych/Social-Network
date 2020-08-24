import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './DialogItem.module.css';

const DialogItem = (props) => {
	return (
		<div className={`${style.dialogItem} ${style.active}`}>
			<img src={props.ava}/>
			<NavLink to={'/dialogs/'+''+props.id}>{props.name}</NavLink>
		</div>
	)
}

export default DialogItem;