import React, { Component } from 'react';
//import axios from 'axios';
import '../style/admin.css';
import Logout from "../log/Logout"
import ComponentMessageAdmin from "../log/componentMessageAdmin"
import Delete from "../log/Delete"
import '../style/User.css';
import InfoUser from './infoUser.js';
import ListMessageSignalés from './ListMessageSignalés.js';
import imgGroupomania from '../images/icon-left-font-monochrome-black.svg'
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"

class ExpaceAdmin extends Component {

  state = {
  }
  render() {

  const tokenId = JSON.parse(localStorage.getItem(('userTokenLog')))
  if(tokenId === null) {
    window.location = "/login"
  }
    return (
      <div className="User">
        
        <h1>Bienvenu dans l'espace administrateur</h1>
        <br /><Link to="/AllMessagesSignale" className="BtnAdmin">Acceder à Tous les messages Signalés</Link>
        <br /><br /><br /><br /><Link to="/ComponentAllUsersAdmin" className="BtnAdmin">Acceder à Tous les Utilsateurs</Link>
        <br /><br /><br /><br /><Link to="/AllMessagesAdmin" className="BtnAdmin">Acceder à Tous les Messages</Link>
      
        <div className="imgFooter"><img src={imgGroupomania} alt='groupomania img'></img></div>
      </div>
    );
  }

}


export default ExpaceAdmin;
