import React, { Component } from 'react';
//import axios from 'axios';
import '../style/Login.css';
const API_LOG = 'http://localhost:8080/api/auth/login';


class Login extends Component {

  constructor(props) {
    super(props)

    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangePassword= this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        phone: '',
        password: ''
    }
}

onChangePhone(e) {
  this.setState({ phone: e.target.value })
}

onChangePassword(e) {
  this.setState({ password: e.target.value })
}

onSubmit(e) {
  e.preventDefault()

  const userObject = {
      phone: this.state.phone,
      password: this.state.password
  };
  let conection = JSON.stringify(userObject);
  console.log(conection);

      fetch(API_LOG, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
       
        },
        body: conection,
      })
        .then((responsePost) => responsePost.json())
        .then((responsePost) => {
          localStorage.setItem('infoUser', JSON.stringify(responsePost));
          //localStorage.setItem("idUser", JSON.stringify(responsePost.id));
          localStorage.setItem('idUser', JSON.stringify(responsePost.userId));
          //localStorage.setItem('nomUser', responsePost.username);
          //localStorage.setItem('phoneUser', responsePost.phone);

          console.log('idUser');
          console.log('infoUser');
          //console.log('phoneUser');
          localStorage.setItem('userTokenLog', JSON.stringify(responsePost.token));
          window.location = "/mywall";
          console.log(responsePost);
          //localStorage.setItem('userTokenLog', JSON.stringify(responsePost));
          //window.location = "/mywall";
          //this.setState({redirection:false});
          //localStorage.setItem("inscrit",inscription);
          //console.log(localStorage.getItem("inscrit"));
          //<p>Pour obtenir le token Admin cliquez <span><a href="/admin">ICI</a></span></p>
        });

  this.setState({ phone: '', password: '' })
}



  render() {

    return (
      <div className="login">
          <h1>Connexion au compte</h1>
          <form onSubmit={this.onSubmit}>
            <div className="inputLogin">
          <label htmlFor="identifiant">Identifiant</label>
          <br /><input id="identifiant" value={this.state.phone} onChange={this.onChangePhone} />
          <br /><label htmlFor="mdp">Mot de passe</label>
          <br /><input id="mdp" type='password' value={this.state.password} onChange={this.onChangePassword} />
          <br/><button className="validerLogin">Valider</button>
          </div>
          </form>
          <div>
            <p>Pour créer un profil, cliquez <span><a href="/register">ICI</a></span></p>
            
            </div>
            
      </div>
    );
  }

}


export default Login;
