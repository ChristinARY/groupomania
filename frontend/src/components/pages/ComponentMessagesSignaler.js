import React, { Component } from 'react';
import ComponentsupprimerAdmin from './ComponentsupprimerAdmin.js';
import fotoProfil from './fotoProfil.png';


//const APIMSG = 'http://localhost:8080/api/messages?order=id:DESC';
const API_MSG_SIGNAL = 'http://localhost:8080/api/messages/AllMsgSignaler';
//const UserId = localStorage.getItem('idUser');
//const verifie = false ; if(localStorage.getItem('idUser')=message.userId){
           // verifie = false;
         // }

//const APICMT = 'http://localhost:8080/api/messages/commentaire/?order=id:DESC';


    class ComponentMessagesSignale extends Component {


/*componentDidMount(){


}*/


        // default State object
        
        state = {
            msgsignaler: [],
          afficheInputCom:false,
          modifierMessage:false,
          supprimerMessage:false,
        }

        changeState=(event) => {
          this.setState({
            afficheInputCom:true 
          });
          
          //console.log(this.state.nom)
        }

        modifierMessageChangeState=(event) => {
          this.setState({
            modifierMessage:true 
          });
        }
        supprimerMessageChangeState=(event) => {
          this.setState({
            supprimerMessage:true 
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
      
      
              fetch(API_MSG_SIGNAL)
            .then((response) => response.json())
            .then((response) => {
      
              console.log(response)
              
        // create an array of contacts only with relevant data
              const newMsgsignaler = (response.results).map(c => {
                
                return {
                  id: c.id,
                  messageId: c.	messageId,
                  userId: c.userId,
                  signalerContent: c.signalerContent,
                  //img: c.img,
                  //User: c.userId
                };
              });
              // create a new "State" object without mutating 
              // the original State object. 
              const newState = Object.assign({}, this.state, {
                msgsignaler: newMsgsignaler,
                //afficheInputCom:false
              });
              //localStorage.setItem('idMsg', JSON.stringify(message.id));
              //console.log('idMsg');
              // store the new state object in the component's state
              this.setState(newState);
              //console.log(msgsignaler)
            })
      
            .catch(error => console.log(error));
        };
      
        render() {
          //localStorage.setItem('idMsg', JSON.stringify(message.id));  {this.state.afficheInputCom?<CommenterMessage  recupIdMessage={message.id} />:null}   <a  href="http://localhost:8081/commenterMessage/" /*value={message.id}*/ className="btnBasMessage"  >Commenter</a>
      //{!(message.userId===localStorage.getItem('idUser'))?this.verifieChangeState:null}


      //{this.state.verifie?<button /*className="afficheBtnBasMessage"*/ className="btnBasMessagePerso"  /*onClick={this.modifierMessageChangeState}*/>Modifier</button>:null}
      //{this.state.verifie?<button /*className="afficheBtnBasMessage"*/ className="btnBasMessagePerso" onClick={this.supprimerMessageChangeState}>Supprimer </button>:null}

      //{message.userId=localStorage.getItem('idUser')?<button /*className="afficheBtnBasMessage"*/ className="btnBasMessagePerso"  /*onClick={this.modifierMessageChangeState}*/>Modifier</button>:null}
      //{message.userId=localStorage.getItem('idUser')?<button /*className="afficheBtnBasMessage"*/ className="btnBasMessagePerso" onClick={this.supprimerMessageChangeState}>Supprimer </button>:null}
      //{this.state.verifie?<button /*className="afficheBtnBasMessage"*/ className="btnBasMessagePerso"  onClick={this.modifierMessageChangeState}>Modifier</button>:null}
      //{this.state.verifie?<button /*className="afficheBtnBasMessage"*/ className="btnBasMessagePerso" onClick={this.supprimerMessageChangeState}>Supprimer </button>:null}   
      //<h3>{message.userId}</h3>

      //{this.state.afficheInputCom?<MiniCommenterMessage  recupIdMessage={users.id} />:null}
      //              <button /*className="afficheBtnBasMessage"*/ className="btnBasMessagePerso"  onClick={this.modifierMessageChangeState}>Modifier</button>
      
      //<button /*className="afficheBtnBasMessage"*/ className="btnBasMessagePerso" onClick={this.supprimerMessageChangeState}>Supprimer </button>
      const allMsgsignaler = this.state.msgsignaler.map((msgsignaler) =>

            <div className="messages" key={msgsignaler.id} >
              <div className="header"><img className="imgProfilCom" src={fotoProfil} alt=""/></div>
              <span className="idmess">id: {msgsignaler.id} </span>
              <div>
              
              <h4>Id Message Signalé  :{msgsignaler.messageId}</h4>
              <h4>Id de l'utilisateur qui Signale  :{msgsignaler.userId}</h4>
              <p>Raison du Signalement  : {msgsignaler.signalerContent}</p>
              </div>
              <div className="BloBbtnBasMessage">
        
              

              

              </div>
              
              {this.state.supprimerMessage?<ComponentsupprimerAdmin  recupUsersId={msgsignaler.id} />:null}
              
            </div>
          );
      
          return (
      
            
    <div className="body">
    <h2>Bonjour Admin!</h2>
    <h3>Voici Liste Des Messages Signalés!</h3>
    {allMsgsignaler}
  </div>
)
           
        };
      }
      
      export default ComponentMessagesSignale;