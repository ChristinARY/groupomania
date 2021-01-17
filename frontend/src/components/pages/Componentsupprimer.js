import React, { Component } from 'react';
import '../style/AddMessage.css';

//const API_REP_MESS = 'http://localhost:8080/api/messages/commentaires/';
const API_SUP_MESS = 'http://localhost:8080/api/messages/';

class Componentsupprimer extends Component {

  constructor(props) {
    super(props)
   
    //this.onChangeContent= this.onChangeContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   

    this.state = {
        messageId:''
    }
}




/*onChangeContent(e) {
  this.setState({ contentCom: e.target.value })
}*/


onSubmit(e) {
  e.preventDefault()
  
  /*const tokenId = JSON.parse(localStorage.getItem(('userTokenLog')))
  axios.defaults.headers.common = {'Authorization': `Bearer ${tokenId.token}`}
  console.log(JSON.parse(localStorage.getItem('userTokenLog')))*/
  const respMessObject = {
      //userId:localStorage.getItem('idUser'),
      messageId:this.props.recupIdMessage,
      //contentCom: this.state.contentCom,
  };

  let newMsgSup = JSON.stringify(respMessObject);
  console.log(newMsgSup);

  //console.log(messObject);

  if (window.confirm("Voulez-vous vraiment supprimer cette publication ?"))
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




    fetch(API_SUP_MESS+this.props.recupIdMessage)
      .then((responsePost) => responsePost.json())
      .then((responsePost) => {
        console.log(newMsgSup)
        console.log(responsePost)
        
      });








  //this.setState({ content: ''})
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
          <h1>Voulez vous vraiment Supprimer ce message</h1>
          <form onSubmit={this.onSubmit}>
          <div >
          <br /><button className="post">Confirmer la suppression</button>
          </div>
          </form>
          
      </div>
    );
  }

}


export default Componentsupprimer;