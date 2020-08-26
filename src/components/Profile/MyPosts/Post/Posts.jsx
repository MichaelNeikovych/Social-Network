import React from 'react';
import style from './Posts.module.css';
import defaultPhoto from '../../../../assets/img/unknown-user.png';

const Post = (props) => {
  const deletePost = () => props.deletePost(props.id);

  return (
    <div className={style.item}>
      <div>
        {/*<img src={props.profile.photos.small ? props.profile.photos.small : defaultPhoto}/>*/}
        <img src={defaultPhoto}/>
        <button onClick={deletePost}>Delete</button>
      </div>
      <div className={style.postItem}>
        <p>{props.message}</p>
        <p>Count of likes: {props.like}</p>
      </div>
    </div>
  )
}

export default Post;