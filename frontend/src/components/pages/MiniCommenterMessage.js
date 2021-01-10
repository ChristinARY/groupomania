import React, { Component } from 'react';
import '../style/AddMessage.css';

const API_REP_MESS = 'http://localhost:8080/api/messages/commentaires/';

class MiniCommenterMessage extends Component {

  constructor(props) {
    super(props)
   
    this.onChangeContent= this.onChangeContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   

    this.state = {
        messageId:'',
        userId:'',
        contentCom: '',
    }
}




onChangeContent(e) {
  this.setState({ contentCom: e.target.value })
}


onSubmit(e) {
  e.preventDefault()
  
  /*const tokenId = JSON.parse(localStorage.getItem(('userTokenLog')))
  axios.defaults.headers.common = {'Authorization': `Bearer ${tokenId.token}`}
  console.log(JSON.parse(localStorage.getItem('userTokenLog')))*/
  const respMessObject = {
      userId:localStorage.getItem('idUser'),
      messageId:this.props.recupIdMessage,
      contentCom: this.state.contentCom,
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








  this.setState({ content: ''})
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
          
          <form onSubmit={this.onSubmit}>
          <div >
          <br /><textarea id="contenu" value={this.state.content} onChange={this.onChangeContent} />
          <br /><button className="post">Poster le Commentaire</button>
          </div>
          </form>
          
      </div>
    );
  }

}


export default MiniCommenterMessage;