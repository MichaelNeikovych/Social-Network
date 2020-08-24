import React from "react";
import style from "./Users.module.css";
import userPhoto from '../../assets/img/unknown-user.png'
import {NavLink} from "react-router-dom";

const User = (props) => {
  return (
    <React.Fragment>
      <div>
					<span>
						<div>
              <NavLink to={'profile/' + props.user.id}>
							  <img src={props.user.photos.small ? props.user.photos.small : userPhoto} className={style.usersPhoto}/>
						  </NavLink>
						</div>
						<div>
							{
								props.user.followed ?
                  <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                          onClick={() => {
														props.unfollow(props.user.id)
                          }}>Unfollow</button> :

                  <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                          onClick={() => {
														props.follow(props.user.id)
                          }}>Follow</button>
              }
						</div>
					</span>
        <span>
						<span>
							<div>{props.user.name}</div>
							<div>{props.user.status}</div>
						</span>
						<span>
							<div>{"user.location.country"}</div>
							<div>{"user.location.city"}</div>
						</span>
        </span>
      </div>
    </React.Fragment>
  )
}

export default User;