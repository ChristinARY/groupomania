import React from "react";
import imgProfil from './imgProfil2.png';
console.log(JSON.parse(localStorage.getItem("infoUser")));
console.log(JSON.parse(localStorage.getItem("infoUser")).username);


 
  const nomUser=JSON.parse(localStorage.getItem("infoUser")).username;
  const phoneUser=JSON.parse(localStorage.getItem("infoUser")).phone;
    
//const menu = () => <div className="menu" />;
const InfoUser = () => (

    <div>
      <legend>Infomations Personnelles</legend>
      
      
   <div className="header"><img className="imgProfil" src={imgProfil} alt=""/></div>

   <div>
   <h4>Nom d' Utilisateur : <span >{nomUser}</span></h4>
         <h4>Telephone: <span >{phoneUser}</span></h4>
        
      </div>
   
      </div>
)

export default InfoUser;

