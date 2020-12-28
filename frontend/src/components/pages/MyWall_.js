import React, { Component } from 'react';
//import axios from 'axios';
import "../style/MyWall.css"
//import DeleteMess from '../utils/BoutonSuppr';
if (localStorage.getItem('idUser')){
//console.log(localStorage.getItem('infoUser'));
//const id = localStorage.getItem('idUser');
console.log(localStorage.getItem('idUser'));
console.log(localStorage.getItem('userTokenLog'));}
//const fetch = window.fetch.bind(window);
const API = 'http://localhost:8080/api/auth/messages';
const fetch = window.fetch.bind(window);



const user = localStorage.getItem('idUser');
const token = localStorage.getItem('userTokenLog');
//const language = Cookies.get('language');
const headers = { 
  "Content-Type": "application/json",
 Authorization: 'Bearer' + token,
//'Accept-Language': language
}
const fetchParams = { method: 'GET',
           headers: (headers) };
//fetch(url, fetchParams)









class MyWall extends Component {

  // default State object
  
  state = {
    //messages: []
  }
  componentDidMount() {
    /*const config = {
headers: {
        Authorization: 'Bearer' + localStorage.getItem('userTokenLog')
      }

    };*/




    axios
      .get(API, config)
      .then(response => {
      }
  // create an array of contacts only with relevant data






















/*
    fetch(API,user,fetchParams).then(
      res=>{
        this.setState({
          messages: res.json()
        })
      },
      err =>{
        console.log(err)
      }
    )
  
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
   
  })
  .catch(error => console.log(error));

*/





    /*axios
      .get(API, config).then(
        res=>{
          this.setState({
        messages: res.data
          //console.log(res)
        },
        err =>{
          console.log(err)
        }
      )
      .then(response => {*/
  // create an array of contacts only with relevant data

  /*fetch(API,'messages', config).then(
    res=>{
      this.setState({
        messages: res.json()
      })
    },*/
    /*err =>{
      console.log(err)
    }*/
  /*)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);*/
       /* const newMessage = response.data.map(c => {
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
        console.log(newMessage)*/
      //})

      //.catch(error => console.log(error));
  };

  render() {
    

    /*const allMessage = this.state.messages.map((message) =>

      <div className="messages" key={message.id}>
        <h3>{message.User.username}</h3>
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
        <h2>Bonjour !</h2>
        {allMessage}
      </div>
    )*/


    return (

      <div>
        <h2>Bonjour !</h2>
        
      </div>
    )
  };
}

export default MyWall;