import React from "react";
import {reduxForm} from "redux-form";
import style from "./Login.module.css";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {createField, FormComponent} from "../common/FormsControls/FormsControls";

const maxInputLength = maxLengthCreator(100);
const Input = FormComponent('input');

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={style.loginWrap}>
      {createField(Input, 'email', 'email', [required, maxInputLength])}
      {createField(Input, 'password', 'password', [required, maxInputLength], {type: 'password'})}
      {createField(Input, null, 'rememberMe', null, {type: 'checkbox'}, 'remember me')}
      {
        props.error && <div className={style.wrongMessage}>{props.error}</div>
      }
      <button>Submit</button>
    </form>
  )
}

export default reduxForm({form: 'login'})(LoginForm);