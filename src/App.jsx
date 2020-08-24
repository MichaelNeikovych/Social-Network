import React from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from './components/Navbar/Navbar.jsx';
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import UsersContainer from "./components/Users/UsersContainer";
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from "./components/Settings/Settings.jsx";
import FriendsContainer from "./components/Friends/FriendsContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) return <Preloader/>

    return (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar/>
        <main className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
          <Route path='/dialogs' render={() => <DialogsContainer/>}/>
          <Route path='/users' render={() => <UsersContainer/>}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
          <Route path='/friends' render={() => <FriendsContainer/>}/>
          <Route path='/login' render={() => <Login/>}/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}),
)(App);