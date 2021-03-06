import React, { Component } from 'react';
import ComponentMessage from './componentMessage.js';
import ComponentDeconnecte from './ComponentDeconnecte.js';
//import ModifMessage from './ModifMessage.js';
//import axios from 'axios';
import "../style/MyWall.css"
//import DeleteMess from '../utils/BoutonSuppr';


  const Nom = JSON.parse(localStorage.getItem("infoUser")).username;
  //console.log(localStorage.getItem('username'));



const API = 'http://localhost:8080/api/messages?order=id:DESC';

class MyWall extends Component {






  



  // default State object
  state = {
    messages: []
  }
  componentDidMount() {
    /*axios
      .get(API)
      .then(response => {
        console.log(response.data)

        
  // create an array of contacts only with relevant data
        const newMessage = response.data.map(c => {
          return {
            id: c.id,
            title: c.title,
            content: c.content,
            //img: c.img,
            User: c.User
          };
        });*/


        fetch(API)
      .then((response) => response.json())
      .then((response) => {

        console.log(response)
        
  // create an array of contacts only with relevant data
        const newMessage = (response.results).map(c => {
          return {
            id: c.id,
            title: c.title,
            content: c.content,
            //img: c.img,
            User: c.User
          };
        });
        // create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, {
          messages: newMessage
        });
        // store the new state object in the component's state
        this.setState(newState);
        console.log(newMessage)
      })

      .catch(error => console.log(error));
  };

  render() {

    const allMessage = this.state.messages.map((message) =>

      <div className="messages" key={message.id}>
        <h3>{message.userId}</h3>
        <h4>{message.title}</h4>
        <p>{message.content}</p>
        <div className="imagemywall">
          <img src={message.img} alt=""></img>
        </div>
        
        <span className="idmess">id: {message.id}</span>

      </div>
    );

    return (

      <div>
        <h1>Bienvenue {Nom}!</h1>
      {Nom?<ComponentMessage />:<ComponentDeconnecte />}
      </div>)
     
}
}

export default MyWall;
