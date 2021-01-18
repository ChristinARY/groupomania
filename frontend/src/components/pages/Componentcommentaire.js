import React, { Component } from 'react';

import fotoProfil from './fotoProfil.png';
//const APIMSG = 'http://localhost:8080/api/messages?order=id:DESC';

const APICMT = 'http://localhost:8080/api/messages/commentaires/';


    class ComponentCommentaire extends Component {






  



        // default State object
        
        state = {
          commentaire: [],
          afficheInputCom:false
        }

        changeState=(event) => {
          this.setState({
            afficheInputCom:true 
          });
          //console.log(this.state.nom)
        }
        /*changeState () {
          this.setState({afficheInputCom:true})  
        }*/
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
      
      
              fetch(APICMT+this.props.recupIdMessage2)
            .then((response) => response.json())
            .then((response) => {
      
              console.log(response)
              
        // create an array of contacts only with relevant data
              const newCommentaire = (response.results).map(c => {
                
                return {
                  id: c.id,
                  messgeId:c.messageId,
                  User: c.userId,
                  contentCom: c.contentCom
                  //img: c.img,
                };
              });
              // create a new "State" object without mutating 
              // the original State object. 
              const newState = Object.assign({}, this.state, {
                commentaire: newCommentaire,
                //afficheInputCom:false
              });
              //localStorage.setItem('idMsg', JSON.stringify(message.id));
              //console.log('idMsg');
              // store the new state object in the component's state
              this.setState(newState);
              
              console.log(newCommentaire)
            })
      
            .catch(error => console.log(error));
        };
      
        render() {
          //localStorage.setItem('idMsg', JSON.stringify(message.id));  {this.state.afficheInputCom?<CommenterMessage  recupIdMessage={message.id} />:null}   <a  href="http://localhost:8081/commenterMessage/" /*value={message.id}*/ className="btnBasMessage"  >Commenter</a>
      
          const allCommentaire = this.state.commentaire.map((commentaire) =>
          
          
            <div key={commentaire.id} >
              <div className="header"><img className="imgProfilCom2" src={fotoProfil} alt=""/></div>
              <span className="idmess">id: {commentaire.id} </span>
              <div>
              <h3>{commentaire.userId}</h3>
              <h4>{commentaire.messageId}</h4>
              <p>{commentaire.contentCom}</p>
              </div>
            </div>
          );
      
          return (
      
            
    <div className="body">
    {allCommentaire}
  </div>
)
           
        };
      }
      
      export default ComponentCommentaire;