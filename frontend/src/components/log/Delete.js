  
import React from "react";
import axios from "axios";
console.log(JSON.parse(localStorage.getItem("infoUser")).id);
const API = 'http://localhost:8080/api/auth/'+localStorage.getItem('idUser')



const Delete = () => {

  /*this.state = {
    userId:''
}*/


  
  const tokenId = JSON.parse(localStorage.getItem(('userTokenLog')))
  axios.defaults.headers.common = {'Authorization': `Bearer ${tokenId.token}`}

  const deleteProfile = async()=> {
    if (window.confirm("Voulez-vous vraiment supprimer votre profil ?"))
    {
      //const userId= localStorage.getItem('idUser');
      //let id = JSON.stringify(userId);
      
      const headers = { 
        "Content-Type": "application/json",
       //Authorization: 'Bearer' + tokenId,
      //'Accept-Language': language
      };

      fetch(API,{
        method: "POST",
        headers:(headers),
        //body: id,
      })
        .then((responsePost) => responsePost.json())
        .then((responsePost) => {
          //console.log(newMsg)
          console.log(responsePost)
          
        });




  /*axios.post(API,{
    method: "POST",
    headers:(headers),
    body: userId,
  })
  .then((res) => {
    console.log(res.data)
}).catch((error) => {
    console.log(error)
});*/
    //localStorage.clear()
    //window.location = "/";
    //localStorage.setItem("infoUser",JSON.stringify({id:"",username:"",phone:""}));
}
  };

  return (
    <div>
      <button onClick={deleteProfile} className="delete">Supprimer votre profil</button>
    </div>
  );
};

export default Delete;

