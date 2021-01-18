import React, { Component } from 'react';
import ComponentsupprimerAdmin from './ComponentsupprimerAdmin.js';
import fotoProfil from './fotoProfil.png';


//const APIMSG = 'http://localhost:8080/api/messages?order=id:DESC';
const API_ALL_USERS = 'http://localhost:8080/api/auth/';
//const UserId = localStorage.getItem('idUser');
//const verifie = false ; if(localStorage.getItem('idUser')=message.userId){
           // verifie = false;
         // }

//const APICMT = 'http://localhost:8080/api/messages/commentaire/?order=id:DESC';


    class ComponentAllUsersAdmin extends Component {


/*componentDidMount(){


}*/


        // default State object
        
        state = {
          users: [],
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
      
      
              fetch(API_ALL_USERS)
            .then((response) => response.json())
            .then((response) => {
      
              console.log(response)
              
        // create an array of contacts only with relevant data
              const newUsers = (response.results).map(c => {
                
                return {
                  id: c.id,
                  phone: c.phone,
                  username: c.username,
                 
                  //img: c.img,
                  //User: c.userId
                };
              });
              // create a new "State" object without mutating 
              // the original State object. 
              const newState = Object.assign({}, this.state, {
                users: newUsers,
                //afficheInputCom:false
              });
              //localStorage.setItem('idMsg', JSON.stringify(message.id));
              //console.log('idMsg');
              // store the new state object in the component's state
              this.setState(newState);
              console.log(newUsers)
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
      const allUsers = this.state.users.map((users) =>

            <div className="messages" key={users.id} >
              <div className="header"><img className="imgProfilCom" src={fotoProfil} alt=""/></div>
              <span className="idmess">id: {users.id} </span>
              <div>
              
              <h4>{users.phone}</h4>
              <h4>{users.username}</h4>
              </div>
              <div className="BloBbtnBasMessage">
        
              

              <button /*className="afficheBtnBasMessage"*/ className="btnBasMessagePerso" onClick={this.supprimerMessageChangeState}>Supprimer </button>

              </div>
              
              {this.state.supprimerMessage?<ComponentsupprimerAdmin  recupUsersId={users.id} />:null}
              
            </div>
          );
      
          return (
      
            
    <div className="body">
    
    <h3>TOUS LES UTILISATEURS</h3>
    {allUsers}
  </div>
)
           
        };
      }
      
      export default ComponentAllUsersAdmin;