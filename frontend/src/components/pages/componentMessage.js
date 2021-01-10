import React, { Component } from 'react';
import MiniCommenterMessage from './MiniCommenterMessage.js';
import Componentcommentaire from './Componentcommentaire.js';
import ComponentSignaler from './ComponentSignaler.js'; 
import ComponentModifier from './ComponentModifier.js';
import fotoProfil from './fotoProfil.png';
const APIMSG = 'http://localhost:8080/api/messages?order=id:DESC';
//const verifie = false ; if(localStorage.getItem('idUser')=message.userId){
           // verifie = false;
         // }

//const APICMT = 'http://localhost:8080/api/messages/commentaire/?order=id:DESC';


    class ComponentMessage extends Component {






  



        // default State object
        
        state = {
          messages: [],
          afficheInputCom:false,
          afficheInputSignaler:false,
          modifierMessage:false,
          verifie : true
        }

        changeState=(event) => {
          this.setState({
            afficheInputCom:true 
          });
          
          //console.log(this.state.nom)
        }
        signalChangeState=(event) => {
          this.setState({
            afficheInputSignaler:true 
          });
        }
        modifierMessageChangeState=(event) => {
          this.setState({
            modifierMessage:true 
          });
        }
        verifieChangeState=(event) => {
          this.setState({
            verifie:false
          });
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
      
      
              fetch(APIMSG)
            .then((response) => response.json())
            .then((response) => {
      
              console.log(response)
              
        // create an array of contacts only with relevant data
              const newMessage = (response.results).map(c => {
                
                return {
                  id: c.id,
                  title: c.title,
                  content: c.content,
                  contentCom: c.contentCom,
                  //img: c.img,
                  User: c.userId
                };
              });
              // create a new "State" object without mutating 
              // the original State object. 
              const newState = Object.assign({}, this.state, {
                messages: newMessage,
                //afficheInputCom:false
              });
              //localStorage.setItem('idMsg', JSON.stringify(message.id));
              //console.log('idMsg');
              // store the new state object in the component's state
              this.setState(newState);
              console.log(newMessage)
            })
      
            .catch(error => console.log(error));
        };
      
        render() {
          //localStorage.setItem('idMsg', JSON.stringify(message.id));  {this.state.afficheInputCom?<CommenterMessage  recupIdMessage={message.id} />:null}   <a  href="http://localhost:8081/commenterMessage/" /*value={message.id}*/ className="btnBasMessage"  >Commenter</a>
      //{!(message.userId===localStorage.getItem('idUser'))?this.verifieChangeState:null}
          const allMessage = this.state.messages.map((message) =>
          
          
          
            <div className="messages" key={message.id} >
              <div className="header"><img className="imgProfilCom" src={fotoProfil} alt=""/></div>
              <span className="idmess">id: {message.id} </span>
              <div>
              <h3>{message.userId}</h3>
              <h4>{message.title}</h4>
              <p>{message.content}</p>
              <div className="imagemywall">
                <img src={message.img} alt=""></img>
              </div>
                <div className="bloCommentaire">
                
                <Componentcommentaire recupIdMessage2={message.id}/>
                </div>
              </div>
              <div className="BloBbtnBasMessage">
              <button className="btnBasMessage"  onClick={this.changeState}>Commente</button>
              {this.state.verifie?<button /*className="afficheBtnBasMessage"*/ className="btnBasMessagePerso"  onClick={this.modifierMessageChangeState}>Modifier</button>:null}
              {this.state.verifie?<button  /*className="afficheBtnBasMessage"*/ className="btnBasMessagePerso">Supprimer </button>:null}
              <button className="btnBasMessage" onClick={this.signalChangeState}>Signaler</button>
              </div>
              
              {this.state.modifierMessage?<ComponentModifier recupTitleMessage={message.title} recupContentMessage={message.content}  recupIdMessage={message.id} />:null}
              {this.state.afficheInputSignaler?<ComponentSignaler  recupIdMessage={message.id} />:null}
              {this.state.afficheInputCom?<MiniCommenterMessage  recupIdMessage={message.id} />:null}
            </div>
          );
      
          return (
      
            
    <div className="body">
    
    <h3>Les derniers messages postés par vos Collegues</h3>
    {allMessage}
  </div>
)
           
        };
      }
      
      export default ComponentMessage;