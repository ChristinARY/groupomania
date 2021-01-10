import React, { Component } from 'react';
//import axios from 'axios';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"
import '../style/AddMessage.css';
import imgGroupomania from '../images/icon-left-font-monochrome-black.svg'
const API_REP_MESS = 'http://localhost:8080/api/messages/commentaires/:id';
//localStorage.setItem('idMessage', "2");
//const idmessage= JSON.parse(localStorage.getItem("idMsg"));

class CommenterMessage extends Component {

  constructor(props) {
    super(props)
    //localStorage.setItem('idMessage', this.props.recupIdMessage);
    //const idmessage=localStorage.getItem("idMessage"
    this.onChangeContent= this.onChangeContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   

    this.state = {
        messageId:'',
        userId:'',
        content: '',
    }
}




onChangeContent(e) {
  this.setState({ content: e.target.value })
}


onSubmit(e) {
  e.preventDefault()
  
  /*const tokenId = JSON.parse(localStorage.getItem(('userTokenLog')))
  axios.defaults.headers.common = {'Authorization': `Bearer ${tokenId.token}`}
  console.log(JSON.parse(localStorage.getItem('userTokenLog')))*/
  const respMessObject = {
      userId:localStorage.getItem('idUser'),
      messageId:this.props.recupIdMessage,
      content: this.state.content,
  };

  let newComMsg = JSON.stringify(respMessObject);
  console.log(newComMsg);

  //console.log(messObject);

  if (window.confirm("Voulez-vous envoyer la publication ?"))
  {

    //const user = localStorage.getItem('idUser');
//const token = localStorage.getItem('userTokenLog');
const headers = { 
  "Content-Type": "application/json",
 //Authorization: 'Bearer' + tokenId,
//'Accept-Language': language
};
/*const fetchParams = { method: "POST",
           headers: (headers) },;*/
//fetch(url, fetchParams)




    fetch(API_REP_MESS, {
      method: "POST",
      headers:(headers),
      body: newComMsg,
    })
      .then((responsePost) => responsePost.json())
      .then((responsePost) => {
        console.log(newComMsg)
        console.log(responsePost)
        
      });









  /*axios.post(API_MESS , newMsg)
  
      .then((res) => {
          console.log(res.data)
      }).catch((error) => {
          console.log(error)
      });*/

  this.setState({ title: '', content: '', img:''})
  window.location = "/mywall";
    }
}

  render() {

    const tokenId = JSON.parse(localStorage.getItem(('userTokenLog')))
  if(tokenId === null) {
    window.location = "/login"
  }

    return (
      <div className="ajoutmessage">
          <h1>Ajouter un Commentaire</h1>
          <form onSubmit={this.onSubmit}>
          <div className="inputMessage">
                
          <br /><label htmlFor="contenu">Contenu du Commentaire</label>
          <br /><textarea id="contenu" value={this.state.content} onChange={this.onChangeContent} />
          <br /><button className="post">Poster le Commentaire</button>
          </div>
          </form>
          <div className="imgFooter"><img src={imgGroupomania} alt='groupomania img'></img></div>
      </div>
    );
  }

}


export default CommenterMessage;