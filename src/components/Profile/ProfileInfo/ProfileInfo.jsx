import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import defaultPhoto from '../../../assets/img/unknown-user.png'

const ProfileInfo = (props) => {
  if (!props.profile) return <Preloader/>

  return (
    <div className={style.item}>
      <img src="http://bsnscb.com/data/out/51/38950310-dark-forest-wallpapers.jpeg"/>
      <div className={style.info}>
        <img src={props.profile.photos.large ? props.profile.photos.large : defaultPhoto}/>

        <div className={style.item}>
          <p>{props.profile.aboutMe}</p>
          <p>{props.profile.fullName}</p>
          <p>{props.profile.lookingForAJob ? 'I\'m looking for a job' : 'No'}</p>
          <p>{props.profile.lookingForAJobDescription}</p>
          <p>{props.profile.contacts.facebook}</p>
        </div>
      </div>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
    </div>
  )
}

export default ProfileInfo;