import React, { Component } from 'react';
import '../style/AddMessage.css';

const API_Modif_MESS = 'http://localhost:8080/api/messages/';
//const API_MESS = 'http://localhost:8080/api/messages/:id';

class ComponentModifier extends Component {

  constructor(props) {
    super(props)
   
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContent= this.onChangeContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   

    this.state = {
        title: '',
        content: ''
    }
}

//this.setState({ title: this.props.recupTitleMessage, content: this.props.recupContentMessage})


onChangeTitle(e) {
    this.setState({ title: e.target.value })
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
    //messageId:this.props.recupIdMessage,
    title: this.state.title,
    content: this.state.content,
  };

  let newMsgMofif = JSON.stringify(respMessObject);
  console.log(newMsgMofif);

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




    fetch(API_Modif_MESS+this.props.recupIdMessage, {
      method: "POST",
      headers:(headers),
      body: newMsgMofif,
    })
      .then((responsePost) => responsePost.json())
      .then((responsePost) => {
        console.log(newMsgMofif)
        console.log(responsePost)
        
      });








  this.setState({ title: '', content: ''})
  //window.location = "/mywall";
    }
}

  render() {

    const tokenId = JSON.parse(localStorage.getItem(('userTokenLog')))
  if(tokenId === null) {
    window.location = "/login"
  }

    return (
        <div>
          <h1>Modifier le message</h1>
          <form onSubmit={this.onSubmit}>
          <div >
          <label htmlFor="titre">Titre</label>
          <br /><input id="titre" value={this.state.title} onChange={this.onChangeTitle} />
          <br /><label htmlFor="contenu">Contenu du message</label>
          <br /><textarea id="contenu" value={this.state.content} onChange={this.onChangeContent} />
          <br /><button className="post">Modifier le Commentaire</button>
          </div>
          </form>
          
      </div>
    );
  }

}


export default ComponentModifier;