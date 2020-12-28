import React, { Component } from 'react';
//import axios from 'axios';
import Logout from "../log/Logout"
import Delete from "../log/Delete"
import '../style/User.css';
import InfoUser from './infoUser.js';
import imgGroupomania from '../images/icon-left-font-monochrome-black.svg'

class Users extends Component {

  state = {
  }
  render() {

  const tokenId = JSON.parse(localStorage.getItem(('userTokenLog')))
  if(tokenId === null) {
    window.location = "/login"
  }
    return (
      <div className="User">
        
        <h1>Profil</h1>
        <InfoUser/>
        <Logout />
        <br /><Delete />
        <div className="imgFooter"><img src={imgGroupomania} alt='groupomania img'></img></div>
      </div>
    );
  }

}


export default Users;

