import React, { Component } from 'react';
import '../style/AddMessage.css';

const API_SIGNAL_MESS = 'http://localhost:8080/api/messages/signaler/';

class ComponentSignaler extends Component {

  constructor(props) {
    super(props)
   
    this.onChangeContent= this.onChangeContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   

    this.state = {
        messageId:'',
        userId:'',
        signalerContent: '',
    }
}




onChangeContent(e) {
  this.setState({ signalerContent: e.target.value })
}


onSubmit(e) {
  e.preventDefault()
  
  /*const tokenId = JSON.parse(localStorage.getItem(('userTokenLog')))
  axios.defaults.headers.common = {'Authorization': `Bearer ${tokenId.token}`}
  console.log(JSON.parse(localStorage.getItem('userTokenLog')))*/
  const respMessObject = {
      userId:localStorage.getItem('idUser'),
      messageId:this.props.recupIdMessage,
      signalerContent: this.state.signalerContent,
  };

  let newMsgSignaler = JSON.stringify(respMessObject);
  console.log(newMsgSignaler);

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




    fetch(API_SIGNAL_MESS, {
      method: "POST",
      headers:(headers),
      body: newMsgSignaler,
    })
      .then((responsePost) => responsePost.json())
      .then((responsePost) => {
        console.log(newMsgSignaler)
        console.log(responsePost)
        
      });

  this.setState({ signalerContent: ''})
  window.location = "/mywall";
    }
}

  render() {

    const tokenId = JSON.parse(localStorage.getItem(('userTokenLog')))
  if(tokenId === null) {
    window.location = "/login"
  }

    return (
        <div>
          <h4>Expliquez nous Pourquoi vous signalez vous cette Publication</h4>
          <form onSubmit={this.onSubmit}>
          <div >
          <label htmlFor="titre">Ajouter un message</label>
          <br /><textarea id="contenu" value={this.state.content} onChange={this.onChangeContent} />
          <br /><button className="post">Signaler</button>
          </div>
          </form>
          
      </div>
    );
  }

}


export default ComponentSignaler;