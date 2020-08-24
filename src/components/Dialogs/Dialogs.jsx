import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import {reduxForm} from "redux-form";
import {createField} from "../common/FormsControls/FormsControls";

const DialogsForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    {createField('textarea', 'Enter your message', 'newMessage', null, {value: props.newMessageText})}
    <div>
			<button>Add message</button>
    </div>
  </form>
}

const DialogsReduxForm = reduxForm({form: 'dialog-form'})(DialogsForm);

const Dialogs = (props) => {
  const dialogs = props.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} ava={dialog.ava} key={dialog.id}/>);
  const messages = props.messages.map(message => <Message id={message.id} message={message.message} key={message.id}/>);

  const addNewMessage = (value) => {
    if (!value.newMessage) return;
    props.addMessage(value.newMessage)
    value.newMessage = '';
  };

	return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>{dialogs}</div>
      <div className={style.dialogItems}>{messages}</div>
      <div>
        <DialogsReduxForm onSubmit={addNewMessage}/>
      </div>
    </div>
  )
}

export default Dialogs;