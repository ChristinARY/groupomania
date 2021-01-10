import React, { Component } from 'react';
import axios from 'axios';
import '../style/AddMessage.css';
import imgGroupomania from '../images/icon-left-font-monochrome-black.svg'
const API_MESS = 'http://localhost:8080/api/messages/:id';
//const laDate= Date(),
//var annee   = ladate.getFullYear();
////var mois    = ladate.getMonth()+1;
//var jour    = ladate.getDate();
//var heure   = now.getHours();
//var minute  = now.getMinutes();
//var seconde = now.getSeconds();
//const laDate= jour+mois+annee;
//dateDuJour=jour+mois+annee;
class ModifMessage extends Component {

  constructor(props) {
    super(props)
   
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContent= this.onChangeContent.bind(this);
    this.onChangeImg= this.onChangeImg.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        userId:'',
        title: '',
        content: '',
        img:''
    }
}


onChangeTitle(e) {
  this.setState({ title: e.target.value })
}

onChangeContent(e) {
  this.setState({ content: e.target.value })
}
onChangeImg(e) {
  this.setState({ img: e.target.value })
}

onSubmit(e) {
  e.preventDefault()
  
  /*const tokenId = JSON.parse(localStorage.getItem(('userTokenLog')))
  axios.defaults.headers.common = {'Authorization': `Bearer ${tokenId.token}`}
  console.log(JSON.parse(localStorage.getItem('userTokenLog')))*/
  const messObject = {
      userId:localStorage.getItem('idUser'),
      title: this.state.title,
      content: this.state.content,
      img: this.state.img,
      //createdAt:dateDuJour
  };

  let newMsg = JSON.stringify(messObject);
  console.log(newMsg);

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




    fetch(API_MESS, {
      method: "POST",
      headers:(headers),
      body: newMsg,
    })
      .then((responsePost) => responsePost.json())
      .then((responsePost) => {
        console.log(newMsg)
        console.log(responsePost)
        
      });









  /*axios.post(API_MESS , newMsg)
  
      .then((res) => {
          console.log(res.data)
      }).catch((error) => {
          console.log(error)
      });*/

  this.setState({ title: '', content: '', img:''})
  window.location = "/mywall";
    }
}

  render() {

    const tokenId = JSON.parse(localStorage.getItem(('userTokenLog')))
  if(tokenId === null) {
    window.location = "/login"
  }

    return (
      <div className="ajoutmessage">
          <h1>Ajouter un message</h1>
          <form onSubmit={this.onSubmit}>
          <div className="inputMessage">
                <label htmlFor="titre">Titre</label>
          <br /><input id="titre" value={this.state.title} onChange={this.onChangeTitle} />
          <br /><label htmlFor="contenu">Contenu du message</label>
          <br /><textarea id="contenu" value={this.state.content} onChange={this.onChangeContent} />
          <br /><label htmlFor="URL">Lien contenu multimédia (optionnel)</label>
          <br /><input id="URL" value={this.state.img} onChange={this.onChangeImg} placeholder="https://www.example.com/images/monImage.jpg" />
          <br /><button className="post">Poster le message</button>
          </div>
          </form>
          <div className="imgFooter"><img src={imgGroupomania} alt='groupomania img'></img></div>
      </div>
    );
  }

}


export default ModifMessage;