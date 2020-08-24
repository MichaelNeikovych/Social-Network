import React from 'react';
import style from './Posts.module.css';

const Post = (props) => {
  const deletePost = () => props.deletePost(props.id);

  return (
    <div className={style.item}>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKWbScKTYD4VlcWVJAglYkAdldNg27tutNhOGQkB8-fJQ9VCV2&usqp=CAU"/>
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