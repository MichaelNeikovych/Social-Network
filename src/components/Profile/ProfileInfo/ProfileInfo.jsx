import React, {useState} from 'react';
import style from './ProfileInfo.module.css';
import styleLogin from "./../../Login/Login.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import defaultPhoto from '../../../assets/img/unknown-user.png'
import {createField, FormComponent} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileInfo = ({profile, isOwner, status, updateStatus, savePhoto, saveProfile}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) return <Preloader/>

  const onPhotoLoad = (e) => {
    savePhoto(e.target.files[0])
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(
      () => {
        setEditMode(false)
      }
    );
  }

  return (
    <div className={style.item}>
      <img src="http://bsnscb.com/data/out/51/38950310-dark-forest-wallpapers.jpeg"/>

      <div className={style.info}>

        <div className={style.avatar}>
          <img src={profile.photos.large || defaultPhoto}/>
          {isOwner && <input type="file" onChange={onPhotoLoad}/>}
        </div>

        {editMode ?
          <ProfileFormWithReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> :
          <ProfileData profile={profile} isOwner={isOwner} activateEditMode={() => setEditMode(true)}/>}
      </div>
      <ProfileStatus status={status} updateStatus={updateStatus}/>
    </div>
  )
}

const ProfileData = ({profile, isOwner, activateEditMode}) => {
  return (
    <div className={style.item}>
      {isOwner && <button onClick={activateEditMode}>edit</button>}
      <p>Full name: {profile.fullName.split('').map(w => w === w.toUpperCase() ? ' ' + w : w).join('')}</p>
      <p>About me: {profile.aboutMe ? profile.aboutMe : 'Add description'}</p>
      <p>Looking for a job: {profile.lookingForAJob ? 'Yes' : 'No'}</p>
      <p>Skills: {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : 'Add skills'}</p>
      <div>Contacts: {Object.keys(profile.contacts).map(key => <Contact key={key} contactTitle={key}
                                                                      contactValue={profile.contacts[key]}/>)}</div>
    </div>
  )
}

const Input = FormComponent('input');
const Textarea = FormComponent('textarea');
const ProfileDataForm = ({handleSubmit, profile, error}) => {
  return (
    <form className={style.item} onSubmit={handleSubmit}>
      <button>save</button>
      {
        error && <div className={styleLogin.wrongMessage}>{error}</div>
      }
      {createField(Input, 'Full name', 'fullName', [])}
      {createField(Textarea, 'About me', 'aboutMe', [])}
      Looking for a job: {createField(Input, null, 'lookingForAJob', [], {type: 'checkbox'})}
      {createField(Textarea, 'Professional skills', 'lookingForAJobDescription', [])}
      Contacts: {Object.keys(profile.contacts).map(key => <div key={key}>
        - {key}: {createField(Input, key, 'contacts.' + key, [])}
      </div>)}
    </form>
  )
}

const ProfileFormWithReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);

const Contact = ({contactTitle, contactValue}) => {
  return <div>- <b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;