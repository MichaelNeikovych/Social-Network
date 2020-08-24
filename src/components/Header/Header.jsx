import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img src='https://www.pngkit.com/png/full/237-2377232_vector-black-and-white-library-dark-owl-by.png'/>
      <div className={style.loginBlock}>
        {props.isAuth ? <div>{props.login}<div><button onClick={props.logout}>Log out</button></div></div> :
          <NavLink to='login/'>
            Login
          </NavLink>}
      </div>
    </header>
  )
}

export default Header;