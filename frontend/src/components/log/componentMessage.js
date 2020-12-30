import React, { Component } from 'react';
const Nom = JSON.parse(localStorage.getItem("infoUser")).username;
console.log(localStorage.getItem('username'));
const API = 'http://localhost:8080/api/messages?order=id:DESC';




    class ComponentMessage extends Component {






  



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
      
            
    <div className="body">
    <h2>Bonjour {Nom} !</h2>
    <h3>Les derniers messages postés par vos Collegues</h3>
    {allMessage}
  </div>
)
           
        };
      }
      
      export default ComponentMessage;