import React from "react";
import style from './FormsControls.module.css';
import {Field} from "redux-form";

export const FormComponent = Element => ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
      <div>
        <Element {...input} {...props}/>
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const createField = (component, placeholder, name, validators, props = {}, text = '') => (
  <div>
    <Field component={component} placeholder={placeholder} name={name} validate={validators} {...props}/>{text}
  </div>
)