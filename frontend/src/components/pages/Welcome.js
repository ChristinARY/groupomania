import React, { Component } from 'react';
import '../style/Welcome.css';
import imgGroupomania from '../images/icon-above-font.svg'


class Welcome extends Component {

  state = {
  }

  render() {

    return (
      <div className="pagewelcome">
          <h1>Bienvenue sur le réseau social interne de Groupomania</h1>
          <div>
          <div className="cadreInsCon">
          <div className="cadre"><a href='/login'><span className="lien">Se Connecter</span></a></div>
             <div><a href='/register'><span className="lien">S'inscrire</span></a></div>
          </div>
             <img src={imgGroupomania} alt='groupomania img'></img>
              </div>
              
                

          
          
      </div>
    );
  }

}


export default Welcome;